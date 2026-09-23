import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SkillTrack – Student Learning & Internship Dashboard",
  description: "Track your internships, projects and learning progress in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
