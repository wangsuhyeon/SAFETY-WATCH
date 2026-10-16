/*
  ─────────────────────────────────────────────────────────────────────
  열화상 카메라(MLX90640, 32×24) · 해변 안전 관제 사이트 연동 스케치
  (Arduino UNO R4 WiFi 대응 수정본)
  ─────────────────────────────────────────────────────────────────────
  출력 형식(사이트 파서와 호환):
    {"temp":36.82,"max":37.10}     → 프레임 내 최고 온도
    {"f":[...768 정수...]}         → 32×24 열화상 프레임(0.01°C)
  수신 명령:
    'T'  → D12 릴레이(구명 튜브 사출) 800ms
    'F'  → 열화상 프레임 1장 즉시 전송

  수정 사항:
    1) GetFrameData 반환값: 성공 시 0 또는 1(서브페이지 번호), 실패 시 음수
    2) 서브페이지 2개를 모두 읽은 뒤에 한 프레임으로 처리
    3) CalculateTo 에 반사 온도(tr) 인자 추가
    4) 실패 시 ExtractParameters 재호출 제거
    5) while(!Serial) 에 타임아웃 추가 (네이티브 USB 대기 방지)
    6) I2C 클럭 100kHz 로 시작 (안정화 후 400000 으로 올려도 됨)
    7) 불필요한 delay 제거, Wire.begin 중복 제거

  필요 라이브러리: "SparkFun MLX90640" (MLX90640_API.h / MLX90640_I2C_Driver.h)
  배선: 3V3 · GND · SDA(A4) · SCL(A5) · I2C 주소 0x33
  ─────────────────────────────────────────────────────────────────────
*/
#include <Wire.h>
#include <Servo.h>

#include <MLX90640_API.h>
#include <MLX90640_I2C_Driver.h>

/* ── 보드 구성 ── */
const int PIN_LED   = 3;       // LED
const int PIN_BUZZ  = 2;       // 부저
const int PIN_SERVO = 9;       // 서보모터
const int PIN_RELAY = 12;      // 구명 튜브 사출 릴레이 ('T' 명령)
const uint8_t THERMAL_ADDR = 0x33;  // MLX90640 기본 I2C 주소

Servo myServo;

/* ── MLX90640 버퍼 ── */
static float    mlx90640To[768];
static uint16_t mlx90640Frame[834];
paramsMLX90640  mlx90640params;
float emissivity = 0.95;       // 사람 피부 방사율
const float TA_SHIFT = 8.0;    // 반사 온도 보정값 (Melexis 권장 기본값)

uint32_t frameCount = 0;
const uint8_t HEAT_EVERY = 8;  // 8프레임마다 32×24 히트맵 1장 전송

/* 0.01°C 정수로 변환 (-40.00 ~ 400.00°C) */
int16_t toFixed(float c) {
  if (isnan(c)) return 0;
  if (c < -40.0f)  return -4000;
  if (c > 400.0f)  return 40000;
  return (int16_t)roundf(c * 100.0f);
}

/* ── 부팅 자체 점검 ── */
void runSelfTest() {
  Serial.println("\n=================================");
  Serial.println("   하드웨어 종합 기능 테스트 시작   ");
  Serial.println("=================================");

  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_BUZZ, OUTPUT);
  pinMode(PIN_RELAY, OUTPUT);
  digitalWrite(PIN_RELAY, LOW);
  myServo.attach(PIN_SERVO);
  Wire.begin();

  Serial.println("[1/4] LED 테스트 중...");
  digitalWrite(PIN_LED, HIGH); delay(700);
  digitalWrite(PIN_LED, LOW);  delay(300);

  Serial.println("[2/4] 부저 테스트 중...");
  digitalWrite(PIN_BUZZ, HIGH); delay(200);
  digitalWrite(PIN_BUZZ, LOW);  delay(400);

  Serial.println("[3/4] 서보모터 테스트 중 (0도 -> 90도 -> 180도)...");
  myServo.write(0);   delay(300);
  myServo.write(90);  delay(300);
  myServo.write(180); delay(300);
  myServo.write(90);  delay(300);
  myServo.write(0);   delay(300);

  Serial.println("[4/4] 열화상 센서(MLX90640) I2C 통신 스캔 중...");
  Wire.beginTransmission(THERMAL_ADDR);
  byte err = Wire.endTransmission();
  if (err == 0) {
    Serial.println("  👉 [성공] 열화상 센서 I2C 응답 (주소 0x33)");
  } else {
    Serial.print("  👉 [실패] 응답 없음 (에러코드: ");
    Serial.print(err);
    Serial.println(") - 3.3V / GND / SDA / SCL 을 확인하세요.");
  }
}

