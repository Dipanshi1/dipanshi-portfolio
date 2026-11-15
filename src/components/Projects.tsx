import React from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, AlertCircle, Compass, Lock, Code } from "lucide-react";
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
            <span>03 / Project Implementations &amp; Prototypes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Project work, hackathon submissions, and technical prototypes.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Each entry distinguishes implemented prototype features from experimental scope, current limitations, and planned future development.
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
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-200/60">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                        {project.stage}
                      </span>
                      <span className="text-xs font-mono text-stone-400 ml-auto">
                        #0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Scope narrative */}
                    <div className="p-3.5 bg-stone-50 border border-stone-200/70 rounded-xl text-xs sm:text-sm text-stone-700 mb-6 font-light leading-relaxed">
                      <strong className="font-semibold text-stone-900 font-mono text-xs block mb-1">
                        Prototype Context:
                      </strong>
                      {project.prototypeScope}
                    </div>

                    {/* Implemented Features */}
                    <div className="mb-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                        <span>Implemented Functionality</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700 font-light">
                        {project.implementedFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-violet-600 font-mono text-xs mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Current Limitations */}
                    <div className="mb-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Current Scope &amp; Known Limitations</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 font-light">
                        {project.limitations.map((lim, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-mono text-xs mt-0.5">•</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Future Plans */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-stone-600" />
                        <span>Planned Iterations</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 font-light">
                        {project.futurePlans.map((plan, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-stone-400 font-mono text-xs mt-0.5">•</span>
                            <span>{plan}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
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

                {/* Right repository & code verification */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 sm:p-6 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
                      Repository Verification
                    </span>

                    <div className="p-3 bg-white border border-stone-200 rounded-lg text-xs font-mono text-stone-700 space-y-1.5 mb-4">
                      <div className="flex justify-between items-center text-stone-500">
                        <span>Status:</span>
                        <span
                          className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                            project.repoStatus === "Public Repository"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : project.repoStatus.includes("Private")
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-stone-100 text-stone-600 border border-stone-200"
                          }`}
                        >
                          {project.repoStatus}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {project.repoStatus === "Public Repository"
                        ? "Source code and prototype documentation are publicly accessible on GitHub."
                        : project.repoStatus.includes("Private")
                        ? "Code is maintained in a private development repository during prototyping. Walkthrough available upon request."
                        : "Independent project code currently unreleased on GitHub."}
                    </p>
                  </div>

                  <div>
                    {project.repoUrl && project.repoStatus === "Public Repository" ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 text-white hover:bg-violet-700 transition-colors rounded-xl text-xs font-semibold shadow-2xs"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : project.repoStatus.includes("Private") ? (
                      <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-600 rounded-xl text-xs font-medium border border-stone-200 select-none">
                        <Lock className="w-3.5 h-3.5 text-stone-400" />
                        <span>Private Repository</span>
                      </div>
                    ) : (
                      <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-600 rounded-xl text-xs font-medium border border-stone-200 select-none">
                        <Code className="w-3.5 h-3.5 text-stone-400" />
                        <span>Local Standalone Code</span>
                      </div>
                    )}
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
