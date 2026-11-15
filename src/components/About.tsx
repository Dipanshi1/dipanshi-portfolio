import React from "react";
import { Compass, Code2, Cpu, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-violet-700" />,
      title: "Resilient Systems Architecture",
      description:
        "Building applications with strict type-safety, clean component boundaries, and robust API contracts. Prioritizing maintainability and predictable lifecycle behavior over fragile shortcuts.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-lime-700" />,
      title: "Grounded Machine Learning",
      description:
        "Engineering AI solutions anchored in reproducible evaluation metrics, domain vector indexing, and real-time computer vision inference tailored for practical edge deployments.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-stone-800" />,
      title: "Accessible Human Interfaces",
      description:
        "Designing assistive technologies like SightLoop that translate visual perception into auditory cues, while ensuring web standards meet strict WCAG AA contrast and reduced-motion guidelines.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 / Philosophy &amp; Background</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Bridging technical precision with human-centric software design.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-stone-600 leading-relaxed font-light text-base sm:text-lg">
            <p>
              I am a software engineer focused on developing resilient full-stack systems and applied artificial intelligence solutions. My work spans the complete engineering lifecycle: from formal algorithmic design and vector retrieval to high-polish user interfaces and production builds.
            </p>
            <p>
              Through initiatives like <strong className="font-medium text-stone-900">ManakSetu</strong>, I engineered multilingual search mechanisms to navigate regulatory standards documents. In <strong className="font-medium text-stone-900">SightLoop</strong>, I tackled real-world assistive challenges by translating visual perception into descriptive spatial audio for visually impaired users.
            </p>
            <p>
              My approach is grounded in software discipline: comprehensive testing, semantic web accessibility, clear Git branching conventions, and measurable system performance.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold mb-6">
              Engineering Profile Snapshot
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Core Focus</span>
                <span className="font-semibold text-stone-900">Full-Stack &amp; Applied AI</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Language Stack</span>
                <span className="font-semibold text-stone-900">TypeScript, Python, SQL</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Frameworks</span>
                <span className="font-semibold text-stone-900">Next.js 16, React 19, FastAPI</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">ML / Vision</span>
                <span className="font-semibold text-stone-900">PyTorch, OpenCV, NLP</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Location &amp; Zone</span>
                <span className="font-semibold text-stone-900">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Status</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 bg-white/70 hover:bg-white border border-stone-200/80 rounded-2xl transition-all duration-300 shadow-2xs hover:shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-editorial text-xl font-semibold text-stone-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
