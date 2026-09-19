# ⚡ Yuna Heo — Developer Portfolio

> 웹 프론트엔드를 중심으로 FastAPI 백엔드, 실시간 AI 비전, 게임 및 인터랙티브 웹을 아우르는 개발자 허윤아의 개인 포트폴리오 웹사이트입니다.

<br />

## 📸 Preview

<img width="1897" height="851" alt="image" src="https://github.com/user-attachments/assets/67f9a1cb-b0d1-461f-b192-d69015d1a16c" />

---

## 🎯 제작 동기 및 목적

* **역량 아카이빙 및 시각화**: 덕성여자대학교 멋쟁이사자처럼(13기 아기사자 ➔ 14기 운영진) 활동, 해커톤, 개인 풀스택 프로젝트 등 그동안 구축해 온 작업물들을 한눈에 조망할 수 있는 통합 쇼케이스 플랫폼을 구축하고자 했습니다.
* **인터랙티브 UI/UX 실험**: 단순 나열식 문서를 벗어나 **Framer Motion**과 커스텀 마우스 인터랙션을 결합해 생동감 있는 사용자 경험을 직접 설계하고 구현했습니다.
* **최신 웹 기술 스택 내재화**: Next.js의 최신 App Router 아키텍처, TypeScript 기반 타입 안정성, Tailwind CSS를 활용한 다크 네이비 & 오렌지 테마 시스템을 적용했습니다.

---

## 🛠 Tech Stack

### Core & Framework
* **Framework**: Next.js 15+ (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animation & Interaction**: Framer Motion, Canvas Confetti
* **Icons**: Lucide React

### Architecture & Design
* **Color Scheme**: Deep Navy (`#070b14`, `#0b132b`) & Vivid Orange (`#f97316`)
* **Deployment**: Vercel

---

## ✨ Key Features

* **Interactive Background**: 마우스 커서의 궤적을 실시간으로 추적하는 앰비언트 오렌지 글로우 효과
* **Multi-Category Dynamic Filtering**: 하나의 프로젝트가 여러 도메인(Frontend, Full Stack, AI / Vision, Game 등)에 속할 때도 유연하게 탐색할 수 있는 필터링 및 레이아웃 트랜지션
* **Responsive & Adaptive UI**: 모바일 뷰부터 데스크톱 와이드 화면까지 유연하게 대응하는 반응형 그리드
* **Direct External Links**: 각 프로젝트 카드마다 GitHub 저장소 및 실시간 배포/데모 링크가 있을 때만 활성화되는 직관적인 아이콘 버튼

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx                # 루트 레이아웃 & 메타데이터
│   ├── page.tsx                  # 포트폴리오 메인 뷰 (인터랙션 및 그리드)
│   └── globals.css               # 글로벌 스타일 & Tailwind 유틸리티
├── components/
│   └── InteractiveBackground.tsx # 마우스 트래킹 앰비언트 조명 컴포넌트
└── data/
    └── profile.ts                # 프로필 정보 및 프로젝트 데이터 모델
```

---

## 🚀 Getting Started

```
# 1. 저장소 클론
git clone [https://github.com/gjdbsdk/gjdbsdk_portfolio.git](https://github.com/gjdbsdk/gjdbsdk_portfolio.git)
cd gjdbsdk_portfolio

# 2. 의존성 패키지 설치
npm install

# 3. 로컬 개발 서버 실행
npm run dev
```

---

## 📬 Contact
Name: 허윤아 (Yuna Heo)

Affiliation: 덕성여자대학교 디지털소프트웨어공학부 (24학번) | 덕성여대 멋쟁이사자처럼 14기 운영진

GitHub: [@gjdbsdk](https://github.com/gjdbsdk) <br>
Discord: [허윤아](https://discord.com/users/810888409039765518) <br>
Gmail: aquahua0409@gmail.com
