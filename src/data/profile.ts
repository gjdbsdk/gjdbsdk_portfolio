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
  thumbnail?: string;
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
  images?: string[];
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
    "멋쟁이사자처럼 13기 ➔ 14기 교육부 프론트엔드장 / 꽃신 14기 사무부장",
  bio: "인터랙티브한 웹 프론트엔드 개발부터 비주얼 디자인, 대규모 해커톤 및 동아리 운영까지 주도하며 기획과 구현 사이를 매끄럽게 잇는 개발자입니다.",
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
      thumbnail: "/images/develop/pipomi.png",
      description:
        "개인별 생체 주기 변화에 맞추어 신체 부담을 줄이고 회복 탄력성을 높여주는 맞춤형 홈트레이닝 루틴을 추천하는 헬스케어 웹 서비스",
      tags: ["HTML/CSS", "JavaScript", "Healthcare"],
      award: {
        label: "진출",
        detail: "13기 여기톤 준결승 진출",
      },
      githubUrl: "https://github.com/2025-HERETHON/2025-herethon-21.git",
    },
    {
      id: "farmfarm",
      title: "FarmFarm",
      category: ["Frontend"],
      highlight: "13기 중앙해커톤 프로젝트",
      thumbnail: "/images/develop/farmfarm.png",
      description:
        "세대 간 소통과 로컬 농산물 소비 활성화를 목표로 장보기 탐색 동선과 사용자 친화적 주문 인터페이스를 구현한 로컬 커머스 플랫폼",
      tags: ["HTML/CSS", "JavaScript", "Responsive Web"],
      githubUrl: "https://github.com/naeuun/dukventure.git",
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
      award: "덕멋 13기 데모데이 Lion Day 우승",
      liveUrl: "https://finhabit.vercel.app/",
    },
    {
      id: "carrot_clonecoding",
      title: "당근마켓 프론트엔드 클론코딩",
      category: ["Frontend"],
      highlight: "프론트엔드 스터디 클론코딩",
      thumbnail: "/images/develop/carrot.png",
      description:
        "당근마켓의 핵심 피드 뷰와 물품 상세 페이지 레이아웃 및 내비게이션 인터랙션을 분석하고 직접 마크업하여 배포한 스터디 프로젝트",
      tags: ["HTML/CSS", "JavaScript", "Clone Coding", "Vercel"],
      githubUrl: "https://github.com/alskso/2025_StudyClone.git",
      liveUrl: "https://2025-study-clone.vercel.app/",
    },
    {
      id: "likelion14threcrewting",
      title: "덕성 멋사 14기 리쿠르팅 사이트",
      category: ["Frontend"],
      highlight: "덕성여대 멋사 14기 공식 웹사이트",
      thumbnail: "/images/develop/likelion.png",
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
      thumbnail: "/images/develop/fest.png",
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
      thumbnail: "/images/develop/AquaFarming.png",
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
      thumbnail: "/images/develop/hale.png",
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
      thumbnail: "/images/develop/cammoji.png",
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
      period: "2024 - 2025",
      description:
        "정기 공연 및 행사 공식 메인 키비주얼 포스터 보조, SNS 홍보 카드뉴스 제작",
      deliverables: ["SNS 홍보 콘텐츠", "동아리 캐릭터 아이덴티티"],
      images: [
        "/images/design/flowershoes_club_exhibition.png",
        "/images/design/flowershoes_concept_art.png",
        "/images/design/flowershoes_dragon.png",
      ],
      tags: ["Photoshop", "ibis paint"],
    },
    {
      id: "personal-artworks",
      title: "개인 작업물",
      role: "Design",
      period: "2015 - ",
      description: "캐릭터, 컨셉아트 등 디자인",
      deliverables: [
        "오리지널 컨셉 일러스트",
        "캐릭터 원화 및 페이스 시트",
        "펜 터치 선화 & 러프 스케치",
        "세계관 기반 키비주얼 아트",
      ],
      images: [
        "/images/design/gjdbsdk_concept_illustrator.png",
        "/images/design/gjdbsdk_doodle.jpg",
      ],
      tags: ["ibis paint"],
    },
    {
      id: "emoticons",
      title: "이모티콘 작업 (미출시)",
      role: "Character Designer & Emoticon Creator",
      period: "2024",
      description: "캐릭터, 컨셉아트 등 디자인",
      deliverables: [
        "치즈 고양이 오리지널 캐릭터 IP",
        "정적 이모티콘 시안 세트 (감정/상황별)",
        "손글씨 타이포그래피 & 이펙트",
        "크레용 질감 텍스처 브러시 워크",
      ],
      images: [
        "/images/design/emoticon_3.png",
        "/images/design/emoticon_14.png",
        "/images/design/emoticon_16.png",
        "/images/design/emoticon_4.png",
        "/images/design/emoticon_1.png",
        "/images/design/emoticon_2.png",
        "/images/design/emoticon_5.png",
        "/images/design/emoticon_6.png",
        "/images/design/emoticon_7.png",
        "/images/design/emoticon_8.png",
        "/images/design/emoticon_9.png",
        "/images/design/emoticon_10.png",
        "/images/design/emoticon_11.png",
        "/images/design/emoticon_12.png",
        "/images/design/emoticon_13.png",
        "/images/design/emoticon_15.png",
        "/images/design/emoticon_17.png",
      ],
      tags: [
        "Character Design",
        "Emoticon",
        "Illustration",
        "Digital Art",
        "IP",
      ],
    },
  ] as DesignWork[],

  managementWorks: [
    {
      id: "flower-shoes-14",
      organization: "덕성여자대학교 꽃신 14기",
      role: "사무부장",
      period: "2025",
      description:
        "정기 공연 및 공식 행사 추진을 위한 항목별 예산 시장 조사, 대관 장소 섭외 및 현장 조율, 주요 외빈·인사 섭외 및 초청 행정 총괄",
      achievements: [
        "행사 장소(공연장/공간) 리서치, 견적 협상 및 대관 계약 조율",
        "행사 집행 항목별 시장 조사 기반의 합리적 견적 및 예산안 수립",
        "행사 주요 외빈 및 인사 섭외, 공식 초청 프로세스 및 현장 동선 총괄",
      ],
      tags: [
        "Budget Research",
        "Venue Logistics",
        "Guest Relations",
        "Event Operations",
      ],
    },
    {
      id: "likelion-14-fe-lead",
      organization: "덕성여자대학교 멋쟁이사자처럼 14기",
      role: "프론트엔드 트랙장",
      period: "2026",
      description:
        "아기사자 프론트엔드 커리큘럼(HTML/CSS/JS, React) 설계 및 정기 기술 세션 강의 진행, 팀 프로젝트 코드 리뷰 리드",
      achievements: [
        "실무형 React & TS 실습 세션 진행",
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
        "대회 룰셋 기획 및 현장 운영을 담당하고, 참가팀 결과물 제출과 심사를 위한 공식 GitHub Organization을 구축하여 프로젝트 수합 및 코드 평가 프로세스 총괄",
      achievements: [
        "대회 공식 GitHub Organization 개설 및 전 참가팀 프로젝트 레포지토리 권한·아카이빙 총괄",
        "행사 설명 심사위원 / 참가자용 노션 페이지 보조",
        "현장 이슈 트러블슈팅 관리",
      ],
      tags: [
        "GitHub Operations",
        "Hackathon Planning",
        "Submission System",
        "Event Operations",
      ],
    },
    {
      id: "likelion-14-line4thon",
      organization: "멋쟁이사자처럼 14기 4호선톤",
      role: "운영위원회 기획부",
      period: "2026",
      description:
        "수도권 4호선 라인 대학 연합 해커톤 기획 및 운영을 담당하고, 참가자 모집 및 트랙별 팀빌딩을 위한 공식 신청·설문 시스템(구글폼) 설계",
      achievements: [
        "연합 해커톤 공식 참가자 모집 구글폼 설계 및 대규모 지원자 데이터 수합",
        "개발·기획·디자인 트랙 및 개인별 기술 스택 기반 팀빌딩 매칭용 서베이 구축",
        "참가자 응답 데이터 구조화 및 효율적인 팀 구성을 위한 기초 데이터베이스 운영",
      ],
      tags: [
        "Google Forms",
        "Data Pipeline",
        "Team Building",
        "Participant Operations",
      ],
    },
  ] as ManagementWork[],
};
