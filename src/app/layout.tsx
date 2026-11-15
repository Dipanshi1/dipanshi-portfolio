import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipanshi Gupta — Software Engineer & AI Systems Developer",
  description:
    "Portfolio of Dipanshi Gupta showcasing full-stack software engineering, surface-defect inspection agents, model-routing frameworks, and semantic search tools.",
  keywords: [
    "Dipanshi Gupta",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "TypeScript",
    "Python",
    "PyTorch",
    "SightLoop",
    "ManakSetu",
    "Arbiter",
  ],
  authors: [{ name: "Dipanshi Gupta", url: "https://github.com/Dipanshi1" }],
  openGraph: {
    title: "Dipanshi Gupta — Software Engineer & AI Systems Developer",
    description:
      "Editorial engineering portfolio featuring resilient full-stack systems and applied AI architectures.",
    url: "https://github.com/Dipanshi1/dipanshi-portfolio",
    siteName: "Dipanshi Gupta Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-violet-100 selection:text-violet-900">
        {children}
      </body>
    </html>
  );
}
