"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Layers, Cpu, Eye } from "lucide-react";

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
        {/* Monogram Visual Avatar */}
        <div className="relative mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-stone-300 bg-gradient-to-tr from-stone-900 via-stone-800 to-stone-700 flex items-center justify-center text-white shadow-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Subtle glow circle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.35),transparent_70%)]" />
            
            <span className="font-editorial text-4xl sm:text-5xl font-light tracking-wider text-amber-50 select-none">
              DG
            </span>
          </div>

          {/* Verification Badge */}
          <div className="absolute bottom-1 right-1 p-2 bg-white border border-stone-200 rounded-full shadow-md text-violet-600" title="Verified Engineering Profile">
            <Sparkles className="w-4 h-4 fill-violet-100" />
          </div>
        </div>

        {/* Identity & Status */}
        <h3 className="font-editorial text-2xl font-semibold text-stone-900 mb-1">
          Dipanshi Gupta
        </h3>
        <p className="text-xs uppercase tracking-widest text-violet-700 font-semibold mb-4">
          Software & AI Engineer
        </p>

        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full text-xs text-stone-700 shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
          <span>Available for High-Impact Roles • 2025</span>
        </div>

        <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
          Curating full-stack intelligence, resilient distributed services, and assistive perception.
        </p>
      </div>

      {/* Editorial Footer Note */}
      <div className="pt-3 mt-3 border-t border-stone-300/60 flex items-center justify-between text-[11px] text-stone-500 font-mono">
        <span>ASSET ID: DG-PORTRAIT-V1</span>
        <span className="flex items-center gap-1 text-stone-600">
          <Eye className="w-3 h-3" /> Visual Baseline
        </span>
      </div>
    </div>
  );
}

function Interactive3DTopology() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animId: number;

    // Canvas sizing with high DPI
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth || 320;
    const height = 300;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // 3D Nodes - Polyhedral geometry
    const numNodes = 24;
    const nodes: { x: number; y: number; z: number; ox: number; oy: number; oz: number }[] = [];
    const radius = 90;

    for (let i = 0; i < numNodes; i++) {
      const phi = Math.acos(-1 + (2 * i) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodes.push({ x, y, z, ox: x, oy: y, oz: z });
    }

    let angleX = 0.005;
    let angleY = 0.008;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate points
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
    };
  }, [isRotating]);

  return (
    <div className="relative rounded-2xl border border-stone-300/80 bg-stone-900 p-6 text-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-stone-300 uppercase">
            3D Polyhedral Architecture
          </span>
        </div>
        <button
          onClick={() => setIsRotating((prev) => !prev)}
          className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700"
        >
          {isRotating ? "Pause Orbit" : "Resume Orbit"}
        </button>
      </div>

      <div className="w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-[280px] cursor-grab active:cursor-grabbing"
          title="Interactive 3D Neural Polytope"
        />
      </div>

      <div className="pt-3 mt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
        <span>MATH: 24-NODE HARMONIC MESH</span>
        <span>LATENCY: 60FPS</span>
      </div>
    </div>
  );
}
