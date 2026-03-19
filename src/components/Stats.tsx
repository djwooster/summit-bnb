"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Star, DollarSign, LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    icon: TrendingUp,
    label: "Occupancy Rate",
    value: "95%",
    description: "of our clients operate at 100% occupancy",
    padding: "p-8",
    delay: 0.15,
  },
  {
    icon: Star,
    label: "Guest Rating",
    value: "4.8",
    description: "average guest rating",
    padding: "p-6",
    delay: 0.28,
  },
  {
    icon: DollarSign,
    label: "Seasonal Pricing",
    value: "100%",
    description: "optimization for maximum revenue",
    padding: "p-6",
    delay: 0.38,
  },
];

function StatCard({
  icon: Icon,
  label,
  value,
  description,
  padding,
  delay,
  inView,
}: (typeof cards)[number] & { icon: LucideIcon; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.75, ease: EASE }}
      className={`bg-[#1E2530] rounded-2xl ${padding} flex flex-col gap-6`}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-[#D4AF6A]" />
        <span className="text-[#F0EDE8]/50 text-sm font-medium">{label}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[40px] font-bold text-[#F0EDE8] leading-none tabular-nums">
          {value}
        </div>
        <p className="text-[#F0EDE8]/50 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [occupancy, ...smallCards] = cards;

  return (
    <section id="stats" ref={ref} className="bg-[#14181F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 bg-[#D4AF6A]/10 border border-[#D4AF6A]/25 rounded-full px-3 py-1 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.2em] uppercase">
                Performance Stats
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
              className="font-serif text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-[1.1] mb-6"
            >
              Proven results for property owners
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
              className="text-[#F0EDE8]/55 text-lg leading-relaxed mb-10 max-w-sm"
            >
              We combine local expertise with boutique care to deliver occupancy
              rates and ratings that speak for themselves.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 text-[#D4AF6A] font-semibold text-base hover:gap-3 transition-all duration-200"
            >
              Get a free assessment
              <span aria-hidden className="text-lg leading-none">↗</span>
            </motion.a>
          </div>

          {/* Right: stat cards */}
          <div className="flex flex-col gap-4">
            <StatCard {...occupancy} inView={inView} />
            <div className="grid grid-cols-2 gap-4">
              {smallCards.map((card) => (
                <StatCard key={card.label} {...card} inView={inView} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
