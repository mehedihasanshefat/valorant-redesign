"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
  // ✅ Properly typed ref
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "100 bottom",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(
          ".animated-word",
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
            ease: "power2.inOut",
            stagger: 0.02,
          },
          0
        );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word special-font"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
