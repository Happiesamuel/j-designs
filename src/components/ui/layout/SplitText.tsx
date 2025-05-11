"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";

export default function SplitText({
  className,
  children,
}: {
  className: string;
  children: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          await document.fonts.ready;

          containerRef.current!.style.visibility = "visible";

          const container = containerRef.current;
          if (!container) return;
          
          const heading = container.querySelector("h1");
          if (!heading) return;
          
          const { words } = splitText(heading);

          animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
              type: "spring",
              duration: 3,
              bounce: 0,
              delay: stagger(0.05),
            }
          );

          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // 40% of the element must be in view
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="container" ref={containerRef}>
      <h1 className={className}>{children}</h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        width: 100%;
        text-align: left;
        visibility: hidden;
      }

      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
