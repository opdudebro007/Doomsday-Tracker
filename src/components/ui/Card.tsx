import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

export function Card({ className, glowOnHover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card/40 backdrop-blur-md border border-border/50 rounded-xl overflow-hidden transition-all duration-300 shadow-lg",
        glowOnHover && "hover:marvel-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
