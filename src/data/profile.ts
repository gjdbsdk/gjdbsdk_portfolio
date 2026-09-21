export type MainTabType = "Development" | "Design" | "Management";
export type CategoryType = "Full Stack" | "Frontend" | "AI / Vision" | "Game";

export interface AwardInfo {
  label: "수상" | "진출";
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  category: CategoryType[];
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: string;
  award?: string | AwardInfo;
}

export interface DesignWork {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  deliverables: string[];
  tags: string[];
  link?: string;
}

export interface ManagementWork {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export const PROFILE = {
  name: "허윤아 (Yuna Heo)",
  role: "Creative Full-Stack Developer & Technical Leader",
  university: "덕성여자대학교 디지털소프트웨어공학부 (24학번)",
  likelion:
    "멋쟁이사자처럼 13기 ➔ 14기 프론트엔드장 / 기획부 / 꽃신 14기 사무부장",
  bio: "웹 프론트엔드부터 AI 비전 풀스택, 유니티 3D까지 구현하며, 기술 리더십과 기획·디자인 감각을 결합해 밀도 높은 가치를 만드는 개발자입니다.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Django",
    "Unity (C#)",
    "WebGL",
    "PWA",
    "WebSockets",
  ],
  projects: [
    {
      id: "pipomi",
      title: "PIPOMI",
      category: ["Frontend"],
      highlight: "13기 여기톤 프로젝트",
      description:
        "개인별 생체 주기 변화에 맞추어 신체 부담을 줄이고 회복 탄력성을 높여주는 맞춤형 홈트레이닝 루틴을 추천하는 헬스케어 웹 서비스",
      tags: ["HTML/CSS", "JavaScript", "Healthcare"],
      award: "13기 여기톤 준결승 진출",
      githubUrl: "https://github.com/2025-HERETHON/2025-herethon-21.git",
    },
    {
      id: "farmfarm",
      title: "FarmFarm",
      category: ["Frontend"],
      highlight: "13기 중앙해커톤 프로젝트",
      description:
        "세대 간 소통과 로컬 농산물 소비 활성화를 목표로 장보기 탐색 동선과 사용자 친화적 주문 인터페이스를 구현한 로컬 커머스 플랫폼",
      tags: ["HTML/CSS", "JavaScript", "Responsive Web"],
      githubUrl: "https://github.com/naeuun/dukventure.git",
    },
    {
      id: "carrot_clonecoding",
      title: "당근마켓 프론트엔드 클론코딩",
      category: ["Frontend"],
      highlight: "프론트엔드 스터디 클론코딩",
      description:
        "당근마켓의 핵심 피드 뷰와 물품 상세 페이지 레이아웃 및 내비게이션 인터랙션을 분석하고 직접 마크업하여 배포한 스터디 프로젝트",
      tags: ["HTML/CSS", "JavaScript", "Clone Coding", "Vercel"],
      githubUrl: "https://github.com/alskso/2025_StudyClone.git",
      liveUrl: "https://2025-study-clone.vercel.app/",
    },
    {
      id: "withu",
      title: "WithU",
      category: ["Frontend"],
      highlight: "W:Hack 해커톤 프로젝트",
      description:
        "사회적 연대와 상호 지원을 기획 의도로 담아 직관적인 UI 구조와 모바일 친화적 반응형 레이아웃으로 퍼블리싱한 해커톤 웹 서비스",
      tags: ["HTML/CSS", "JavaScript", "Responsive UI"],
      githubUrl: "https://github.com/gjdbsdk/With_U.git",
    },
    {
      id: "finhabit",
      title: "Finhabit",
      category: ["Frontend"],
      highlight: "소비 습관 트래커",
      description:
        "인터랙티브 캘린더 인터페이스와 지출 시각화 차트를 통해 일일 소비 루틴을 직관적으로 기록하고 관리할 수 있도록 설계한 핀테크 웹 서비스",
      tags: ["React", "TypeScript", "Interactive UI", "REST API"],
      githubUrl: "https://github.com/finhabit",
      liveUrl: "https://finhabit.vercel.app/",
    },
    {
      id: "likelion14threcrewting",
      title: "덕성 멋사 14기 리쿠르팅 사이트",
      category: ["Frontend"],
      highlight: "덕성여대 멋사 14기 공식 웹사이트",
      description:
        "신규 부원 모집을 위해 레거시 코드를 모듈화하여 리팩토링하고 지원 안내 인터랙션과 반응형 레이아웃, PWA 기능을 구축한 공식 웹 플랫폼",
      tags: ["React", "TypeScript", "PWA", "Responsive Web", "Refactoring"],
      githubUrl: "https://github.com/2026-LIKELION-DS/2026-LikeLionDS-FE.git",
      liveUrl: "https://likelion-duksung.site/",
    },
    {
      id: "geunhwaje",
      title: "2026 근화제 축제 웹사이트",
      category: ["Frontend"],
      highlight: "덕성여대 축제 공식 프론트엔드",
      description:
        "인터랙티브 캠퍼스 맵, 실시간 부스·푸드트럭 모달 안내, 오프라인 환경 캐싱을 지원하는 PWA 기반 모바일 최적화 축제 웹 플랫폼",
      tags: ["React", "TypeScript", "PWA", "Interactive Map"],
      githubUrl: "https://github.com/2026-LIKELION-DS/2026-DSFest-FE.git",
      liveUrl: "https://www.youth-of-duksung.site/",
    },
    {
      id: "aquafarming",
      title: "AquaFarming",
      category: ["Game"],
      highlight: "Unity 3D 시뮬레이션 프로젝트",
      description:
        "물리 충돌 판정과 자원 관리 및 육성 루프를 설계한 3D 수중 파밍 시뮬레이션 게임으로, WebGL 빌드를 적용해 웹 브라우저 실시간 플레이 환경을 구축",
      tags: ["Unity", "C#", "3D Simulation", "WebGL", "Game Dev"],
      githubUrl: "https://github.com/gjdbsdk/AquaFarming.git",
      liveUrl:
        "http://203.252.213.209:5050/play/6a34f794ac91f2efcad2f890?year=2026&semester=1&id=20240960",
    },
    {
      id: "hale",
      title: "HALE",
      category: ["Frontend"],
      highlight: "14기 중앙해커톤 프로젝트",
      description:
        "시술 후 민감해진 피부 상태를 진단하고 변화 단계에 맞춘 데일리 회복 루틴을 제안하는 AI 맞춤형 피부 케어 솔루션 웹 플랫폼",
      tags: ["React", "TypeScript", "PWA", "Tailwind CSS"],
      award: "멋쟁이사자처럼 제 3회 어흥콘 혁신부문 최우수상",
      githubUrl: "https://github.com/duckswell",
      liveUrl: "https://hale-zeta.vercel.app/home",
    },
    {
      id: "cammoji",
      title: "Cammoji",
      category: ["Full Stack", "AI / Vision"],
      highlight: "Solo Full-Stack Project",
      description:
        "YOLO11 기반 실시간 객체 인식과 WebSocket을 연동하여 웹캠 속 사물을 인터랙티브 이모지 아바타로 실시간 변환하는 풀스택 웹 애플리케이션",
      tags: ["FastAPI", "React", "YOLO11", "WebSockets", "Monorepo"],
      githubUrl: "https://github.com/gjdbsdk/cammoji_project.git",
    },
  ] as Project[],

