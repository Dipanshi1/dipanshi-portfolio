import React from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / Featured Engineering Systems</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Evidence-based architectures built for real-world utility.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Each project represents an intentional exploration across natural language retrieval, edge computer vision, multi-agent arbitration, or robust web systems.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className="relative bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs hover:border-stone-300 transition-all group overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-stone-400 to-lime-500 opacity-80" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta & narrative */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-200/60">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        PROJECT #0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mb-6 p-4 sm:p-5 bg-stone-50 border border-stone-200/70 rounded-xl space-y-2.5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-stone-700" />
                        <span>Architectural Highlights</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                        {project.keyHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-white border border-stone-200 text-stone-700 rounded-md shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right call to actions & repository card */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 sm:p-6 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
                      Repository Verification
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                      Documented source code, architecture specifications, and implementation commits available on GitHub.
                    </p>

                    <div className="p-3 bg-white border border-stone-200 rounded-lg text-xs font-mono text-stone-700 space-y-1">
                      <div className="flex justify-between text-stone-500">
                        <span>Organization:</span>
                        <span className="font-semibold text-stone-800">Dipanshi1</span>
                      </div>
                      <div className="flex justify-between text-stone-500">
                        <span>Access:</span>
                        <span className="text-emerald-700 font-semibold">Public &amp; Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 text-white hover:bg-violet-700 transition-colors rounded-xl text-xs font-semibold shadow-2xs"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Inspect Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
