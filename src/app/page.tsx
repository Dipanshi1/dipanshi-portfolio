"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { WelcomeScene } from "@/components/home/welcome/welcome-scene";
import { ProjectDrawer } from "@/components/home/workspace/project-drawer";
import { AboutDrawer } from "@/components/home/about-drawer";
import { SkillsDrawer } from "@/components/home/skills-drawer";
import { PixelTransition } from "@/components/ui/pixel-transition";

export default function Home() {
  const [isProjectOpen, setIsProjectOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = React.useState(false);
  const [selectedProjectId, setSelectedProjectId] = React.useState("manaksetu");
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Trigger pixel transition and open Project Lab drawer
  const handleOpenProjects = React.useCallback((projectId?: string) => {
    if (projectId) setSelectedProjectId(projectId);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsAboutOpen(false);
      setIsSkillsOpen(false);
      setIsProjectOpen(true);
    }, 220);
  }, []);

  const handleOpenAbout = React.useCallback(() => {
    setIsProjectOpen(false);
    setIsSkillsOpen(false);
    setIsAboutOpen(true);
  }, []);

  const handleOpenSkills = React.useCallback(() => {
    setIsProjectOpen(false);
    setIsAboutOpen(false);
    setIsSkillsOpen(true);
  }, []);

  // Synchronize hash navigation (/#work, /#stack, /#about) from header or direct URLs
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#work" || hash === "#projects") {
        handleOpenProjects();
      } else if (hash === "#stack" || hash === "#skills") {
        handleOpenSkills();
      } else if (hash === "#about") {
        handleOpenAbout();
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [handleOpenProjects, handleOpenAbout, handleOpenSkills]);

  // Lock document scroll on the full-screen stage
  React.useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = originalOverflow;
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100dvh-4rem)] max-h-[calc(100dvh-4rem)] overflow-hidden bg-canvas flex flex-col justify-between select-none">
      {/* 1. TOP STATUS OVERLAY STRIP */}
      <div className="relative z-20 w-full shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border-b border-border-subtle bg-surface/90 backdrop-blur-xs text-xs font-mono text-text-secondary">
        {/* Left: Studio Location & Availability */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface-elevated border border-border-subtle text-text-primary shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" aria-hidden="true" />
            <span className="font-semibold text-[11px] sm:text-xs tracking-wider">LEVEL 01: RECEPTION</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-text-secondary text-[11px]">
            <span>Dipanshi Gupta</span>
            <span className="text-border-subtle">/</span>
            <span>3rd-Year CS</span>
            <span className="text-border-subtle">/</span>
            <span className="text-accent-primary font-medium">Applied AI &amp; Backend</span>
          </span>
        </div>

        {/* Right: Interaction Guide Tip */}
        <div className="flex items-center gap-2 text-text-secondary text-[11px]">
          <span className="hidden sm:inline">Click scene hotspots or navigate below:</span>
          <span className="px-2 py-0.5 rounded-sm bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-[10px] font-semibold tracking-wider">
            INTERACTIVE STUDIO
          </span>
        </div>
      </div>

      {/* 2. CENTER STAGE: FULL-SCREEN PIXEL-ART RECEPTION SCENE */}
      <div className="relative flex-1 min-h-0 w-full h-full flex items-center justify-center overflow-hidden p-2 sm:p-3 bg-canvas">
        <div className="relative w-full max-w-[1440px] flex items-center justify-center rounded-sm border border-border-subtle/70 bg-surface/40 overflow-hidden shadow-inner sm:h-full my-auto">
          <WelcomeScene
            onEnterProjects={() => handleOpenProjects()}
            onOpenAbout={handleOpenAbout}
            onOpenSkills={handleOpenSkills}
          />
        </div>
      </div>

      {/* 3. PERSISTENT RECRUITER HUD STRIP (Docked Bottom Toolbar) */}
      <footer
        className="relative z-20 w-full shrink-0 border-t border-border-subtle bg-surface/95 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-2.5 text-xs font-mono"
        role="region"
        aria-label="Direct Portfolio & Recruiter Navigation"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
          {/* Left: Room Fast-Travel Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
            <span className="text-[10px] text-text-tertiary uppercase tracking-wider hidden sm:inline mr-1">
              Rooms:
            </span>

            {/* Project Lab Hotkey Button */}
            <button
              type="button"
              onClick={() => handleOpenProjects()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-accent-primary/60 bg-accent-primary/10 text-text-primary hover:bg-accent-primary/20 hover:border-accent-primary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus font-medium text-xs shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 text-accent-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="1" strokeWidth="2" />
                <circle cx="15" cy="12" r="1.5" fill="currentColor" />
              </svg>
              <span>Project Lab</span>
              <span className="text-[10px] px-1 py-0.2 rounded-xs bg-accent-primary/25 text-accent-primary font-bold">
                4
              </span>
            </button>

            {/* Skills Hotkey Button */}
            <button
              type="button"
              onClick={handleOpenSkills}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus font-medium text-xs shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 text-text-tertiary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span>Stack &amp; Skills</span>
            </button>

            {/* About Hotkey Button */}
            <button
              type="button"
              onClick={handleOpenAbout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus font-medium text-xs shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 text-text-tertiary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>About Dipanshi</span>
            </button>
          </div>

          {/* Right: Direct Recruiter Actions (Resume, GitHub, LinkedIn, Email) */}
          <div className="flex items-center justify-between md:justify-end gap-2 w-full md:w-auto border-t md:border-t-0 border-border-subtle pt-1.5 md:pt-0">
            {/* View Resume PDF Button */}
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-accent-warning/60 bg-accent-warning/10 text-accent-warning hover:bg-accent-warning/20 hover:border-accent-warning transition-colors focus-visible:outline-2 focus-visible:outline-border-focus font-medium text-xs shadow-2xs"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Resume PDF</span>
              <span className="text-[10px] opacity-80">↗</span>
            </a>

            {/* Direct Verified Social & Email Links */}
            <div className="flex items-center gap-1.5">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus"
                aria-label="Dipanshi Gupta on GitHub (opens in new tab)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus"
                aria-label="Dipanshi Gupta on LinkedIn (opens in new tab)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              <a
                href={siteConfig.links.email}
                className="p-1.5 rounded-sm border border-border-subtle bg-surface-elevated text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-2 focus-visible:outline-border-focus"
                aria-label="Send email to Dipanshi Gupta"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. PIXELATED GRID BRICK REVEAL TRANSITION */}
      <PixelTransition
        active={isTransitioning}
        onComplete={() => setIsTransitioning(false)}
        variant="reveal"
        color="#14110F"
      />

      {/* 5. SLIDE-OVER DIRECTORY DRAWERS */}
      {/* Project Lab Workstations Directory */}
      <ProjectDrawer
        isOpen={isProjectOpen}
        onClose={() => {
          setIsProjectOpen(false);
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }}
        selectedProjectId={selectedProjectId}
        onSelectProject={(id) => setSelectedProjectId(id)}
      />

      {/* Technical Capabilities & Stack Matrix */}
      <SkillsDrawer
        isOpen={isSkillsOpen}
        onClose={() => {
          setIsSkillsOpen(false);
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }}
        onOpenProjects={() => {
          setIsSkillsOpen(false);
          handleOpenProjects();
        }}
      />

      {/* Dipanshi Profile, Academic & Contact Story */}
      <AboutDrawer
        isOpen={isAboutOpen}
        onClose={() => {
          setIsAboutOpen(false);
          if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }}
        onOpenProjects={() => {
          setIsAboutOpen(false);
          handleOpenProjects();
        }}
      />
    </div>
  );
}
