import * as React from "react";
import { WelcomeArea } from "@/components/home/welcome/welcome-section";
import { CapabilityPillars } from "@/components/home/capability-pillars";
import { WorkspaceSection } from "@/components/home/workspace/workspace-section";
import { AboutSection } from "@/components/home/about-section";

export default function Home() {
  return (
    <>
      <WelcomeArea />
      <CapabilityPillars />
      <WorkspaceSection />
      <AboutSection />
    </>
  );
}
