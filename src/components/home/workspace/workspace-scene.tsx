"use client";

import * as React from "react";
import { WorkstationData } from "./types";

interface WorkspaceSceneProps {
  station: WorkstationData;
  isSelected: boolean;
  onSelect: () => void;
  workstationRef?: React.RefObject<SVGGElement>;
}

export function WorkspaceScene({
  station,
  isSelected,
  onSelect,
  workstationRef,
}: WorkspaceSceneProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#16141D] shadow-md select-none">
      {/* Visual Canvas Container */}
      <svg
        viewBox="0 0 800 480"
        className="w-full h-auto block"
        style={{ shapeRendering: "crispEdges" }}
        role="img"
        aria-label="Cozy pixel-art engineering workspace with ManakSetu workstation, wooden floor, bookshelf, desk, monitors, plants, and window."
      >
        <defs>
          {/* Subtle warm window gradient */}
          <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B536B" />
            <stop offset="50%" stopColor="#8C6873" />
            <stop offset="85%" stopColor="#D98A68" />
            <stop offset="100%" stopColor="#F5BE7D" />
          </linearGradient>

          {/* Lamp amber glow pool */}
          <radialGradient id="lampLight" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          {/* Screen subtle cyan glow */}
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
            <stop offset="80%" stopColor="#0284C7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. ROOM SHELL & WALLS */}
        {/* Back Wall Plaster (Warm Cream Sandstone) */}
        <rect x="12" y="12" width="776" height="188" fill="#EFE8DC" />

        {/* Vertical Wall Plank / Wainscot Seams */}
        {[
          44, 76, 108, 140, 172, 204, 236, 268, 300, 332, 364, 396, 428, 460, 492,
          524, 556, 588, 620, 652, 684, 716, 748, 776,
        ].map((x) => (
          <rect key={x} x={x} y="12" width="2" height="188" fill="#E4DDD0" />
        ))}

        {/* Top Picture Rail / Wood Molding */}
        <rect x="12" y="24" width="776" height="8" fill="#5A3820" />
        <rect x="12" y="24" width="776" height="2" fill="#7C4E2D" />

        {/* Wall Baseboard (Dark Walnut Skirting) */}
        <rect x="12" y="184" width="776" height="16" fill="#6F4324" />
        <rect x="12" y="184" width="776" height="4" fill="#8C5832" />
        <rect x="12" y="198" width="776" height="2" fill="#4B2A12" />

        {/* 2. HARDWOOD PARQUET FLOOR */}
        <rect x="12" y="200" width="776" height="268" fill="#C89758" />

        {/* Staggered Horizontal Floor Planks */}
        {[
          { y: 200, h: 20, fill: "#C89758", seams: [72, 216, 384, 560, 712] },
          { y: 220, h: 20, fill: "#BD8C4F", seams: [144, 288, 464, 632, 760] },
          { y: 240, h: 20, fill: "#D2A062", seams: [96, 240, 400, 576, 728] },
          { y: 260, h: 20, fill: "#C59456", seams: [168, 312, 480, 648] },
          { y: 280, h: 20, fill: "#B8874A", seams: [80, 224, 392, 568, 720] },
          { y: 300, h: 20, fill: "#CF9E5E", seams: [152, 296, 472, 640, 768] },
          { y: 320, h: 20, fill: "#C59456", seams: [104, 248, 408, 584, 736] },
          { y: 340, h: 20, fill: "#BD8C4F", seams: [176, 320, 488, 656] },
          { y: 360, h: 20, fill: "#D2A062", seams: [88, 232, 400, 576, 728] },
          { y: 380, h: 20, fill: "#C89758", seams: [160, 304, 480, 648, 772] },
          { y: 400, h: 20, fill: "#B8874A", seams: [112, 256, 416, 592, 744] },
          { y: 420, h: 20, fill: "#CF9E5E", seams: [184, 328, 496, 664] },
          { y: 440, h: 28, fill: "#C59456", seams: [96, 240, 408, 584, 736] },
        ].map((row, idx) => (
          <g key={idx}>
            <rect x="12" y={row.y} width="776" height={row.h} fill={row.fill} />
            <rect x="12" y={row.y + row.h - 2} width="776" height="2" fill="#8E5E2E" />
            {row.seams.map((sx) => (
              <rect key={sx} x={sx} y={row.y} width="2" height={row.h - 2} fill="#8E5E2E" />
            ))}
          </g>
        ))}

        {/* 3. COZY WOVEN RUG UNDER WORKSTATION */}
        {/* Tassels / Fringe */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i}>
            <rect
              x="172"
              y={234 + i * 8}
              width="4"
              height="4"
              fill={i % 2 === 0 ? "#EDE6D8" : "#9E432B"}
            />
            <rect
              x="608"
              y={234 + i * 8}
              width="4"
              height="4"
              fill={i % 2 === 0 ? "#EDE6D8" : "#9E432B"}
            />
          </g>
        ))}

        {/* Rug Outer Border (Terracotta) */}
        <rect x="176" y="232" width="432" height="196" fill="#9E432B" />
        {/* Rug Inner Cream Piping */}
        <rect x="188" y="244" width="408" height="172" fill="#EDE6D8" />
        {/* Rug Main Field (Cozy Petrol Navy) */}
        <rect x="194" y="250" width="396" height="160" fill="#243743" />

        {/* Rug Geometric Pixel Diamond Patterns */}
        {[224, 288, 352, 416, 480, 544].map((rx) => (
          <g key={rx}>
            {/* Diamond Motif */}
            <rect x={rx - 4} y="324" width="8" height="8" fill="#D89B52" />
            <rect x={rx - 8} y="328" width="16" height="4" fill="#D89B52" />
            <rect x={rx - 12} y="332" width="24" height="4" fill="#EDE6D8" />
            <rect x={rx - 8} y="336" width="16" height="4" fill="#D89B52" />
            <rect x={rx - 4} y="340" width="8" height="8" fill="#D89B52" />
          </g>
        ))}

        {/* 4. BACK WALL DECORATIONS */}
        {/* Large Studio Window */}
        <g id="studio-window">
          {/* Outer Walnut Window Frame */}
          <rect x="532" y="36" width="152" height="136" fill="#452712" />
          {/* Glass Area / Twilight Sky */}
          <rect x="540" y="44" width="136" height="120" fill="url(#twilightSky)" />

          {/* Distant City Skyline Silhouettes */}
          <rect x="540" y="128" width="24" height="36" fill="#243342" />
          <rect x="568" y="116" width="32" height="48" fill="#1E2B38" />
          <rect x="604" y="134" width="28" height="30" fill="#243342" />
          <rect x="636" y="122" width="40" height="42" fill="#1C2733" />

          {/* Tiny glowing window dots in buildings */}
          <rect x="576" y="124" width="4" height="4" fill="#FDE047" opacity="0.8" />
          <rect x="584" y="132" width="4" height="4" fill="#FDE047" opacity="0.8" />
          <rect x="644" y="130" width="4" height="4" fill="#FDE047" opacity="0.8" />

          {/* Crescent Moon */}
          <rect x="636" y="56" width="12" height="12" fill="#FFFBEB" />
          <rect x="634" y="54" width="8" height="12" fill="url(#twilightSky)" />

          {/* Stars */}
          <rect x="556" y="58" width="2" height="2" fill="#FFFFFF" opacity="0.8" />
          <rect x="592" y="66" width="2" height="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="618" y="52" width="2" height="2" fill="#FFFFFF" opacity="0.7" />

          {/* Window Mullions / Cross Frame */}
          <rect x="604" y="44" width="8" height="120" fill="#452712" />
          <rect x="540" y="100" width="136" height="8" fill="#452712" />

          {/* Window Sill */}
          <rect x="524" y="164" width="168" height="12" fill="#5C381E" />
          <rect x="524" y="164" width="168" height="3" fill="#7C4E2D" />

          {/* Miniature Terracotta Succulent on Sill */}
          <rect x="544" y="152" width="16" height="12" fill="#B45330" />
          <rect x="542" y="150" width="20" height="4" fill="#D26945" />
          <rect x="548" y="142" width="8" height="8" fill="#3D8A4E" />
          <rect x="546" y="144" width="12" height="4" fill="#52A864" />
        </g>

        {/* SIH Hackathon Blueprint / Project Certificate */}
        <g id="sih-certificate">
          {/* Frame */}
          <rect x="320" y="44" width="136" height="96" fill="#452712" />
          <rect x="326" y="50" width="124" height="84" fill="#F7F3EB" />
          {/* Blueprint background */}
          <rect x="332" y="56" width="112" height="72" fill="#183556" />

          {/* Technical Blueprint Grid Lines */}
          <rect x="340" y="64" width="96" height="1" fill="#2E5A8C" />
          <rect x="340" y="74" width="96" height="1" fill="#2E5A8C" />
          <rect x="340" y="84" width="96" height="1" fill="#2E5A8C" />
          <rect x="340" y="94" width="96" height="1" fill="#2E5A8C" />
          <rect x="340" y="104" width="96" height="1" fill="#2E5A8C" />

          {/* Header text simulation */}
          <rect x="340" y="60" width="48" height="4" fill="#38BDF8" />
          <rect x="392" y="60" width="24" height="4" fill="#A5F3FC" />

          {/* Flowchart Boxes (Tender Extraction -> BIS Retrieval -> Audit) */}
          <rect x="340" y="70" width="24" height="12" fill="#0EA5E9" />
          <rect x="368" y="75" width="8" height="2" fill="#FFFFFF" />
          <rect x="380" y="70" width="24" height="12" fill="#10B981" />
          <rect x="408" y="75" width="8" height="2" fill="#FFFFFF" />
          <rect x="420" y="70" width="20" height="12" fill="#F59E0B" />

          {/* Blueprint footer labels */}
          <rect x="340" y="90" width="64" height="3" fill="#E2E8F0" opacity="0.9" />
          <rect x="340" y="96" width="52" height="3" fill="#94A3B8" opacity="0.8" />
          <rect x="340" y="102" width="76" height="3" fill="#64748B" opacity="0.7" />

          {/* Gold Accreditation Seal */}
          <rect x="424" y="96" width="12" height="12" fill="#F59E0B" />
          <rect x="426" y="98" width="8" height="8" fill="#FDE68A" />
        </g>

        {/* Retro Studio Wall Clock */}
        <g id="wall-clock">
          <rect x="220" y="52" width="48" height="48" fill="#B47E32" rx="4" />
          <rect x="224" y="56" width="40" height="40" fill="#FAF6EE" rx="2" />
          {/* Hour markers */}
          <rect x="242" y="58" width="4" height="3" fill="#18181B" />
          <rect x="242" y="91" width="4" height="3" fill="#18181B" />
          <rect x="226" y="74" width="3" height="4" fill="#18181B" />
          <rect x="259" y="74" width="3" height="4" fill="#18181B" />
          {/* Hands (10:10) */}
          <rect x="242" y="72" width="4" height="4" fill="#0284C7" />
          <rect x="236" y="66" width="8" height="3" fill="#18181B" />
          <rect x="244" y="64" width="3" height="10" fill="#18181B" />
        </g>

        {/* 5. BOOKSHELF / KNOWLEDGE BASE (LEFT ZONE) */}
        <g id="bookshelf">
          {/* Bookshelf Shadow */}
          <rect x="164" y="76" width="16" height="296" fill="#1A1510" opacity="0.25" />

          {/* Outer Wood Frame */}
          <rect x="40" y="68" width="124" height="308" fill="#583419" />
          <rect x="36" y="64" width="132" height="8" fill="#784724" />

          {/* Bookshelf Backing */}
          <rect x="46" y="74" width="112" height="296" fill="#3D220E" />

          {/* Shelf Tiers */}
          {[132, 196, 260, 324].map((sy) => (
            <g key={sy}>
              <rect x="46" y={sy} width="112" height="8" fill="#6A4020" />
              <rect x="46" y={sy} width="112" height="2" fill="#8C5730" />
            </g>
          ))}

          {/* Top of Bookcase: Cascading Pothos Plant */}
          <rect x="60" y="50" width="28" height="16" fill="#EDE7DD" />
          <rect x="58" y="48" width="32" height="4" fill="#DDD5C8" />
          {/* Trailing Foliage */}
          <rect x="64" y="40" width="20" height="10" fill="#2E7538" />
          <rect x="60" y="42" width="28" height="6" fill="#3F9E4C" />
          <rect x="54" y="56" width="8" height="16" fill="#2E7538" />
          <rect x="50" y="64" width="8" height="24" fill="#3F9E4C" />
          <rect x="46" y="76" width="6" height="32" fill="#245F2D" />
          <rect x="48" y="96" width="6" height="18" fill="#3F9E4C" />

          {/* Shelf 1 (y: 74-132): BIS Regulatory Binders */}
          {/* Binder 1: Deep Navy "BIS ACT" */}
          <rect x="54" y="86" width="14" height="46" fill="#1E3A8A" />
          <rect x="56" y="92" width="10" height="10" fill="#F8FAFC" />
          {/* Binder 2: Crimson "IS 10322" */}
          <rect x="70" y="84" width="16" height="48" fill="#B91C1C" />
          <rect x="73" y="90" width="10" height="12" fill="#FEE2E2" />
          {/* Binder 3: Amber "QCO 2024" */}
          <rect x="88" y="88" width="14" height="44" fill="#D97706" />
          {/* Binder 4: Forest "TENDERS" */}
          <rect x="104" y="84" width="16" height="48" fill="#047857" />
          {/* Slanted White Manual */}
          <polygon points="122,96 134,88 142,132 130,132" fill="#F1F5F9" />
          <polygon points="126,98 134,92 140,132 132,132" fill="#CBD5E1" />

          {/* Shelf 2 (y: 140-196): Engineering Tech Stack */}
          {/* Python (Teal) */}
          <rect x="54" y="152" width="12" height="44" fill="#0D9488" />
          {/* FastAPI (Green) */}
          <rect x="68" y="148" width="14" height="48" fill="#16A34A" />
          {/* Qdrant (Purple) */}
          <rect x="84" y="150" width="14" height="46" fill="#7C3AED" />
          {/* PyMuPDF (Amber) */}
          <rect x="100" y="154" width="10" height="42" fill="#EA580C" />
          {/* Next.js (Slate) */}
          <rect x="112" y="146" width="16" height="50" fill="#0F172A" />
          {/* Brass Bookend */}
          <rect x="130" y="168" width="8" height="28" fill="#B47E32" />

          {/* Shelf 3 (y: 204-260): Document Storage Boxes */}
          <rect x="54" y="218" width="46" height="42" fill="#475569" />
          <rect x="68" y="234" width="18" height="8" fill="#E2E8F0" />
          <rect x="106" y="218" width="44" height="42" fill="#334155" />
          <rect x="118" y="234" width="18" height="8" fill="#E2E8F0" />

          {/* Shelf 4 (y: 268-324): Wicker Archive Crate */}
          <rect x="54" y="280" width="96" height="44" fill="#966A3D" />
          <rect x="54" y="280" width="96" height="4" fill="#B88652" />
          {/* Cross weave pattern */}
          <rect x="64" y="290" width="12" height="12" fill="#7E562F" />
          <rect x="84" y="290" width="12" height="12" fill="#7E562F" />
          <rect x="104" y="290" width="12" height="12" fill="#7E562F" />
          <rect x="124" y="290" width="12" height="12" fill="#7E562F" />
          <rect x="74" y="306" width="12" height="12" fill="#7E562F" />
          <rect x="94" y="306" width="12" height="12" fill="#7E562F" />
          <rect x="114" y="306" width="12" height="12" fill="#7E562F" />
        </g>

        {/* 6. RIGHT ZONE: INDOOR FLORA (MONSTERA PLANT) */}
        <g id="monstera-plant">
          {/* Plant Pot Shadow on Floor */}
          <ellipse cx="728" cy="392" rx="36" ry="12" fill="#1E1610" opacity="0.3" />

          {/* Terracotta Saucer */}
          <rect x="696" y="384" width="64" height="8" fill="#8A361A" rx="2" />
          {/* Terracotta Pot Body */}
          <polygon points="702,328 754,328 748,384 708,384" fill="#B85330" />
          <polygon points="730,328 754,328 748,384 734,384" fill="#9E4020" />
          {/* Pot Rim */}
          <rect x="698" y="322" width="60" height="10" fill="#D26945" />
          <rect x="698" y="322" width="60" height="2" fill="#E8835F" />
          {/* Soil */}
          <rect x="704" y="322" width="48" height="4" fill="#2E1C12" />

          {/* Plant Stems */}
          <rect x="724" y="270" width="4" height="54" fill="#1C5229" />
          <rect x="712" y="250" width="4" height="74" fill="#1C5229" />
          <rect x="734" y="240" width="4" height="84" fill="#1C5229" />

          {/* Leaf 1 (Top Left Monstera Leaf) */}
          <g>
            <rect x="676" y="200" width="44" height="48" fill="#2B783E" rx="4" />
            <rect x="684" y="208" width="8" height="12" fill="#EFE8DC" />
            <rect x="700" y="224" width="8" height="10" fill="#EFE8DC" />
            <rect x="688" y="202" width="20" height="4" fill="#489F5B" />
          </g>

          {/* Leaf 2 (High Center Arching Leaf) */}
          <g>
            <rect x="704" y="176" width="48" height="48" fill="#1E6631" rx="4" />
            <rect x="714" y="184" width="10" height="12" fill="#EFE8DC" />
            <rect x="732" y="196" width="8" height="12" fill="#EFE8DC" />
            <rect x="712" y="178" width="28" height="4" fill="#3DA154" />
          </g>

          {/* Leaf 3 (Right Spreading Leaf) */}
          <g>
            <rect x="736" y="212" width="44" height="44" fill="#287239" rx="4" />
            <rect x="746" y="222" width="8" height="10" fill="#EFE8DC" />
            <rect x="760" y="234" width="8" height="10" fill="#EFE8DC" />
            <rect x="740" y="214" width="24" height="4" fill="#44A559" />
          </g>

          {/* Leaf 4 (Front Low Spreading Leaf) */}
          <g>
            <rect x="672" y="252" width="52" height="44" fill="#328846" rx="4" />
            <rect x="684" y="262" width="10" height="12" fill="#EFE8DC" />
            <rect x="702" y="272" width="10" height="12" fill="#EFE8DC" />
            <rect x="680" y="254" width="32" height="4" fill="#52B368" />
          </g>
        </g>

        {/* Paper Wastebasket beside Desk */}
        <g id="wastebasket">
          <polygon points="508,280 528,280 524,308 512,308" fill="#475569" />
          <rect x="506" y="278" width="24" height="3" fill="#64748B" />
          {/* Crumpled Draft Papers inside */}
          <rect x="512" y="272" width="8" height="8" fill="#F8FAFC" />
          <rect x="518" y="274" width="7" height="7" fill="#E2E8F0" />
        </g>

        {/* 7. THE HERO FLAGSHIP WORKSTATION (INTERACTIVE ZONE) */}
        <g
          id="workstation-manaksetu"
          ref={workstationRef}
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-expanded={isSelected}
          aria-label={`${station.title} Workstation — ${station.tagline} Press Enter or Space to inspect.`}
          onClick={onSelect}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect();
            }
          }}
          className="cursor-pointer group outline-none"
        >
          {/* Interactive Workstation Bounding Focus Outline */}
          <rect
            x="236"
            y="92"
            width="280"
            height="276"
            rx="12"
            fill="transparent"
            className={`transition-all duration-200 pointer-events-none ${
              isSelected
                ? "stroke-accent-primary stroke-2 [stroke-dasharray:6_4]"
                : "group-hover:stroke-accent-primary/50 group-hover:stroke-1 group-focus-visible:stroke-border-focus group-focus-visible:stroke-2"
            }`}
          />

          {/* Ambient Lighting Cones on Desk from Lamp & Monitors */}
          <circle cx="486" cy="224" r="76" fill="url(#lampLight)" />
          <circle cx="346" cy="176" r="88" fill="url(#screenGlow)" />

          {/* Under-Desk Shadow */}
          <rect
            x="248"
            y="320"
            width="248"
            height="16"
            fill="#1E1610"
            opacity="0.35"
          />

          {/* Heavy Timber Desk Legs & Stretchers */}
          {/* Left Leg Set */}
          <rect x="254" y="232" width="14" height="96" fill="#4B270F" />
          <rect x="254" y="232" width="4" height="96" fill="#6B3B18" />
          <rect x="250" y="324" width="22" height="6" fill="#2E1606" />

          {/* Right Leg Set */}
          <rect x="484" y="232" width="14" height="96" fill="#4B270F" />
          <rect x="484" y="232" width="4" height="96" fill="#6B3B18" />
          <rect x="480" y="324" width="22" height="6" fill="#2E1606" />

          {/* Back Stretcher Rail */}
          <rect x="268" y="280" width="216" height="8" fill="#3D1E0A" />

          {/* Solid Mahogany Desk Tabletop */}
          {/* Apron */}
          <rect x="242" y="222" width="268" height="12" fill="#582E12" />
          {/* Main Top Surface */}
          <rect x="240" y="210" width="272" height="14" fill="#7E4720" />
          {/* Top Edge Chamfer Highlight */}
          <rect x="240" y="208" width="272" height="3" fill="#A46433" />

          {/* High-Performance PC Rig / Inference Server Chassis */}
          <g id="workstation-pc">
            <rect x="252" y="236" width="36" height="72" fill="#181B22" rx="2" />
            <rect x="254" y="238" width="32" height="68" fill="#0D1117" />
            {/* Front Panel Drive & Ventilation Grilles */}
            <rect x="258" y="244" width="24" height="3" fill="#2A313D" />
            <rect x="258" y="250" width="24" height="3" fill="#2A313D" />
            <rect x="258" y="256" width="24" height="3" fill="#2A313D" />
            {/* Acrylic Side Window with Glowing Components */}
            <rect x="258" y="266" width="24" height="34" fill="#161B22" />
            <rect x="262" y="272" width="16" height="4" fill="#38BDF8" opacity="0.9" />
            <rect x="262" y="280" width="12" height="4" fill="#10B981" opacity="0.8" />
            {/* Pulsing Power LED */}
            <circle
              cx="270"
              cy="246"
              r="2"
              fill="#38BDF8"
              className="motion-reduce:animate-none animate-pulse"
            />
          </g>

          {/* Slate Desk Mat */}
          <rect x="290" y="212" width="180" height="32" fill="#1C2128" rx="2" />
          <rect x="292" y="213" width="176" height="1" fill="#30363D" />

          {/* Mechanical Keyboard & Mouse */}
          <g id="peripherals">
            {/* Keyboard base */}
            <rect x="330" y="222" width="56" height="16" fill="#2D333B" rx="1" />
            {/* Cream & Accent Keycaps */}
            <rect x="332" y="224" width="52" height="5" fill="#E6EDF3" />
            <rect x="332" y="230" width="52" height="5" fill="#D0D7DE" />
            {/* Orange spacebar / enter key */}
            <rect x="348" y="231" width="20" height="3" fill="#F97316" />

            {/* Precision Ergonomic Mouse */}
            <rect x="396" y="224" width="12" height="14" fill="#2D333B" rx="3" />
            <rect x="401" y="225" width="2" height="4" fill="#38BDF8" />
          </g>

          {/* Coffee Mug with Pixel Steam */}
          <g id="coffee-mug">
            <rect x="302" y="218" width="14" height="16" fill="#C25938" rx="1" />
            {/* Handle */}
            <path
              d="M316 221 h4 v10 h-4"
              stroke="#C25938"
              strokeWidth="2"
              fill="none"
            />
            {/* Coffee fill */}
            <rect x="304" y="219" width="10" height="3" fill="#381D0F" />
            {/* Pixel Steam Particles (respects reduced motion) */}
            <g className="motion-reduce:hidden">
              <rect
                x="306"
                y="210"
                width="2"
                height="4"
                fill="#F4EFEA"
                opacity="0.75"
              />
              <rect
                x="310"
                y="206"
                width="2"
                height="5"
                fill="#F4EFEA"
                opacity="0.6"
              />
              <rect
                x="308"
                y="200"
                width="2"
                height="4"
                fill="#F4EFEA"
                opacity="0.45"
              />
            </g>
          </g>

          {/* Vintage Banker's Desk Lamp */}
          <g id="desk-lamp">
            {/* Heavy Brass Base on Desk */}
            <rect x="474" y="222" width="16" height="4" fill="#996B26" />
            <rect x="478" y="220" width="8" height="2" fill="#C28C38" />
            {/* Curved Brass Arm */}
            <path
              d="M482 220 V196 H478"
              stroke="#B47E32"
              strokeWidth="3"
              fill="none"
            />
            {/* Emerald Glass Shade */}
            <rect x="466" y="190" width="24" height="10" fill="#14532D" rx="2" />
            <rect x="468" y="192" width="20" height="2" fill="#22C55E" opacity="0.6" />
            {/* Amber Bulb Rim */}
            <rect x="470" y="200" width="16" height="2" fill="#FBBF24" />
          </g>

          {/* MONITORS SETUP */}
          {/* 1. Primary Ultrawide Monitor (ManakSetu System Radar) */}
          <g id="primary-monitor">
            {/* Monitor Stand */}
            <rect x="340" y="196" width="12" height="18" fill="#161B22" />
            <rect x="334" y="212" width="24" height="4" fill="#30363D" rx="1" />

            {/* Monitor Bezel Frame */}
            <rect x="286" y="136" width="120" height="74" fill="#161B22" rx="3" />
            <rect x="288" y="138" width="116" height="70" fill="#0D1117" rx="1" />

            {/* SCREEN DISPLAY: MANAKSETU AUDIT SYSTEM */}
            {/* Top Bar: Title & Live Connection Dot */}
            <rect x="290" y="140" width="112" height="8" fill="#161B22" />
            <rect x="294" y="142" width="4" height="4" fill="#10B981" />
            <rect x="302" y="143" width="40" height="2" fill="#E6EDF3" />
            <rect x="390" y="143" width="8" height="2" fill="#38BDF8" />

            {/* Left Column: 6-Signal Ranking Breakdown */}
            <g id="screen-signals">
              {/* Signal 1: Semantic (Cyan) */}
              <rect x="294" y="152" width="12" height="2" fill="#64748B" />
              <rect x="310" y="152" width="22" height="2" fill="#38BDF8" />

              {/* Signal 2: BM25 (Blue) */}
              <rect x="294" y="158" width="12" height="2" fill="#64748B" />
              <rect x="310" y="158" width="18" height="2" fill="#60A5FA" />

              {/* Signal 3: Product (Emerald) */}
              <rect x="294" y="164" width="12" height="2" fill="#64748B" />
              <rect x="310" y="164" width="26" height="2" fill="#34D399" />

              {/* Signal 4: Metadata (Amber) */}
              <rect x="294" y="170" width="12" height="2" fill="#64748B" />
              <rect x="310" y="170" width="24" height="2" fill="#FBBF24" />

              {/* Signal 5: Domain (Purple) */}
              <rect x="294" y="176" width="12" height="2" fill="#64748B" />
              <rect x="310" y="176" width="16" height="2" fill="#A78BFA" />

              {/* Signal 6: Reference Boost (+0.30) */}
              <rect x="294" y="182" width="12" height="2" fill="#64748B" />
              <rect x="310" y="182" width="20" height="2" fill="#F472B6" />
            </g>

            {/* Divider Rule */}
            <rect x="342" y="150" width="1" height="52" fill="#21262D" />

            {/* Right Column: Matched Indian Standard Card */}
            <g id="screen-match">
              <rect x="348" y="152" width="48" height="34" fill="#161B22" rx="1" />
              {/* IS 10322 Title */}
              <rect x="352" y="156" width="30" height="4" fill="#38BDF8" />
              {/* Subtitle / LED luminaire */}
              <rect x="352" y="163" width="40" height="2" fill="#94A3B8" />
              <rect x="352" y="167" width="34" height="2" fill="#64748B" />
              {/* High Confidence 0.94 Score Badge */}
              <rect x="352" y="174" width="22" height="8" fill="#065F46" rx="1" />
              <rect x="354" y="177" width="18" height="2" fill="#34D399" />

              {/* Mini Status Footer on Screen */}
              <rect x="348" y="192" width="48" height="4" fill="#0E4429" rx="1" />
              <rect x="352" y="193" width="24" height="2" fill="#3FB950" />
            </g>
          </g>

          {/* 2. Secondary Portrait Monitor (Legal Tender Clause Viewer) */}
          <g id="portrait-monitor">
            {/* Monitor Stand */}
            <rect x="432" y="198" width="8" height="18" fill="#161B22" />
            <rect x="426" y="214" width="20" height="3" fill="#30363D" rx="1" />

            {/* Portrait Bezel */}
            <rect x="412" y="130" width="54" height="84" fill="#161B22" rx="3" />
            <rect x="414" y="132" width="50" height="80" fill="#0D1117" rx="1" />

            {/* PDF Clause text simulation lines */}
            <rect x="418" y="136" width="28" height="3" fill="#60A5FA" />
            <rect x="418" y="143" width="42" height="2" fill="#64748B" />
            <rect x="418" y="148" width="38" height="2" fill="#64748B" />

            {/* Amber Highlighted Clause (NIT_MCD-2024-LT-09) */}
            <rect x="418" y="154" width="42" height="18" fill="#78350F" rx="1" />
            <rect x="420" y="157" width="36" height="2" fill="#FDE68A" />
            <rect x="420" y="162" width="32" height="2" fill="#FDE68A" />
            <rect x="420" y="167" width="24" height="2" fill="#FDE68A" />

            {/* Additional paragraph text lines */}
            <rect x="418" y="176" width="42" height="2" fill="#64748B" />
            <rect x="418" y="181" width="36" height="2" fill="#475569" />
            <rect x="418" y="186" width="40" height="2" fill="#475569" />
            <rect x="418" y="191" width="28" height="2" fill="#475569" />
            <rect x="418" y="202" width="42" height="4" fill="#1E293B" />
          </g>

          {/* Ergonomic Developer Chair */}
          <g id="developer-chair">
            {/* 5-Star Caster Wheel Base on Floor */}
            <rect x="342" y="348" width="48" height="4" fill="#1E242C" />
            <rect x="364" y="338" width="48" height="4" fill="#1E242C" />
            <rect x="363" y="332" width="6" height="18" fill="#475569" />
            {/* Casters */}
            <rect x="340" y="350" width="4" height="4" fill="#0F141C" />
            <rect x="388" y="350" width="4" height="4" fill="#0F141C" />
            <rect x="364" y="340" width="4" height="4" fill="#0F141C" />
            <rect x="410" y="340" width="4" height="4" fill="#0F141C" />

            {/* Chair Padded Seat Cushion */}
            <rect x="340" y="296" width="56" height="14" fill="#202732" rx="3" />
            <rect x="342" y="297" width="52" height="2" fill="#333F50" />

            {/* Molded Armrests */}
            <rect x="334" y="278" width="6" height="24" fill="#161B22" rx="1" />
            <rect x="332" y="276" width="10" height="4" fill="#2A3442" rx="1" />
            <rect x="396" y="278" width="6" height="24" fill="#161B22" rx="1" />
            <rect x="394" y="276" width="10" height="4" fill="#2A3442" rx="1" />

            {/* Contoured Mesh Backrest with Lumbar Support */}
            <rect x="344" y="248" width="48" height="50" fill="#28313E" rx="4" />
            {/* Mesh Texture Lines */}
            <rect x="348" y="254" width="40" height="2" fill="#1C232D" />
            <rect x="348" y="260" width="40" height="2" fill="#1C232D" />
            <rect x="348" y="266" width="40" height="2" fill="#1C232D" />
            <rect x="348" y="272" width="40" height="2" fill="#1C232D" />
            <rect x="348" y="278" width="40" height="2" fill="#1C232D" />
            <rect x="348" y="284" width="40" height="2" fill="#1C232D" />
            {/* Lumbar Spine Accent */}
            <rect x="365" y="250" width="6" height="46" fill="#161B22" />

            {/* Headrest */}
            <rect x="354" y="238" width="28" height="10" fill="#161B22" rx="2" />
            <rect x="356" y="240" width="24" height="6" fill="#28313E" rx="1" />
          </g>

          {/* FLOATING STATION INTERACTIVE BEACON / CALLOUT BADGE */}
          <g
            id="station-beacon"
            className="transition-transform duration-150 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
          >
            {/* Shadow underneath badge */}
            <rect
              x="284"
              y="98"
              width="200"
              height="30"
              rx="6"
              fill="#05070A"
              opacity="0.6"
            />
            {/* Badge Body */}
            <rect
              x="282"
              y="94"
              width="200"
              height="30"
              rx="6"
              fill="#0D1117"
              stroke={isSelected ? "#0284C7" : "#30363D"}
              strokeWidth={isSelected ? 2 : 1}
              className="group-hover:stroke-accent-primary group-focus-visible:stroke-accent-primary"
            />
            {/* Active Emerald Prototype Status Dot */}
            <circle
              cx="298"
              cy="109"
              r="4"
              fill="#10B981"
              className="motion-reduce:animate-none animate-pulse"
            />
            {/* Station Title Label */}
            <text
              x="310"
              y="113"
              fill="#F3F4F6"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              {station.number} · {station.title.toUpperCase()}
            </text>
            {/* Chevron Action Cue */}
            <text
              x="456"
              y="113"
              fill="#38BDF8"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="bold"
            >
              ↵
            </text>

            {/* Downward Pointer Triangle */}
            <polygon
              points="382,124 388,130 394,124"
              fill="#0D1117"
              stroke={isSelected ? "#0284C7" : "#30363D"}
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>

      {/* Interactive Helper Cue (Non-blocking bottom overlay) */}
      <div className="px-4 py-3 bg-[#0E0C13] border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-text-secondary font-medium">
            Active Station: {station.title} ({station.status})
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline">
            Click workstation or press <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">Enter</kbd> to inspect
          </span>
          <button
            type="button"
            onClick={onSelect}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-primary text-canvas font-semibold"
          >
            Inspect Station →
          </button>
        </div>
      </div>
    </div>
  );
}
