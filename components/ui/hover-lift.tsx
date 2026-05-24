"use client";

import { useState, ReactNode } from "react";

export default function HoverLift({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-8px)" : "translateY(0px)",
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}
