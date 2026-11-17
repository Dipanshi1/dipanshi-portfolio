"use client";

import React, { useState } from "react";
import { Mail, Send, Copy, Check, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Direct mailto trigger with prefilled parameters
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 / Communication &amp; Inquiries</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight mb-4">
            Initiate a conversation or discuss technical collaboration.
          </h2>
          <p className="text-base text-stone-600 font-light max-w-2xl">
            Currently open to opportunities, software development roles, and project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Channels & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-white border border-stone-200 rounded-2xl shadow-xs space-y-6">
              <h3 className="font-editorial text-xl font-bold text-stone-900">
                Direct Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-stone-600" />
                    <span>Primary Email</span>
                  </span>
                  {copied && (
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied to clipboard
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm font-semibold text-stone-900 hover:text-violet-700 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-white border border-stone-300 hover:border-stone-400 rounded-md transition-colors text-stone-700"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Profile Links */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block">
                  Verified Networks
                </span>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-stone-900 block group-hover:text-violet-800 transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs text-stone-500 font-mono">
                        in/dipanshi-gupta
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-100 text-stone-800 rounded-lg">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-stone-900 block group-hover:text-violet-800 transition-colors">
                        GitHub Organization
                      </span>
                      <span className="text-xs text-stone-500 font-mono">
                        github.com/Dipanshi1
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light mb-6">
              Fill out the form below to initiate communication. Submitting opens your email client directly with the message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600/30 focus:border-violet-600 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@company.org"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600/30 focus:border-violet-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600/30 focus:border-violet-600 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-1.5 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600/30 focus:border-violet-600 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-violet-700 transition-colors shadow-2xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Inquiry</span>
              </button>

              {formSubmitted && (
                <p className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1.5 animate-fade-in">
                  <Check className="w-4 h-4" />
                  Email client launched. If it didn&apos;t open automatically, write directly to {PERSONAL_INFO.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
