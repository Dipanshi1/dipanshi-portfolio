import * as React from "react";
import { Container } from "@/components/layout/container";

export function ProblemStatement() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="w-full border-b border-border-subtle bg-canvas py-16 sm:py-20 lg:py-24 transition-colors duration-150"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Lead */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary block">
              01 / Problem Space &amp; Friction
            </span>
            <h2
              id="problem-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary"
            >
              Why Pure Dense Search Fails in Public Procurement
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              In Indian public infrastructure procurement, regulatory compliance is not a general
              relevance problem—it is a deterministic legal requirement governed by mandatory Quality
              Control Orders (QCOs).
            </p>
          </div>

          {/* Detailed Problem Analysis */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
                1. Unstructured, Multi-Page Engineering Tenders
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Tender notices issued by government departments (such as CPWD, Municipal Corporations,
                and Indian Railways) arrive as dense, unstandardized PDFs spanning hundreds of pages.
                Critical material specifications and testing protocols are buried across complex
                multi-column Bills of Quantities (BOQ) and nested technical schedules.
              </p>
            </div>

            <div className="h-px w-full bg-border-subtle" aria-hidden="true" />

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
                2. Semantic Dilution of Numerical Tolerances &amp; Grades
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Dense neural embeddings (such as standard MiniLM models) represent semantic proximity
                in a continuous latent space. While effective for high-level topical alignment (e.g.,
                associating &ldquo;asphalt pavement&rdquo; with &ldquo;road construction&rdquo;), dense
                embeddings blur critical numerical tolerances. In practical testing, a pure vector
                search cannot reliably differentiate between:
              </p>

              {/* Concrete Failure Examples */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
                  <div className="text-text-tertiary uppercase tracking-wider text-[11px]">
                    Failure Mode A: Grade Conflation
                  </div>
                  <div className="text-text-primary font-medium">
                    53 Grade OPC vs. 43 Grade OPC
                  </div>
                  <p className="text-text-secondary font-sans text-xs leading-relaxed">
                    Vectors project both cement types into near-identical coordinates despite
                    IS 12269 requiring a minimum 28-day compressive strength of 53 MPa versus
                    IS 8112 requiring 43 MPa. A substitution in high-load RCC structures leads
                    to structural non-compliance.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-border-subtle bg-surface space-y-2">
                  <div className="text-text-tertiary uppercase tracking-wider text-[11px]">
                    Failure Mode B: Citation Dilution
                  </div>
                  <div className="text-text-primary font-medium">
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

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
                3. The Regulatory Cost of Disconnect
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                Procurement officers manually reviewing tenders spend hours cross-referencing national
                standards catalogs. A missed or superseded standard risks formal bid challenges,
                costly project arbitration, or disqualification under Quality Control Orders (QCOs)
                mandated by the Ministry of Commerce and Industry.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
