import React from "react";
import { Cpu } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 / Technical Toolchain</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Technologies and frameworks utilized across projects.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            A practical overview of languages, frameworks, and developer tools used across academic coursework, hackathon prototypes, and web projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-stone-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-stone-400 font-medium">
                    GROUP 0{index + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600/70" />
                </div>

                <h3 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-stone-100">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 bg-stone-50/70 border border-stone-200/60 rounded-xl"
                    >
                      <span className="text-xs font-semibold text-stone-900 font-mono block mb-1">
                        {item.name}
                      </span>
                      <p className="text-[11px] text-stone-500 font-light leading-snug">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400 flex items-center justify-between">
                <span>PRACTICAL APPLICATION</span>
                <span>EXPLORATORY &amp; APPLIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
