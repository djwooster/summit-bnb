"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

const headline = ["Your rental property,", "managed flawlessly."];

const EASE = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.8,
      ease: EASE,
    },
  }),
};

function ArrowButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden inline-flex items-center bg-[#D4AF6A] text-[#14181F] font-semibold px-8 py-2 text-base rounded-full"
    >
      {/* Arrow entering from the left on hover */}
      <motion.span
        aria-hidden
        className="absolute left-7 flex items-center"
        animate={hovered ? { x: 0, opacity: 1 } : { x: -28, opacity: 0 }}
        transition={{ duration: 0.36, ease: EASE }}
      >
        <ArrowRight className="w-4 h-4" />
      </motion.span>

      {/* Text — shifts right to make room for entering arrow */}
      <motion.span
        animate={hovered ? { x: 22 } : { x: 0 }}
        transition={{ duration: 0.36, ease: EASE }}
      >
        {children}
      </motion.span>

      {/* Arrow exiting to the right on hover */}
      <motion.span
        className="ml-3 flex items-center"
        animate={hovered ? { x: 28, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.32, ease: EASE }}
      >
        <ArrowRight className="w-4 h-4" />
      </motion.span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
        alt="Colorado Rocky Mountains"
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14181F]/90 via-[#14181F]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14181F]/70 via-transparent to-[#14181F]/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-[#D4AF6A]" />
            <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
              Colorado&apos;s Premier STR Management
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#F0EDE8] mb-8">
            {headline.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden pb-2">
                <div className="flex flex-wrap gap-x-[0.3em]">
                  {line.split(" ").map((word, wordIdx) => {
                    const globalIdx =
                      lineIdx === 0
                        ? wordIdx
                        : headline[0].split(" ").length + wordIdx;
                    return (
                      <motion.span
                        key={`${lineIdx}-${wordIdx}`}
                        custom={globalIdx}
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-block"
                        style={{ transformOrigin: "bottom center" }}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#F0EDE8]/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Summit BnB handles every detail of your short-term rental — from
            listing optimization to guest communications to spotless turnovers.
            You earn. We work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <ArrowButton href="#contact">Get a Free Assessment</ArrowButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center border border-[#F0EDE8]/30 text-[#F0EDE8] hover:bg-[#F0EDE8]/10 hover:border-[#F0EDE8]/50 px-8 py-2 text-base font-semibold rounded-full backdrop-blur-sm transition-colors duration-200"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F0EDE8]/40 hover:text-[#D4AF6A] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
