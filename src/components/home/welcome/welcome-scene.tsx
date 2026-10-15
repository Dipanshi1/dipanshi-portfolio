"use client";

import * as React from "react";

interface WelcomeSceneProps {
  onEnterProjects: () => void;
  portalRef?: React.RefObject<SVGGElement>;
}

export function WelcomeScene({ onEnterProjects, portalRef }: WelcomeSceneProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#16141D] shadow-md select-none">
      <svg
        viewBox="0 0 800 440"
        className="w-full h-auto block"
        style={{ shapeRendering: "crispEdges" }}
        role="img"
        aria-label="Cozy isometric pixel-art reception entrance of Dipanshi's engineering studio with Dipanshi greeting visitors, a welcome sign, reception desk, and interactive doorway to the Project Lab."
      >
        <defs>
          {/* Warm neon sign amber glow */}
          <radialGradient id="welcomeGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          {/* Project Lab doorway interior light */}
          <linearGradient id="labDoorwayLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.55" />
          </linearGradient>

          {/* Desk lamp warm pool */}
          <radialGradient id="deskLampLight" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. BACKDROP & WALLS */}
        {/* Back Wall Plaster (Warm Sandstone Cream) */}
        <rect x="12" y="12" width="776" height="156" fill="#EDE6D9" />

        {/* Vertical wall wainscot seams */}
        {[
          44, 76, 108, 140, 172, 204, 236, 268, 300, 332, 364, 396, 428, 460, 492,
          524, 556, 588, 620, 652, 684, 716, 748, 776,
        ].map((x) => (
          <rect key={x} x={x} y="12" width="2" height="156" fill="#E2D9CA" />
        ))}

        {/* Top Wood Crown Molding / Picture Rail */}
        <rect x="12" y="20" width="776" height="8" fill="#5A3820" />
        <rect x="12" y="20" width="776" height="2" fill="#7C4E2D" />

        {/* Baseboard / Skirting Board */}
        <rect x="12" y="156" width="776" height="16" fill="#6B4224" />
        <rect x="12" y="156" width="776" height="4" fill="#8C5832" />
        <rect x="12" y="170" width="776" height="2" fill="#4B2A12" />

        {/* 2. ISOMETRIC LOBBY TILED FLOOR */}
        <rect x="12" y="172" width="776" height="256" fill="#D4C4B2" />

        {/* Alternating Lobby Floor Tile Rows (Warm Sandstone & Slate) */}
        {[
          { y: 172, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 192, h: 20, fill: "#D5C5B3", seams: [140, 260, 380, 500, 620, 740] },
          { y: 212, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 232, h: 20, fill: "#D0C0AD", seams: [140, 260, 380, 500, 620, 740] },
          { y: 252, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 272, h: 20, fill: "#D5C5B3", seams: [140, 260, 380, 500, 620, 740] },
          { y: 292, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 312, h: 20, fill: "#D0C0AD", seams: [140, 260, 380, 500, 620, 740] },
          { y: 332, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 352, h: 20, fill: "#D5C5B3", seams: [140, 260, 380, 500, 620, 740] },
          { y: 372, h: 20, fill: "#DFD1C0", seams: [80, 200, 320, 440, 560, 680] },
          { y: 392, h: 36, fill: "#D0C0AD", seams: [140, 260, 380, 500, 620, 740] },
        ].map((row, idx) => (
          <g key={idx}>
            <rect x="12" y={row.y} width="776" height={row.h} fill={row.fill} />
            <rect x="12" y={row.y + row.h - 2} width="776" height="2" fill="#B3A18E" />
            {row.seams.map((sx) => (
              <rect key={sx} x={sx} y={row.y} width="2" height={row.h - 2} fill="#B3A18E" />
            ))}
          </g>
        ))}

        {/* 3. WELCOME RUNNER & MAT */}
        {/* Runner Body leading to counter */}
        <rect x="332" y="212" width="136" height="216" fill="#9E432B" />
        <rect x="340" y="212" width="120" height="216" fill="#EDE6D8" />
        <rect x="344" y="212" width="112" height="216" fill="#243743" />

        {/* Geometric Diamond Motifs on Runner */}
        {[240, 280, 320, 360].map((ry) => (
          <g key={ry}>
            <rect x="396" y={ry} width="8" height="8" fill="#D89B52" />
            <rect x="392" y={ry + 2} width="16" height="4" fill="#D89B52" />
            <rect x="388" y={ry + 4} width="24" height="2" fill="#EDE6D8" />
          </g>
        ))}

        {/* Woven WELCOME Mat at bottom */}
        <g id="welcome-mat">
          <rect x="340" y="386" width="120" height="34" fill="#6B3B18" rx="2" />
          <rect x="344" y="390" width="112" height="26" fill="#B88548" rx="1" />
          <rect x="346" y="392" width="108" height="22" fill="#8C5C2E" />
          {/* Pixel lettering "WELCOME" */}
          <text
            x="400"
            y="407"
            textAnchor="middle"
            fill="#FFF8E7"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2"
          >
            WELCOME
          </text>
        </g>

        {/* 4. WALL DECORATIONS */}
        {/* Glowing Welcome Sign: "DIPANSHI GUPTA · ENGINEERING STUDIO" */}
        <g id="studio-plaque">
          {/* Amber Ambient Backlight Glow */}
          <circle cx="390" cy="62" r="90" fill="url(#welcomeGlow)" />

          {/* Plaque Outer Walnut Frame */}
          <rect x="256" y="36" width="268" height="52" fill="#452712" rx="4" />
          {/* Brass Inset Bevel */}
          <rect x="260" y="40" width="260" height="44" fill="#B47E32" rx="2" />
          {/* Dark Charcoal Slate Face */}
          <rect x="264" y="44" width="252" height="36" fill="#0D1117" rx="1" />

          {/* Accent Screws */}
          <rect x="266" y="46" width="3" height="3" fill="#FDE68A" />
          <rect x="513" y="46" width="3" height="3" fill="#FDE68A" />
          <rect x="266" y="75" width="3" height="3" fill="#FDE68A" />
          <rect x="513" y="75" width="3" height="3" fill="#FDE68A" />

          {/* Illuminated Pixel Text */}
          <text
            x="390"
            y="59"
            textAnchor="middle"
            fill="#F59E0B"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="1"
          >
            ✦ DIPANSHI GUPTA ✦
          </text>
          <text
            x="390"
            y="72"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="8.5"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.75"
          >
            APPLIED AI · SYSTEMS · DESIGN
          </text>
        </g>

        {/* Left Wall Studio Directory Board */}
        <g id="directory-board">
          {/* Frame */}
          <rect x="44" y="44" width="132" height="100" fill="#4B2C14" rx="2" />
          <rect x="48" y="48" width="124" height="92" fill="#FAF6EE" />
          <rect x="52" y="52" width="116" height="84" fill="#1C2128" />

          {/* Directory Title */}
          <rect x="56" y="56" width="108" height="10" fill="#0D1117" />
          <text
            x="110"
            y="64"
            textAnchor="middle"
            fill="#F3F4F6"
            fontSize="7"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            STUDIO DIRECTORY
          </text>

          {/* Directory Entries */}
          {/* Room 01: Welcome Reception */}
          <rect x="56" y="70" width="4" height="4" fill="#10B981" />
          <text x="64" y="74" fill="#10B981" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
            01 RECEPTION (HERE)
          </text>

          {/* Room 02: Project Lab */}
          <rect x="56" y="82" width="4" height="4" fill="#38BDF8" />
          <text x="64" y="86" fill="#E2E8F0" fontSize="6.5" fontFamily="monospace">
            02 PROJECT LAB →
          </text>

          {/* Room 03: Skills Studio */}
          <rect x="56" y="94" width="4" height="4" fill="#64748B" />
          <text x="64" y="98" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">
            03 SKILLS BENCHES
          </text>

          {/* Room 04: About & Achievements */}
          <rect x="56" y="106" width="4" height="4" fill="#64748B" />
          <text x="64" y="110" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">
            04 ABOUT &amp; AWARDS
          </text>

          {/* Room 05: Recruiter Dispatch */}
          <rect x="56" y="118" width="4" height="4" fill="#F59E0B" />
          <text x="64" y="122" fill="#FBBF24" fontSize="6.5" fontFamily="monospace">
            05 CONTACT / RÉSUMÉ
          </text>
        </g>

        {/* Modern Minimalist Wall Clock */}
        <g id="entrance-clock">
          <circle cx="216" cy="72" r="18" fill="#B47E32" />
          <circle cx="216" cy="72" r="15" fill="#FAF6EE" />
          <circle cx="216" cy="72" r="2" fill="#0284C7" />
          <line x1="216" y1="72" x2="216" y2="62" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
          <line x1="216" y1="72" x2="223" y2="72" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 5. LEFT LOBBY ENVIRONMENT & FURNITURE */}
        {/* Coat Rack & Developer Backpack */}
        <g id="coat-rack">
          {/* Cast Iron Stand */}
          <rect x="188" y="244" width="24" height="4" fill="#2E3440" />
          <rect x="198" y="112" width="4" height="134" fill="#3B4252" />
          {/* Hooks */}
          <rect x="192" y="120" width="16" height="3" fill="#D8DEE9" />
          <rect x="190" y="116" width="3" height="8" fill="#D8DEE9" />
          <rect x="207" y="116" width="3" height="8" fill="#D8DEE9" />

          {/* Developer Backpack Hanging */}
          <rect x="184" y="132" width="14" height="24" fill="#4C566A" rx="2" />
          <rect x="186" y="142" width="10" height="8" fill="#5E81AC" rx="1" />
          {/* Hackathon Lanyard Ribbon */}
          <path d="M192 124 L196 148" stroke="#EBCB8B" strokeWidth="1.5" />
        </g>

        {/* Large Potted Ficus Plant in Terracotta Planter */}
        <g id="lobby-ficus">
          <ellipse cx="76" cy="358" rx="28" ry="8" fill="#1C1612" opacity="0.3" />
          {/* Pot */}
          <rect x="56" y="348" width="40" height="6" fill="#8A361A" rx="2" />
          <polygon points="60,296 92,296 88,348 64,348" fill="#B85330" />
          <polygon points="78,296 92,296 88,348 80,348" fill="#9E4020" />
          <rect x="58" y="290" width="36" height="8" fill="#D26945" />
          {/* Soil */}
          <rect x="62" y="290" width="28" height="3" fill="#2E1C12" />
          {/* Stem & Leaves */}
          <rect x="74" y="210" width="4" height="80" fill="#1C5229" />
          <circle cx="64" cy="224" r="16" fill="#1E6631" />
          <circle cx="86" cy="216" r="18" fill="#2B783E" />
          <circle cx="68" cy="254" r="16" fill="#287239" />
          <circle cx="84" cy="262" r="16" fill="#328846" />
          <circle cx="76" cy="200" r="14" fill="#3DA154" />
        </g>

        {/* Cozy Lobby Waiting Bench */}
        <g id="waiting-bench">
          <rect x="110" y="278" width="80" height="6" fill="#1E1612" opacity="0.3" />
          {/* Wooden legs */}
          <rect x="116" y="244" width="6" height="36" fill="#4B270F" />
          <rect x="178" y="244" width="6" height="36" fill="#4B270F" />
          {/* Leather Padded Cushion */}
          <rect x="110" y="232" width="80" height="14" fill="#8C4A26" rx="2" />
          <rect x="112" y="233" width="76" height="3" fill="#A85C32" />
          {/* Cushion buttons */}
          <rect x="130" y="238" width="3" height="3" fill="#5E3118" />
          <rect x="150" y="238" width="3" height="3" fill="#5E3118" />
          <rect x="170" y="238" width="3" height="3" fill="#5E3118" />
        </g>

        {/* 6. RECEPTION COUNTER & CHARACTER (DIPANSHI) */}
        {/* Under-counter shadow */}
        <rect x="240" y="272" width="180" height="12" fill="#1E1612" opacity="0.3" />

        {/* PIXEL CHARACTER: DIPANSHI (Standing behind counter) */}
        <g id="character-dipanshi">
          {/* Character Body / Torso (Teal Cardigan & White Collar) */}
          <rect x="318" y="166" width="30" height="34" fill="#0F766E" rx="3" />
          <rect x="328" y="166" width="10" height="14" fill="#F8FAFC" />
          <rect x="330" y="174" width="6" height="26" fill="#0D9488" />

          {/* Left Arm (Resting on counter) */}
          <rect x="308" y="172" width="10" height="24" fill="#0F766E" rx="2" />
          <rect x="306" y="194" width="10" height="6" fill="#F7D2B7" rx="2" />

          {/* Right Arm (Waving to visitors!) */}
          <rect x="348" y="162" width="10" height="18" fill="#0F766E" rx="2" />
          <rect x="354" y="150" width="8" height="16" fill="#0F766E" rx="2" />
          {/* Waving Hand */}
          <rect x="352" y="142" width="10" height="10" fill="#F7D2B7" rx="2" />
          <rect x="350" y="144" width="3" height="6" fill="#F7D2B7" />
          {/* Motion sparkles near waving hand (stopped in reduced-motion) */}
          <g className="motion-reduce:hidden">
            <rect x="366" y="140" width="2" height="2" fill="#FBBF24" />
            <rect x="368" y="144" width="2" height="2" fill="#FBBF24" />
            <rect x="364" y="146" width="2" height="2" fill="#FBBF24" />
          </g>

          {/* Head & Neck */}
          <rect x="328" y="158" width="10" height="8" fill="#E5B899" />
          <rect x="322" y="136" width="22" height="24" fill="#F7D2B7" rx="4" />

          {/* Friendly Pixel Facial Features */}
          {/* Eyes */}
          <rect x="326" y="144" width="3" height="3" fill="#1C1917" />
          <rect x="336" y="144" width="3" height="3" fill="#1C1917" />
          <rect x="326" y="144" width="1" height="1" fill="#FFFFFF" />
          <rect x="336" y="144" width="1" height="1" fill="#FFFFFF" />
          {/* Eyebrows */}
          <rect x="325" y="142" width="4" height="1" fill="#2E231C" />
          <rect x="336" y="142" width="4" height="1" fill="#2E231C" />
          {/* Warm smile */}
          <rect x="329" y="152" width="6" height="2" fill="#991B1B" rx="1" />
          {/* Rosy cheeks */}
          <rect x="324" y="148" width="3" height="2" fill="#F43F5E" opacity="0.45" />
          <rect x="338" y="148" width="3" height="2" fill="#F43F5E" opacity="0.45" />

          {/* Brunette Styled Hair with Highlights */}
          <rect x="320" y="130" width="26" height="12" fill="#2E231C" rx="4" />
          <rect x="318" y="134" width="6" height="22" fill="#2E231C" rx="2" />
          <rect x="342" y="134" width="6" height="22" fill="#2E231C" rx="2" />
          {/* Bangs */}
          <rect x="324" y="136" width="18" height="5" fill="#3D2E24" />
          <rect x="326" y="132" width="12" height="2" fill="#523F32" />

          {/* Speech Bubble Greeting */}
          <g id="speech-bubble">
            <rect x="364" y="104" width="138" height="28" fill="#FFFFFF" rx="6" stroke="#18181B" strokeWidth="1.5" />
            <polygon points="368,132 360,140 376,132" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
            <polygon points="369,131 362,138 375,131" fill="#FFFFFF" />
            <text x="433" y="122" textAnchor="middle" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">
              Hi, I&apos;m Dipanshi! 👋
            </text>
          </g>
        </g>

        {/* Reception Counter */}
        <g id="reception-counter">
          {/* Apron & Base */}
          <rect x="246" y="210" width="176" height="64" fill="#582E12" rx="2" />
          <rect x="252" y="218" width="48" height="48" fill="#45230B" rx="1" />
          <rect x="310" y="218" width="48" height="48" fill="#45230B" rx="1" />
          <rect x="368" y="218" width="48" height="48" fill="#45230B" rx="1" />
          <rect x="242" y="270" width="184" height="6" fill="#381B05" />

          {/* Heavy Mahogany Countertop */}
          <rect x="238" y="196" width="192" height="14" fill="#7E4720" rx="2" />
          <rect x="238" y="196" width="192" height="3" fill="#A46433" />

          {/* Lamp Light Ambient Cone on Counter */}
          <circle cx="264" cy="206" r="42" fill="url(#deskLampLight)" />

          {/* Warm Vintage Desk Lamp on Counter */}
          <g id="counter-lamp">
            <rect x="256" y="202" width="12" height="3" fill="#996B26" />
            <path d="M262 202 V184" stroke="#B47E32" strokeWidth="2.5" />
            <rect x="252" y="180" width="18" height="8" fill="#14532D" rx="2" />
            <rect x="254" y="186" width="14" height="2" fill="#FDE68A" />
          </g>

          {/* Guestbook Register on Counter */}
          <g id="guestbook">
            <rect x="280" y="200" width="24" height="8" fill="#1E293B" rx="1" />
            <rect x="282" y="201" width="10" height="6" fill="#FAF6EE" />
            <rect x="293" y="201" width="10" height="6" fill="#FAF6EE" />
            {/* Ribbon marker */}
            <rect x="291" y="200" width="2" height="9" fill="#DC2626" />
          </g>

          {/* Brass Desk Bell */}
          <g id="desk-bell">
            <rect x="314" y="204" width="8" height="2" fill="#996B26" />
            <circle cx="318" cy="202" r="3" fill="#F59E0B" />
            <rect x="317" y="198" width="2" height="2" fill="#FDE68A" />
          </g>

          {/* Studio Check-In Tablet Terminal */}
          <g id="counter-tablet">
            <rect x="382" y="192" width="24" height="16" fill="#1E242C" rx="1" />
            <rect x="384" y="194" width="20" height="12" fill="#0D1117" />
            <rect x="386" y="196" width="16" height="2" fill="#38BDF8" />
            <rect x="386" y="200" width="10" height="2" fill="#34D399" />
            <rect x="390" y="207" width="8" height="2" fill="#334155" />
          </g>
        </g>

        {/* 7. THE INTERACTIVE PROJECT LAB GATEWAY / KIOSK (RIGHT ZONE) */}
        <g
          id="gateway-project-lab"
          ref={portalRef}
          role="button"
          tabIndex={0}
          aria-haspopup="false"
          aria-label="Enter Project Lab — Explore ManakSetu and engineering workstations. Press Enter or Space to activate."
          onClick={onEnterProjects}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onEnterProjects();
            }
          }}
          className="cursor-pointer group outline-none"
        >
          {/* Gateway Focus Bounding Highlight */}
          <rect
            x="542"
            y="76"
            width="200"
            height="296"
            rx="12"
            fill="transparent"
            className="transition-all duration-200 pointer-events-none group-hover:stroke-accent-primary/60 group-hover:stroke-2 group-focus-visible:stroke-border-focus group-focus-visible:stroke-2"
          />

          {/* Doorway Floor Shadow */}
          <rect x="546" y="360" width="192" height="16" fill="#1C1612" opacity="0.35" />

          {/* Heavy Architectural Portal Frame */}
          <rect x="548" y="90" width="188" height="276" fill="#1F2937" rx="4" />
          <rect x="554" y="96" width="176" height="266" fill="#111827" rx="2" />

          {/* Interior Doorway Light Glowing from Project Lab Beyond */}
          <rect x="560" y="104" width="164" height="254" fill="url(#labDoorwayLight)" />

          {/* Double Sliding Glass Doors */}
          {/* Left Door */}
          <rect x="564" y="108" width="76" height="246" fill="#1E293B" opacity="0.8" rx="1" />
          <rect x="568" y="112" width="68" height="114" fill="#0284C7" opacity="0.35" />
          <rect x="568" y="234" width="68" height="114" fill="#0284C7" opacity="0.25" />
          <rect x="634" y="210" width="4" height="32" fill="#E2E8F0" rx="1" />

          {/* Right Door */}
          <rect x="644" y="108" width="76" height="246" fill="#1E293B" opacity="0.8" rx="1" />
          <rect x="648" y="112" width="68" height="114" fill="#0284C7" opacity="0.35" />
          <rect x="648" y="234" width="68" height="114" fill="#0284C7" opacity="0.25" />
          <rect x="646" y="210" width="4" height="32" fill="#E2E8F0" rx="1" />

          {/* Frosted Door Glass Reflection Accents */}
          <polygon points="572,116 600,116 580,220 568,220" fill="#FFFFFF" opacity="0.12" />
          <polygon points="652,116 680,116 660,220 648,220" fill="#FFFFFF" opacity="0.12" />

          {/* Illuminated Portal Lintel Header */}
          <rect x="552" y="94" width="180" height="24" fill="#0D1117" rx="2" />
          <rect x="556" y="98" width="6" height="6" fill="#10B981" className="motion-reduce:animate-none animate-pulse" />
          <text
            x="644"
            y="110"
            textAnchor="middle"
            fill="#F3F4F6"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="1"
          >
            PROJECT LAB ➔
          </text>

          {/* Subtitle Badge on Doors */}
          <rect x="584" y="260" width="116" height="18" fill="#0F172A" rx="4" stroke="#0284C7" strokeWidth="1" />
          <text
            x="642"
            y="272"
            textAnchor="middle"
            fill="#38BDF8"
            fontSize="7.5"
            fontFamily="monospace"
            fontWeight="bold"
          >
            4 WORKSTATIONS
          </text>

          {/* Floor Directional Chevron Mat */}
          <g id="floor-chevrons">
            <rect x="580" y="364" width="124" height="18" fill="#1E293B" rx="2" />
            <text
              x="642"
              y="377"
              textAnchor="middle"
              fill="#38BDF8"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="3"
            >
              ➔ ➔ ➔
            </text>
          </g>

          {/* FLOATING ACTION BEACON ABOVE DOORWAY */}
          <g
            id="doorway-beacon"
            className="transition-transform duration-150 group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5"
          >
            {/* Shadow */}
            <rect x="548" y="52" width="188" height="30" rx="6" fill="#05070A" opacity="0.65" />
            {/* Badge Body */}
            <rect
              x="546"
              y="48"
              width="188"
              height="30"
              rx="6"
              fill="#0D1117"
              stroke="#0284C7"
              strokeWidth="1.5"
              className="group-hover:stroke-accent-primary"
            />
            {/* Glowing Dot */}
            <circle cx="562" cy="63" r="4" fill="#38BDF8" className="motion-reduce:animate-none animate-pulse" />
            {/* Monospace Action Label */}
            <text
              x="574"
              y="67"
              fill="#F3F4F6"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              ENTER PROJECT LAB
            </text>
            <text
              x="718"
              y="67"
              fill="#38BDF8"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="bold"
            >
              ↵
            </text>
            {/* Pointer Chevron */}
            <polygon points="636,78 642,84 648,78" fill="#0D1117" stroke="#0284C7" strokeWidth="1" />
          </g>
        </g>
      </svg>

      {/* Non-blocking Helper Cue (bottom strip) */}
      <div className="px-4 py-3 bg-[#0E0C13] border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-text-secondary font-medium">
            Zone 01 · Reception &amp; Welcome (Interactive Entrance)
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline">
            Click Project Lab door or press <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-text-primary">Enter</kbd> to explore workstations
          </span>
          <button
            type="button"
            onClick={onEnterProjects}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-primary text-canvas font-semibold"
          >
            Enter Lab →
          </button>
        </div>
      </div>
    </div>
  );
}
