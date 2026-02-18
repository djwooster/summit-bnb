"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "+34%", label: "Avg. Revenue Increase" },
  { value: "150+", label: "Properties Managed" },
  { value: "4.9★", label: "Guest Satisfaction" },
  { value: "6 yrs", label: "Years of Excellence" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" ref={ref} className="bg-[#1E2530] border-y border-[#D4AF6A]/15">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center text-center relative">
              {/* Vertical separator */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#D4AF6A]/20" />
              )}

              {/* Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.1,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-5xl md:text-6xl font-bold text-[#D4AF6A] tabular-nums"
              >
                {stat.value}
              </motion.div>

              {/* Animated rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{
                  delay: 0.18 + i * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "center" }}
                className="w-7 h-px bg-[#D4AF6A]/45 my-4"
              />

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                  delay: 0.32 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-[#F0EDE8]/55 text-sm font-medium tracking-wide uppercase"
              >
                {stat.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