/* ── MLX90640 초기화 ── */
bool setupThermal() {
  Wire.setClock(100000);   // 안정적으로 동작하면 400000 으로 올려도 됨

  int ee = MLX90640_DumpEE(THERMAL_ADDR, mlx90640Frame);
  if (ee != 0) {
    Serial.print("MLX90640 EEPROM 읽기 실패 (코드 ");
    Serial.print(ee);
    Serial.println(") — 배선/전압 확인 후 다시 업로드");
    return false;
  }
  int prm = MLX90640_ExtractParameters(mlx90640Frame, &mlx90640params);
  if (prm != 0) {
    Serial.print("MLX90640 파라미터 추출 실패 (코드 ");
    Serial.print(prm);
    Serial.println(")");
    return false;
  }
  MLX90640_SetRefreshRate(THERMAL_ADDR, 0x03);   // 0x03 = 4Hz
  return true;
}

/* ── 열화상 프레임 1장(서브페이지 2개) 수신 → 768개 온도 계산 ── */
bool readThermalFrame() {
  for (uint8_t sp = 0; sp < 2; sp++) {
    int status = -1;
    for (int attempt = 0; attempt < 6; attempt++) {
      status = MLX90640_GetFrameData(THERMAL_ADDR, mlx90640Frame);
      if (status >= 0) break;          // 0 또는 1 = 성공
      delay(5);
    }
    if (status < 0) {
      Serial.print("ERR:MLX90640 프레임 수신 실패 (코드 ");
      Serial.print(status);
      Serial.println(")");
      return false;
    }
    float tr = MLX90640_GetTa(mlx90640Frame, &mlx90640params) - TA_SHIFT;
    MLX90640_CalculateTo(mlx90640Frame, &mlx90640params, emissivity, tr, mlx90640To);
  }
  frameCount++;
  return true;
}

/* ── 측정 결과 전송 ── */
void emitStats() {
  float hot = mlx90640To[0];
  for (int i = 1; i < 768; i++) {
    if (mlx90640To[i] > hot) hot = mlx90640To[i];
  }
  Serial.print("{\"temp\":");
  Serial.print(hot, 2);
  Serial.print(",\"max\":");
  Serial.print(hot, 2);
  Serial.println("}");
}

void emitHeatmapFrame() {
  Serial.print("{\"f\":[");
  for (int i = 0; i < 768; i++) {
    if (i) Serial.print(',');
    Serial.print(toFixed(mlx90640To[i]));
  }
  Serial.println("]}");
}

/* ── 사이트 → 아두이노 명령 처리 ── */
void handleInbound() {
  while (Serial.available() > 0) {
    char c = (char)Serial.read();
    if (c == 'T') {                 // 튜브 사출
      digitalWrite(PIN_RELAY, HIGH);
      delay(800);
      digitalWrite(PIN_RELAY, LOW);
      Serial.println("deploy:T");
    } else if (c == 'F') {          // 프레임 즉시 요청
      if (readThermalFrame()) emitHeatmapFrame();
    }
  }
}

void setup() {
  Serial.begin(115200);
  uint32_t t0 = millis();
  while (!Serial && millis() - t0 < 3000) {}   // 최대 3초만 대기

  runSelfTest();
  Serial.println("---------------------------------");

  if (setupThermal()) {
    Serial.println("MLX90640 준비 완료 → 실측 온도 스트리밍 시작 (사이트 연결 시 자동 표시)");
  } else {
    Serial.println("MLX90640 초기화 실패 — 배선 점검이 끝난 뒤 보드를 재시작하세요.");
  }
}

void loop() {
  handleInbound();

  if (readThermalFrame()) {
    emitStats();                                          // 매 프레임 최고 온도
    if (frameCount % HEAT_EVERY == 0) emitHeatmapFrame(); // 주기적 32×24 프레임
  }
}