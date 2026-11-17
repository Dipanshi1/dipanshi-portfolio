"use client";

import React, { useState } from "react";
import {
  FolderGit2,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Compass,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / Core Engineering Projects</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Applied machine learning, vision &amp; full-stack systems.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            A concise overview of four core projects, personal engineering contributions, and verified repositories structured for technical evaluation.
          </p>
        </div>

        {/* 2x2 Recruiter-Friendly Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="relative bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-stone-400 to-lime-500 opacity-80" />

                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
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

                  {/* Project Title */}
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  {/* Purpose / Summary Description */}
                  <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Personal Contribution Callout */}
                  <div className="p-3.5 bg-[#FAF8F5] border border-stone-200/80 rounded-xl text-xs sm:text-sm text-stone-800 mb-5 font-light leading-relaxed">
                    <strong className="font-semibold text-violet-900 font-mono text-[11px] uppercase tracking-wider block mb-1">
                      My Contribution:
                    </strong>
                    {project.contribution}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
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

                {/* Card Action & Verification Footer */}
                <div>
                  <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    {/* Repository Access */}
                    {project.repoUrl && !project.isPrivate ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 text-white hover:bg-violet-700 transition-colors rounded-xl text-xs font-medium shadow-2xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-stone-400" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 text-stone-600 rounded-xl text-xs font-medium border border-stone-200/80 select-none">
                        <Lock className="w-3.5 h-3.5 text-stone-400" />
                        <span>Private Repository</span>
                      </div>
                    )}

                    {/* Expandable Technical Details Button */}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${project.id}`}
                      onClick={() => toggleDetails(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 hover:text-stone-950 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-stone-100 cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Details" : "Technical Details"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-stone-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Technical Scope & Limitations Section */}
                  <div
                    id={`project-details-${project.id}`}
                    hidden={!isExpanded}
                    className={`mt-5 pt-4 border-t border-stone-200/70 space-y-4 animate-fade-in text-xs sm:text-sm ${
                      !isExpanded ? "hidden" : ""
                    }`}
                  >
                      {/* Context */}
                      <div className="p-3 bg-stone-50 border border-stone-200/70 rounded-xl font-light text-stone-700 leading-relaxed">
                        <strong className="font-semibold text-stone-900 font-mono text-[11px] uppercase tracking-wider block mb-1">
                          Prototype Context &amp; Scope:
                        </strong>
                        {project.prototypeScope}
                      </div>

                      {/* Implemented Features */}
                      <div className="space-y-1.5">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                          <span>Implemented Highlights</span>
                        </h4>
                        <ul className="space-y-1 text-stone-700 font-light pl-4 list-disc">
                          {project.implementedFeatures.map((feat, fIdx) => (
                            <li key={fIdx}>{feat}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Limitations */}
                      <div className="space-y-1.5">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Scope &amp; Engineering Disclosures</span>
                        </h4>
                        <ul className="space-y-1 text-stone-600 font-light pl-4 list-disc">
                          {project.limitations.map((lim, lIdx) => (
                            <li key={lIdx}>{lim}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Future Plans */}
                      <div className="space-y-1.5">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-stone-600" />
                          <span>Planned Iterations</span>
                        </h4>
                        <ul className="space-y-1 text-stone-600 font-light pl-4 list-disc">
                          {project.futurePlans.map((plan, pIdx) => (
                            <li key={pIdx}>{plan}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
