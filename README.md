# 🌊 beach-watch

> **해변 안전을 모니터링하고 사고를 예방하기 위한 웹 기반 안전 조망 시스템입니다.**

---

## 📌 1. 문제 정의 (Problem Definition)
* **배경:** 매년 여름철 해수욕장 및 해변에서 익사, 안전 구역 이탈, 야간 입수 등 다양한 안전사고가 빈번히 발생하고 있습니다.
* **목표:** 인력이 부족한 해변 안전 요원을 보조하기 위해, 웹 환경에서 실시간으로 위험 요소를 감지하고 시각적인 경고 신호를 줄 수 있는 모니터링 도구를 제공합니다.

---

## 🏗️ 2. 시스템 아키텍처 (Architecture)
프로젝트의 전체적인 흐름과 데이터의 흐름은 다음과 같습니다.

[ 웹 브라우저 (index.html) ]
│
├─► [ 카메라 / 비디오 입력 스트림 ]
│
├─► [ AI 모델 (객체 인식 및 위험 구역 감지) ]
│
└─► [ 모니터링 대시보드 UI (경고 메시지 & 신호 시각화) ]


---

## 🛠️ 3. 사용 스택 (Tech Stack)
* **Frontend:** HTML5, JavaScript
* **AI & Libraries:** Codex, vscode
* **Design & UI:** stitch

---

## 🚀 4. 실행 방법 (How to Run)
내 컴퓨터(로컬)에서 이 프로젝트를 실행하는 방법입니다.

1. **저장소 클론 (Clone)**
   ```bash
   git clone [https://github.com/wangsuhyeon/beach-safety-watch.git](https://github.com/wangsuhyeon/beach-safety-watch.git)
