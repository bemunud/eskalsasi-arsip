"use client";

import React, { CSSProperties } from "react";

// Modify these
const MAIN_CIRCLE_SIZE = 314;
const MAIN_CIRCLE_OPACITY = 0.24;
const NUM_CIRCLES = 120;

const Ripple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-1/2 h-full w-full overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full bg-[#81b1f9]`}
          style={
            {
              width: MAIN_CIRCLE_SIZE + i * 70,
              height: MAIN_CIRCLE_SIZE + i * 70,
              opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
              animationDelay: `${i * 0.08}s`,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

Ripple.displayName = "Ripple";
export default Ripple;
