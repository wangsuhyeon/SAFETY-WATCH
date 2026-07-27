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


---

## 🤖 5. 사용 AI 내역 (AI Models & Tools)

본 프로젝트는 실시간 객체 탐지 알고리즘과 개발 보조 AI 도구를 활용하여 구축되었습니다.

### 1) AI Model & Library
* **TensorFlow.js & COCO-SSD:** 웹 브라우저 환경에서 별도의 서버 통신 없이 실시간으로 웹캠 영상 내 사람(Person)을 탐지합니다.

### 2) AI 기반 기능 구현
* **실시간 위험 감지:** 탐지된 사람의 바운딩 박스(Bounding Box) 위치와 사용자가 설정한 위험 경계선을 비교합니다.
* **자동 경고 시스템:** 신체 영역이 위험 경계선을 침범하면 위험 상황으로 판단하여 **브라우저 경고음 및 알림**을 발생시킵니다.

### 3) AI Tools
* **Codex:** 코드 작성, 모니터링 로직 구현 및 개발 보조 도구로 활용했습니다.
