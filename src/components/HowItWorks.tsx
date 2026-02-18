"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Free Property Assessment",
    description:
      "We evaluate your property's earning potential — location, seasonality, comparable listings — and provide a personalized revenue projection. No commitment, no pressure.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "We Handle Everything",
    description:
      "From professional photography and listing creation to dynamic pricing, guest communications, and coordinated cleanings after every stay. Every single detail, covered.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "You Collect the Revenue",
    description:
      "Monthly deposits directly to your account, paired with transparent performance reports. Watch your property earn more than you thought possible — completely hands-off.",
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
            Sit back. <br />
            <span className="text-[#D4AF6A]">We&apos;ll handle it.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-3 gap-0 md:divide-x md:divide-[#D4AF6A]/10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.18,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:px-12 first:pl-0 last:pr-0 pb-14 md:pb-0"
              >
                {/* Top rule + step number */}
                <div className="mb-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{
                      delay: 0.1 + i * 0.18,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "left" }}
                    className="w-10 h-px bg-[#D4AF6A]/60 mb-5"
                  />
                  <span className="font-serif text-[#D4AF6A]/60 text-3xl tracking-[0.15em]">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="p-2.5 rounded-xl bg-[#D4AF6A]/8 border border-[#D4AF6A]/15 w-fit mb-6">
                  <Icon className="w-5 h-5 text-[#D4AF6A]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-[1.6rem] font-bold text-[#F0EDE8] mb-4 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#F0EDE8]/55 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