  designWorks: [
    {
      id: "flower-shoes-13",
      title: "덕성여대 꽃신 13기 디자인차장 활동",
      role: "Design Lead / 디자인차장",
      period: "2025 - 2026",
      description:
        "동아리 브랜딩 가이드 수립, 정기 공연 및 행사 공식 메인 키비주얼 포스터, SNS 홍보 카드뉴스 및 온·오프라인 굿즈 디자인 총괄 제작",
      deliverables: [
        "행사 메인 키비주얼",
        "SNS 홍보 콘텐츠",
        "오프라인 굿즈/티켓 디자인",
        "브랜드 아이덴티티",
      ],
      tags: ["Figma", "Branding", "Graphic Design", "Illustration"],
    },
  ] as DesignWork[],

  managementWorks: [
    {
      id: "flower-shoes-14",
      organization: "덕성여자대학교 꽃신 14기",
      role: "사무부장",
      period: "2026",
      description:
        "단체 운영 재정 및 회계 결산 총괄, 행사 예산 집행 관리, 분기별 정기 총회 안건 수립 및 행정 체계 수립",
      achievements: [
        "행사 운영비 예결산 체계 전산화",
        "동아리 내부 자산 및 비품 관리 매뉴얼 구축",
        "대내외 협력 파트너십 예산 조율",
      ],
      tags: ["Operations", "Budgeting", "Team Management"],
    },
    {
      id: "likelion-14-fe-lead",
      organization: "덕성여자대학교 멋쟁이사자처럼 14기",
      role: "프론트엔드 트랙장",
      period: "2026",
      description:
        "아기사자 프론트엔드 커리큘럼(HTML/CSS/JS, React, Next.js, Git) 설계 및 정기 기술 세션 강의 진행, 팀 프로젝트 코드 리뷰 리드",
      achievements: [
        "실무형 React & Next.js App Router 실습 세션 진행",
        "깃허브 PR 기반 코드 리뷰 문화 정착 및 브랜치 전략 가이드",
        "해커톤 대비 컴포넌트 설계 및 상태관리 멘토링",
      ],
      tags: [
        "Curriculum Design",
        "Mentoring",
        "Tech Leadership",
        "Code Review",
      ],
    },
    {
      id: "likelion-14-herethon",
      organization: "멋쟁이사자처럼 14기 여기톤",
      role: "운영위원회 기획부",
      period: "2026",
      description:
        "전국 여성 개발자·기획자·디자이너가 참가하는 연합 해커톤 '여기톤' 대회 룰셋 기획, 심사 기준 수립 및 현장 라운지 운영 총괄",
      achievements: [
        "대회 타임라인 및 트랙별 평가 루브릭 수립",
        "참가자 네트워킹 세션 및 스폰서 부스 동선 설계",
        "온·오프라인 참가자 QA 및 현장 이슈 트러블슈팅",
      ],
      tags: ["Hackathon Planning", "Event Operations", "Coordination"],
    },
    {
      id: "likelion-14-line4thon",
      organization: "멋쟁이사자처럼 14기 4호선톤",
      role: "운영위원회 기획부",
      period: "2026",
      description:
        "수도권 4호선 라인 대학 연합 해커톤 기획 및 운영, 참가 대학 간 커뮤니케이션 채널 조율 및 해커톤 당일 타임라인 컨트롤",
      achievements: [
        "대학 연합 해커톤 공동 프로젝트 주제 및 가이드라인 제정",
        "당일 밤샘 해커톤 멘토링 데스크 및 심사 프로세스 총괄",
        "후원사 리크루팅 부스 연계 기획",
      ],
      tags: ["Alliance Hackathon", "Planning", "Cross-Campus Operations"],
    },
  ] as ManagementWork[],
};
