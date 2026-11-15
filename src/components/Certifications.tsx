import React from "react";
import { Award, Check } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 / Verified Credentials</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Continuous technical specializations and credentials.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Structured continuing education covering deep learning architectures, full-stack systems, and open-source version control.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 sm:p-8 bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-violet-50 text-violet-700 border border-violet-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-stone-400 font-semibold">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-stone-900 mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-stone-500 font-mono uppercase tracking-wider mb-6">
                  Issued by {cert.issuer}
                </p>

                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-700"
                      >
                        <Check className="w-3 h-3 text-violet-600" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>STATUS: VERIFIED</span>
                <span className="text-emerald-700 font-medium">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
