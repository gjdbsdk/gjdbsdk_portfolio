export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "AI / Vision" | "Mobile / Game";
  description: string;
  tags: string[];
  link?: string;
  highlight?: string;
}

export const PROFILE = {
  name: "허윤아 (Yuna Heo)",
  role: "Creative Full-Stack & Frontend Developer",
  university: "덕성여자대학교 디지털소프트웨어공학부 (24학번)",
  likelion: "멋쟁이사자처럼 13기 아기사자 ➔ 14기 운영진",
  bio: "웹 프론트엔드를 중심으로 FastAPI 백엔드, 실시간 AI 비전, 모바일 및 시스템 전반을 넘나들며 몰입도 높은 사용자 경험을 빚어내는 개발자입니다.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Django",
    "Kotlin",
    "Unity (C#)",
    "WebSockets",
  ],
  projects: [
    {
      id: "cammoji",
      title: "Cammoji",
      category: "AI / Vision",
      highlight: "Solo Full-Stack Project",
      description:
        "YOLO11 기반 실시간 사물 인식과 WebSocket을 결합하여 웹캠 객체를 실시간 인터랙티브 이모지 아바타로 변환하는 웹 애플리케이션",
      tags: ["FastAPI", "React", "YOLO11", "WebSockets", "Monorepo"],
    },
    {
      id: "geunhwaje",
      title: "2026 근화제 축제 웹사이트",
      category: "Frontend",
      highlight: "덕성여대 축제 공식 프론트엔드",
      description:
        "인터랙티브 캠퍼스 맵, 부스/푸드트럭 실시간 모달 팝업, PWA 오프라인 캐싱을 탑재한 모바일 최적화 축제 웹 플랫폼",
      tags: ["React", "TypeScript", "PWA", "Tailwind CSS"],
    },
    {
      id: "finhabit",
      title: "Finhabit",
      category: "Frontend",
      highlight: "소비 습관 트래커",
      description:
        "인터랙티브 캘린더와 데이터 시각화 차트를 결합해 사용자의 일일 소비 루틴을 체계화해주는 핀테크 웹 서비스",
      tags: ["React", "TypeScript", "Interactive UI", "REST API"],
    },
    {
      id: "withu",
      title: "WithU",
      category: "Frontend",
      highlight: "W:Hack 해커톤 프로젝트",
      description:
        "사회적 연대와 상호 지원을 위한 기획으로 참가한 해커톤 웹 인터페이스 및 반응형 퍼블리싱",
      tags: ["HTML/CSS", "JavaScript", "Responsive UI"],
    },
  ] as Project[],
};
