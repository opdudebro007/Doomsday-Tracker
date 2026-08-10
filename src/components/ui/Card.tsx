import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

export function Card({ className, glowOnHover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl overflow-hidden transition-all duration-300",
        glowOnHover && "hover:marvel-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
