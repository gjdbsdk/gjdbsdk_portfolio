import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-[#19243d] text-center text-slate-500 text-xs font-mono space-y-1.5">
      <p>
        © 2026 {PROFILE.name}. Built with Next.js App Router & Framer Motion.
      </p>
      <p className="text-slate-600">
        Duksung Women&apos;s Univ. Software Engineering &apos;24
      </p>
    </footer>
  );
}
