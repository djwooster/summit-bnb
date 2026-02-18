"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 34, suffix: "%", label: "Avg. Revenue Increase", prefix: "+" },
  { value: 150, suffix: "+", label: "Properties Managed", prefix: "" },
  { value: 4.9, suffix: "★", label: "Guest Satisfaction", prefix: "" },
  { value: 6, suffix: "", label: "Years of Excellence", prefix: "" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2.5);
      setDisplay(parseFloat((eased * value).toFixed(isDecimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, isDecimal]);

  return (
    <span>
      {prefix}
      {isDecimal ? display.toFixed(1) : Math.floor(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" ref={ref} className="bg-[#1E2530] border-y border-[#D4AF6A]/15">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Separator line (not on last) */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#D4AF6A]/20" />
              )}

              <div className="font-serif text-5xl md:text-6xl font-bold text-[#D4AF6A] mb-5 tabular-nums">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="text-[#F0EDE8]/60 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
