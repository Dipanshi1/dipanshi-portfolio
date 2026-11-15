"use client";

import React, { useState } from "react";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onResumeClick: () => void;
}

export default function Navbar({ onResumeClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/85 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-editorial font-bold text-sm tracking-wider shadow-sm group-hover:bg-violet-700 transition-colors">
            DG
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-base font-bold text-stone-900 tracking-tight leading-none group-hover:text-violet-800 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-stone-500 font-mono tracking-tight mt-0.5">
              Software & AI Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider font-medium text-stone-600 hover:text-stone-950 transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-stone-300 text-stone-700 hover:text-stone-900 hover:border-stone-400 bg-white shadow-2xs transition-all"
            aria-label="View Resume status"
          >
            <FileText className="w-3.5 h-3.5 text-violet-600" />
            <span>Resume</span>
            <span className="text-[10px] uppercase font-mono px-1 py-0.2 bg-stone-100 rounded text-stone-500">
              Notice
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-stone-50 hover:bg-violet-700 transition-colors shadow-2xs"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            className="p-2 text-stone-600 hover:text-stone-900"
            aria-label="Resume Notice"
          >
            <FileText className="w-4 h-4 text-violet-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium border border-stone-300 rounded-lg bg-white text-stone-800"
            >
              <FileText className="w-4 h-4 text-violet-600" />
              <span>Resume PDF Notice</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1 py-2.5 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800"
            >
              <span>Contact Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
