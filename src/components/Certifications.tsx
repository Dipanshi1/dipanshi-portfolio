import React from "react";
import { Award, Check, Clock } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 / Certifications &amp; Professional Development</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Cloud foundations and architectural coursework.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Completed technical coursework with AWS Academy and ongoing self-directed study for cloud architecture certification.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 sm:p-8 bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2 rounded-lg border ${
                      cert.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                      cert.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {cert.status === "Completed" ? "Completed (20 Hours)" : "In Preparation (Not Certified)"}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-stone-900 mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-stone-500 font-mono uppercase tracking-wider mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-stone-600 font-light mb-6">
                  {cert.detail}
                </p>

                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                    {cert.status === "Completed" ? "Core Course Topics:" : "Study Domain Focus:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-700"
                      >
                        {cert.status === "Completed" ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Clock className="w-3 h-3 text-amber-600" />
                        )}
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>{cert.status === "Completed" ? "VERIFICATION: AWS ACADEMY" : "TRACK: SELF-STUDY PREPARATION"}</span>
                <span
                  className={
                    cert.status === "Completed" ? "text-emerald-700 font-semibold" : "text-amber-700 font-semibold"
                  }
                >
                  {cert.status === "Completed" ? "COURSEWORK COMPLETED" : "IN PREPARATION"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
