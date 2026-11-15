import React from "react";
import { Cpu } from "lucide-react";
import { EXPERTISE_DOMAINS } from "@/data/portfolioData";

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / Technical Competencies</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Specialized engineering domains and technical toolchains.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Selected stack competencies refined through system architecture, model development, and scalable production implementations.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERTISE_DOMAINS.map((domain, index) => (
            <div
              key={domain.domain}
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-stone-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-stone-400 font-medium">
                    DOMAIN 0{index + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-violet-600/70" />
                </div>

                <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
                  {domain.domain}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                  {domain.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-stone-100">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-stone-50 border border-stone-200/60 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-stone-900 font-mono">
                          {skill.name}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-stone-200 text-violet-700 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 font-light">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-mono text-stone-400 flex items-center justify-between">
                <span>VERIFIED SKILLSET</span>
                <span>PRODUCTION-READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
