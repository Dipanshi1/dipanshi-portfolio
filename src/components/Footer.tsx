import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-[#FAF8F5] py-12 text-stone-600 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200/60">
          {/* Left Brand & Mission */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-stone-900 text-white flex items-center justify-center font-editorial font-bold text-xs">
              DG
            </div>
            <div>
              <span className="font-editorial text-sm font-bold text-stone-900 block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-stone-500">
                Software Engineer &amp; AI Systems Developer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-600" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4 text-rose-600" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 hover:border-stone-400 bg-white text-stone-700 transition-colors"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            &copy; 2025&ndash;2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Next.js 16 App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
