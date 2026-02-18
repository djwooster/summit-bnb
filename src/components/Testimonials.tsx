"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I went from stressed-out landlord to completely hands-off investor in less than two weeks. Summit BnB handled every single detail. Our revenue went up 38% in the first season.",
    name: "Michael R.",
    location: "Steamboat Springs, CO",
    property: "3-bed mountain cabin",
    stars: 5,
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Our property sat empty for months every year. Summit BnB got it listed, optimized, and fully booked within the first month. The reporting is transparent and the communication is impeccable.",
    name: "Sarah & Tom K.",
    location: "Breckenridge, CO",
    property: "Ski-in condo",
    stars: 5,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "I was skeptical about handing over my property to someone else. Now I genuinely cannot imagine managing it myself again. They increased our annual revenue by over $22,000.",
    name: "Jennifer L.",
    location: "Telluride, CO",
    property: "Luxury mountain home",
    stars: 5,
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="bg-[#14181F] py-28 md:py-40 relative overflow-hidden"
    >
      {/* Background mountain photo */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=60"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#D4AF6A]" />
            <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
              From Our Owners
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F0EDE8] leading-tight max-w-2xl">
            Real results. <br />
            <span className="text-[#D4AF6A]">Real owners.</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#1E2530]/70 border border-[#D4AF6A]/15 rounded-2xl p-8 flex flex-col backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-[#D4AF6A] fill-[#D4AF6A]"
                  />
                ))}
              </div>

              {/* Large quote mark */}
              <div
                className="font-serif text-8xl leading-none text-[#D4AF6A]/20 -mt-4 mb-1 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-[#F0EDE8]/80 leading-relaxed text-[15px] flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#D4AF6A]/15">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF6A]/30 shrink-0">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-[#F0EDE8] font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#F0EDE8]/45 text-xs">
                    {t.location} · {t.property}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
