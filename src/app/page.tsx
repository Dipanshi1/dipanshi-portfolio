import * as React from "react";
import { Hero } from "@/components/home/hero";
import { CapabilityPillars } from "@/components/home/capability-pillars";
import { FlagshipProject } from "@/components/home/flagship-project";
import { SecondaryProjects } from "@/components/home/secondary-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityPillars />
      <FlagshipProject />
      <SecondaryProjects />
    </>
  );
}
