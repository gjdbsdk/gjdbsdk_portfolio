# ⚡ Yuna Heo — Developer Portfolio

> 웹 프론트엔드를 중심으로 실시간 AI 비전, 게임 및 인터랙티브 웹과 디자인을 아우르는 개발자 허윤아의 개인 포트폴리오 웹사이트입니다.

<br />

## 📸 Preview

<img width="1897" height="851" alt="image" src="https://github.com/user-attachments/assets/67f9a1cb-b0d1-461f-b192-d69015d1a16c" />

---

## 🎯 제작 동기 및 목적

* **역량 아카이빙 및 시각화**: 덕성여자대학교 멋쟁이사자처럼(13기 아기사자 ➔ 14기 운영진) 활동, 해커톤, 동아리 리더십 및 디자인·개발 작업물들을 한눈에 조망할 수 있는 통합 쇼케이스 플랫폼을 구축하고자 했습니다.
* **인터랙티브 UI/UX 실험**: 단순 나열식 문서를 벗어나 **Framer Motion**과 커스텀 3D 마우스 스포트라이트 인터랙션을 결합해 생동감 있는 사용자 경험을 직접 설계하고 구현했습니다.
* **최신 웹 기술 스택 내재화**: Next.js의 최신 App Router 아키텍처, TypeScript 기반 타입 안정성, Tailwind CSS를 활용한 다크 네이비 & 앰버 코랄 테마 시스템을 적용했습니다.

---

## 🛠 Tech Stack

### Core & Frontend
![Next.js](https://img.shields.io/badge/Next.js%2015+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Interaction & UI
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=feather&logoColor=white)
![Canvas Confetti](https://img.shields.io/badge/Canvas_Confetti-FF6B4A?style=for-the-badge&logo=sparkles&logoColor=white)

### Deployment & Tools
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

* **3-Track Architecture**: [개발(Development)], [디자인(Design)], [운영 & 기획(Management)] 3개 도메인별 탭 분리 제공
* **Mouse-Tracking 3D Spotlight**: 마우스 커서의 물리적 위치에 반응하는 카드 3D 틸트 각도 제어 및 방사형 조명 하이라이트
* **Award & Advancement Badges**: 해커톤 수상/본선 진출 내역을 시각화하고 마우스 호버 시 세부 정보가 뜨는 인터랙티브 툴팁
* **Interactive Background**: 마우스 커서를 은은하게 추적하는 앰비언트 글로우 및 마이크로 도트 매트릭스 그리드
* **Multi-Category Dynamic Filtering**: 다중 카테고리(Frontend, Full Stack, AI / Vision, Game 등) 태그 기반의 실시간 프로젝트 재배치 애니메이션
* **Conditional Direct Links**: GitHub 저장소 및 실서비스 배포/데모 링크 존재 여부에 따른 조건부 아이콘 렌더링

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx                # 루트 레이아웃 & 메타데이터
│   ├── page.tsx                  # 포트폴리오 메인 뷰 (탭 전환, 필터, 반응형 그리드)
│   └── globals.css               # 글로벌 스타일 & Tailwind 유틸리티
├── components/
│   ├── InteractiveBackground.tsx # 마우스 트래킹 앰비언트 배경 컴포넌트
│   └── SpotlightCard.tsx         # 3D 틸트 & 마우스 스포트라이트 카드 컴포넌트
└── data/
    └── profile.ts                # 프로젝트, 디자인 산출물, 운영 이력 데이터 모델
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
