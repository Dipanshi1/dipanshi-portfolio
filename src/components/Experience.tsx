import React from "react";
import { Users, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EXPERIENCE_ENTRIES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#121316] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      {/* Subtle background grid & ambient light */}
      <div className="absolute inset-0 subtle-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>04 / Community, Hackathons &amp; Projects</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
            Hands-on community leadership, hackathons, and development work.
          </h2>
          <p className="text-base text-stone-400 font-light max-w-2xl">
            A genuine record of campus community coordination with GDG on Campus, collaborative hackathon prototypes, and self-directed software development.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {EXPERIENCE_ENTRIES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 bg-[#1C1E23] border border-[#2B2F38] rounded-2xl transition-all duration-300 hover:border-violet-500/50 shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-lime-400 font-medium uppercase tracking-wider">
                      {exp.organization}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800/80 text-stone-300 border border-stone-700">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-stone-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900/80 border border-stone-800 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900/80 border border-stone-800 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block">
                  Responsibilities &amp; Achievements:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-light">
                  {exp.highlights.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-800">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-stone-900/90 border border-stone-800 text-stone-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
