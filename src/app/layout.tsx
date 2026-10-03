import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import { SkyBackground } from "@/components/SkyBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Handoff — Mentorship Program for Salesforce Professionals",
  description:
    "Register your interest in The Handoff mentorship program for Salesforce professionals and see what to expect.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        <SkyBackground />
        {children}
      </body>
    </html>
  );
}
