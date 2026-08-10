import React from "react";
import { cn } from "@/lib/utils";

interface ProgressRingProps {
  radius?: number;
  stroke?: number;
  progress: number;
  className?: string;
  colorClass?: string;
}

export function ProgressRing({
  radius = 60,
  stroke = 8,
  progress,
  className,
  colorClass = "text-doomsday-green",
}: ProgressRingProps) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className={cn("transition-all duration-1000 ease-out", colorClass)}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-heading font-bold">{progress}%</span>
      </div>
    </div>
  );
}
