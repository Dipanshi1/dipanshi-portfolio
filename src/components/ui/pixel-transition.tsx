"use client";

import * as React from "react";

interface PixelTransitionProps {
  active: boolean;
  onComplete?: () => void;
  variant?: "reveal" | "wipe";
  color?: string;
  rows?: number;
  cols?: number;
}

export function PixelTransition({
  active,
  onComplete,
  variant = "reveal",
  color = "#FAF6EE",
  rows = 10,
  cols = 16,
}: PixelTransitionProps) {
  const [animating, setAnimating] = React.useState(active);
  const [blocks, setBlocks] = React.useState<Array<{ id: number; delay: number }>>([]);

  // Generate grid tiles with staggered diagonal wave delays
  React.useEffect(() => {
    const tileList: Array<{ id: number; delay: number }> = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const id = r * cols + c;
        // Diagonal wave from top-left to bottom-right with subtle jitter
        const distance = c + r;
        const jitter = (id % 3) * 15;
        const delay = distance * 22 + jitter;
        tileList.push({ id, delay });
      }
    }
    setBlocks(tileList);
  }, [rows, cols]);

  React.useEffect(() => {
    if (active) {
      setAnimating(true);
      // Max animation delay + duration (~750ms)
      const timer = setTimeout(() => {
        setAnimating(false);
        onComplete?.();
      }, 750);
      return () => clearTimeout(timer);
    } else {
      setAnimating(false);
    }
  }, [active, onComplete]);

  if (!animating) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="w-full h-full grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {blocks.map((block) => (
          <div
            key={block.id}
            style={{
              backgroundColor: color,
              animationDelay: `${block.delay}ms`,
            }}
            className={`w-full h-full transition-opacity duration-200 motion-reduce:transition-none motion-reduce:opacity-0 ${
              variant === "reveal"
                ? "animate-[pixelDissolve_400ms_cubic-bezier(0.4,0,0.2,1)_forwards]"
                : "animate-[pixelCover_350ms_cubic-bezier(0.4,0,0.2,1)_forwards]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
