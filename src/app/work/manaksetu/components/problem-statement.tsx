import * as React from "react";
import { Container } from "@/components/layout/container";

export function ProblemStatement() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-24 lg:py-32 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-150"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 pb-8 sm:pb-12 border-b border-border-subtle font-mono text-xs text-text-tertiary">
          <span className="text-accent-primary font-bold text-sm sm:text-base">01</span>
          <span className="text-border-subtle">/</span>
          <span className="uppercase tracking-widest text-text-secondary font-semibold">
            The Procurement Problem
          </span>
          <span className="text-border-subtle hidden sm:inline">/</span>
          <span className="hidden sm:inline text-text-tertiary">Regulatory Tech &amp; Legal Defensibility</span>
        </div>

        {/* 2-Column Asymmetric Editorial Composition */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dominant Editorial Statement & Pull Quote */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <h2
              id="problem-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-[1.1]"
            >
              Why Pure Dense Search Fails in Public Procurement
            </h2>

            {/* Editorial Pull Quote */}
            <div className="border-l-2 border-accent-primary pl-5 sm:pl-6 space-y-3 py-1">
              <blockquote className="text-lg sm:text-xl font-medium tracking-tight text-text-primary leading-snug">
                &ldquo;Finding a standard is not enough. The system must explain why it applies.&rdquo;
              </blockquote>
              <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                Core Architectural Philosophy
              </p>
            </div>

            <p className="text-base text-text-secondary leading-relaxed font-normal">
              In Indian public infrastructure procurement, regulatory compliance is not a general
              relevance problem—it is a deterministic legal requirement governed by mandatory Quality
              Control Orders (QCOs) issued by the Ministry of Commerce and Industry.
            </p>

            <div className="pt-2 font-mono text-xs text-text-tertiary space-y-2">
              <span className="text-text-secondary uppercase tracking-wider block font-semibold text-[10px]">
                Target Regulatory Environment:
              </span>
              <p className="leading-relaxed">
                Central Public Works Department (CPWD), Municipal Corporations, Indian Railways, and
                GeM (Government e-Marketplace) compliance verification.
              </p>
            </div>
          </div>

          {/* Right Column: 03 Technical Friction Points with Hairlines and Prominent Numbers */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            {/* Friction 01 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary tracking-tight shrink-0 w-8">
                  01
                </span>
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                    Fragmented &amp; Unstructured BOQ Schedules
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    Tender notices issued by government departments arrive as dense, unstandardized PDFs
                    spanning hundreds of pages. Critical material specifications, performance thresholds,
                    and statutory testing protocols are buried across complex multi-column Bills of
                    Quantities (BOQ), nested appendices, and addenda.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            {/* Friction 02 */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary tracking-tight shrink-0 w-8">
                  02
                </span>
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                    Ambiguous Requirements &amp; Semantic Dilution
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    Dense neural embeddings (such as standard MiniLM models) represent semantic proximity
                    in a continuous latent space. While effective for high-level topical alignment (e.g.,
                    associating &ldquo;asphalt pavement&rdquo; with &ldquo;road construction&rdquo;), dense
                    embeddings blur critical numerical tolerances. In practical testing, pure vector search
                    cannot reliably differentiate between:
                  </p>
                </div>
              </div>

              {/* Technical Inspection Exhibit - Failure Modes (Level 2 Hairline Exhibit) */}
              <div className="ml-0 sm:ml-12 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
                  <div className="flex items-center justify-between text-text-tertiary uppercase tracking-wider text-[10px]">
                    <span>Failure Mode A</span>
                    <span className="text-accent-warning">Grade Conflation</span>
                  </div>
                  <div className="text-text-primary font-semibold text-xs sm:text-sm">
                    53 Grade OPC vs. 43 Grade OPC
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    Vectors project both cement types into near-identical coordinates despite
                    IS 12269 requiring a minimum 28-day compressive strength of 53 MPa versus
                    IS 8112 requiring 43 MPa. A substitution in high-load RCC structures leads
                    to structural non-compliance.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-lg border border-border-subtle bg-surface space-y-2.5">
                  <div className="flex items-center justify-between text-text-tertiary uppercase tracking-wider text-[10px]">
                    <span>Failure Mode B</span>
                    <span className="text-accent-warning">Citation Dilution</span>
                  </div>
                  <div className="text-text-primary font-semibold text-xs sm:text-sm">
                    IS 10322 vs. Descriptive Luminaires
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    When a tender explicitly specifies &ldquo;conforming to IS 10322 (Part 5/Sec 3)&rdquo;,
                    pure vector search often ranks a generic document with repeated words like
                    &ldquo;efficient LED street luminaire fixture&rdquo; higher than the exact regulatory
                    standard because of word frequency overlap.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            {/* Friction 03 */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary tracking-tight shrink-0 w-8">
                  03
                </span>
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text-primary">
                    Need for Defensible Evidence &amp; Audit Traceability
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    Procurement officers manually reviewing tenders spend hours cross-referencing national
                    standards catalogs. A missed or superseded standard risks formal bid challenges,
                    costly project arbitration, or disqualification under Quality Control Orders (QCOs)
                    mandated by the Ministry of Commerce and Industry. Every recommendation must cite
                    physical clause provenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
