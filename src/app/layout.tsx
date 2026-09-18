import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "허윤아 | Developer Portfolio",
  description: "Creative Full-Stack & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
