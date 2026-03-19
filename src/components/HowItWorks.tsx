"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Setup & Optimization",
    bullets: [
      "Professional photos",
      "Listing creation & SEO optimization",
    ],
  },
  {
    number: "02",
    title: "Full-Service Management",
    bullets: [
      "Guest communication (under 1 hour response time)",
      "Cleaning, maintenance, restocking",
    ],
  },
  {
    number: "03",
    title: "Revenue Optimization",
    bullets: [
      "Daily pricing adjustments",
      "Monthly listing updates",
      "Seasonal photo updates",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="bg-[#14181F] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#D4AF6A]" />
            <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
              The Process
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F0EDE8] max-w-2xl leading-tight">
            We handle <span className="text-[#D4AF6A]">everything.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-3 gap-10 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.18,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-l border-[#D4AF6A]/25 pl-8 md:pr-12 flex flex-col justify-between min-h-64 gap-8"
            >
              {/* Top: title + bullets */}
              <div className="flex flex-col gap-6">
                <h3 className="font-serif text-2xl font-bold text-[#F0EDE8] leading-snug">
                  {step.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[#F0EDE8]/55 text-[15px] leading-relaxed">
                      <span className="mt-[0.4em] w-1 h-1 rounded-full bg-[#D4AF6A]/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: large step number */}
              <span className="font-serif text-6xl md:text-7xl font-bold text-[#D4AF6A]/20 leading-none tabular-nums">
                {step.number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
