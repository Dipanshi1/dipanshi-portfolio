import React from "react";
import { Compass, Code2, Cpu, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-violet-700" />,
      title: "Principled Web Development",
      description:
        "Building applications with type-safe TypeScript, Next.js App Router patterns, and responsive component architectures that remain maintainable and structured.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-lime-700" />,
      title: "Exploratory AI & Perception",
      description:
        "Prototyping applied machine learning ideas—from semantic retrieval for regulatory standards to computer vision-driven auditory scene perception in hackathon builds.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-stone-800" />,
      title: "Community & Collaborative Design",
      description:
        "Coordinating visual design and UI assets for GDG on Campus, aligning team efforts under hackathon constraints, and upholding WCAG accessibility standards.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 / Background &amp; Philosophy</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Bridging software development, community design, and applied AI.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-stone-600 leading-relaxed font-light text-base sm:text-lg">
            <p>
              I am a developer and student engineer passionate about building accessible full-stack applications and exploring applied machine learning. My focus balances clean code discipline with creative visual design.
            </p>
            <p>
              As the <strong className="font-medium text-stone-900">Design Coordinator for GDG on Campus</strong>, I lead visual branding and creative direction for developer workshops, collaborative sessions, and student community events. In competitive hackathons, I have co-developed working prototypes including <strong className="font-medium text-stone-900">ManakSetu</strong> (multilingual standards search) and <strong className="font-medium text-stone-900">SightLoop</strong> (assistive vision to audio cues).
            </p>
            <p>
              I believe in honest engineering: building working prototypes, acknowledging technical trade-offs, writing transparent documentation, and continuously strengthening fundamentals through coursework like AWS Cloud Foundations.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold mb-6">
              Developer Profile Snapshot
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Core Focus</span>
                <span className="font-semibold text-stone-900">Full-Stack &amp; Applied AI</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Community Role</span>
                <span className="font-semibold text-stone-900">GDG on Campus Design Lead</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Primary Stack</span>
                <span className="font-semibold text-stone-900">Next.js, TypeScript, Python</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Cloud Track</span>
                <span className="font-semibold text-stone-900">AWS Academy Cloud Foundations</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-stone-500">Location &amp; Zone</span>
                <span className="font-semibold text-stone-900">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Status</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {PERSONAL_INFO.availabilityStatus}
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
