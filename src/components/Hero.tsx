"use client";

import React from "react";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import VisualArchitecture from "./VisualArchitecture";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-amber-100/30 via-violet-100/20 to-lime-100/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Supertitle badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/60 border border-stone-300 rounded-full text-xs font-mono text-stone-700 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
              <span>Software &amp; AI Systems Developer</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.08] mb-6">
              Developing <span className="italic font-normal text-violet-700">applied intelligent systems</span> and accessible web interfaces.
            </h1>

            {/* Descriptive Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8 font-light">
              Hi, I&apos;m <strong className="font-semibold text-stone-900">Dipanshi Gupta</strong>. Developer and GDG on Campus Design Coordinator building full-stack web applications, surface-defect inspection agents, model-routing frameworks, and semantic search tools with clean typography.
            </p>

            {/* Key Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white border border-stone-300 rounded-md text-stone-700 shadow-2xs">
                Next.js &amp; TypeScript
              </span>
              <span className="px-2.5 py-1 bg-white border border-stone-300 rounded-md text-stone-700 shadow-2xs">
                Python &amp; FastAPI
              </span>
              <span className="px-2.5 py-1 bg-white border border-stone-300 rounded-md text-stone-700 shadow-2xs">
                OpenCV 5 &amp; Computer Vision
              </span>
              <span className="px-2.5 py-1 bg-white border border-stone-300 rounded-md text-stone-700 shadow-2xs">
                Model Routing &amp; Evaluation
              </span>
              <span className="px-2.5 py-1 bg-stone-100 border border-stone-200 rounded-md text-violet-700 font-semibold">
                Semantic Search
              </span>
            </div>

            {/* Primary Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-stone-200/80">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-violet-700 transition-all shadow-sm hover:shadow"
              >
                <span>View Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium text-sm hover:border-stone-400 hover:bg-stone-50 transition-all shadow-2xs"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>

              {/* Direct Profile Icons */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-stone-200 bg-white hover:border-stone-400 text-stone-700 hover:text-stone-950 transition-colors shadow-2xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-stone-200 bg-white hover:border-stone-400 text-stone-700 hover:text-stone-950 transition-colors shadow-2xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-600" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg border border-stone-200 bg-white hover:border-stone-400 text-stone-700 hover:text-stone-950 transition-colors shadow-2xs"
                  aria-label="Direct Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4 text-rose-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture (Portrait + 3D Engine) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <VisualArchitecture />
          </div>
        </div>
      </div>
    </section>
  );
}
