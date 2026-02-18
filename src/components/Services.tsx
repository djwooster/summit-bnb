"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Camera,
  MessageCircle,
  Sparkles,
  LayoutList,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Dynamic Pricing",
    description:
      "Real-time market analysis ensures your property is always priced to maximize occupancy and nightly rate — automatically.",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description:
      "Stunning photos that stop the scroll. We coordinate professional shoots to make your listing shine above the competition.",
  },
  {
    icon: MessageCircle,
    title: "Guest Communications",
    description:
      "Every inquiry, booking, and question handled promptly and professionally — 7 days a week, around the clock.",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Turnovers",
    description:
      "Vetted, experienced cleaning crews ensure your property is spotless and guest-ready after every single checkout.",
  },
  {
    icon: LayoutList,
    title: "Listing Management",
    description:
      "Optimized listings across Airbnb, VRBO, and direct booking platforms. We handle creation, updates, and SEO.",
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Clear, monthly performance statements with full revenue transparency. Your money, your data — no surprises.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="bg-[#1E2530] py-28 md:py-40 relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF6A 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                What&apos;s Included
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F0EDE8] leading-tight max-w-lg">
              Everything your <br />property needs.
            </h2>
          </div>
          <p className="text-[#F0EDE8]/60 max-w-sm leading-relaxed">
            No piecemeal add-ons. No hidden fees. One full-service management
            package that covers your property from every angle.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-[#14181F] border border-[#D4AF6A]/15 rounded-2xl p-8 cursor-default
                  hover:border-[#D4AF6A]/40 transition-colors duration-300
                  hover:shadow-xl hover:shadow-[#D4AF6A]/5"
              >
                <div className="p-2.5 rounded-xl bg-[#D4AF6A]/10 border border-[#D4AF6A]/20 w-fit mb-5 group-hover:bg-[#D4AF6A]/15 transition-colors">
                  <Icon className="w-5 h-5 text-[#D4AF6A]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F0EDE8] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#F0EDE8]/55 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
