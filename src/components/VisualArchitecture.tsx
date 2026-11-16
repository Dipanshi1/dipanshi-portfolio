"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function VisualArchitecture() {
  const [activeTab, setActiveTab] = useState<"visual" | "interactive3d">("visual");

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Tab Switcher for Architecture */}
      <div className="flex items-center justify-between p-1 bg-stone-200/60 border border-stone-300/80 rounded-xl text-xs font-medium max-w-xs mx-auto md:mx-0">
        <button
          onClick={() => setActiveTab("visual")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            activeTab === "visual"
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-violet-600" />
          <span>Portrait Identity</span>
        </button>
        <button
          onClick={() => setActiveTab("interactive3d")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            activeTab === "interactive3d"
              ? "bg-white text-stone-900 shadow-sm"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-lime-600" />
          <span>3D Topology Engine</span>
        </button>
      </div>

      {activeTab === "visual" ? <PortraitFallback /> : <Interactive3DTopology />}
    </div>
  );
}

function PortraitFallback() {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-stone-300/80 bg-gradient-to-b from-[#F5F1EA] to-[#EDE7DC] p-6 shadow-sm">
      {/* Editorial Frame Background Accents */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-lime-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center py-8 text-center z-10">
        {/* Profile Portrait */}
        <div className="relative mb-6">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-stone-300 bg-stone-900 shadow-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/images/dipanshi-gupta.jpg"
              alt="Portrait of Dipanshi Gupta, Software and AI Systems Developer"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover object-[center_25%]"
              priority
            />
          </div>

          {/* Verification Badge */}
          <div className="absolute bottom-1 right-1 p-2 bg-white border border-stone-200 rounded-full shadow-md text-violet-600" title="Profile Identity">
            <Sparkles className="w-4 h-4 fill-violet-100" />
          </div>
        </div>

        {/* Identity & Status */}
        <h3 className="font-editorial text-2xl font-semibold text-stone-900 mb-1">
          {PERSONAL_INFO.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-violet-700 font-semibold mb-4">
          Software &amp; AI Systems Developer
        </p>

        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full text-xs text-stone-700 shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
          <span>{PERSONAL_INFO.availabilityStatus}</span>
        </div>

        <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
          Exploring full-stack applications, surface-defect inspection, model-routing frameworks, and semantic search tools.
        </p>
      </div>

      {/* Editorial Footer Note */}
      <div className="pt-3 mt-3 border-t border-stone-300/60 flex items-center justify-between text-[11px] text-stone-500 font-mono">
        <span>ASSET ID: DG-PORTRAIT-V1</span>
        <span className="text-stone-600 font-mono">
          PROFILE / DG
        </span>
      </div>
    </div>
  );
}

function Interactive3DTopology() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animId: number;

    // Responsive Canvas Resizing with high DPI
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth || 320;
      const height = 280;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scale
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    // 3D Nodes - Polyhedral geometry
    const numNodes = 24;
    const nodes: { ox: number; oy: number; oz: number }[] = [];
    const radius = 90;

    for (let i = 0; i < numNodes; i++) {
      const phi = Math.acos(-1 + (2 * i) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodes.push({ ox: x, oy: y, oz: z });
    }

    let angleX = 0.005;
    let angleY = 0.008;

    const render = () => {
      const width = container.clientWidth || 320;
      const height = 280;
      ctx.clearRect(0, 0, width, height);

      // Rotate points gently if active and reduced-motion is not requested
      if (isRotating && !prefersReducedMotion) {
        angleX += 0.003;
        angleY += 0.005;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = nodes.map((node) => {
        // Y-axis rotation
        const x1 = node.ox * cosY - node.oz * sinY;
        const z1 = node.oz * cosY + node.ox * sinY;

        // X-axis rotation
        const y2 = node.oy * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.oy * sinX;

        // Perspective projection
        const fov = 260;
        const scale = fov / (fov + z2);
        const px = x1 * scale + width / 2;
        const py = y2 * scale + height / 2;

        return { x: px, y: py, z: z2, scale };
      });

      // Draw connection lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.45;
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i]?.x || 0, projected[i]?.y || 0);
            ctx.lineTo(projected[j]?.x || 0, projected[j]?.y || 0);
            ctx.stroke();
          }
        }
      }

      // Draw vertices
      projected.forEach((pt) => {
        const nodeRadius = Math.max(1.5, 2.8 * pt.scale);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = pt.z > 0 ? "#7C3AED" : "#84CC16";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, [isRotating]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl border border-stone-300/80 bg-stone-900 p-6 text-white shadow-sm overflow-hidden"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-stone-300 uppercase">
            3D Polyhedral Architecture
          </span>
        </div>
        <button
          onClick={() => setIsRotating((prev) => !prev)}
          className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors focus:outline-none focus:ring-1 focus:ring-violet-400"
          aria-label={isRotating ? "Pause geometric animation" : "Resume geometric animation"}
        >
          {isRotating ? "Pause Animation" : "Resume Animation"}
        </button>
      </div>

      <div className="w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-[280px]"
          title="Client-rendered 3D Harmonic Polyhedral Mesh"
        />
      </div>

      <div className="pt-3 mt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
        <span>CANVAS: 24-NODE HARMONIC POLYTOPE</span>
        <span>CLIENT-RENDERED</span>
      </div>
    </div>
  );
}
