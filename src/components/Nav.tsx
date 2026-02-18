"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#14181F]/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-[#D4AF6A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Mountain className="w-5 h-5 text-[#D4AF6A] transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl font-bold text-[#F0EDE8] tracking-tight">
            Summit <span className="text-[#D4AF6A]">BnB</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#F0EDE8]/60 hover:text-[#D4AF6A] transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#D4AF6A] hover:bg-[#E4C882] text-[#14181F] font-semibold px-6 rounded-full transition-all duration-200 shadow-lg shadow-[#D4AF6A]/20 hover:shadow-[#D4AF6A]/40"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#14181F]/98 backdrop-blur-md border-t border-[#D4AF6A]/10 px-6 py-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F0EDE8]/70 hover:text-[#D4AF6A] transition-colors py-2 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-[#D4AF6A] hover:bg-[#E4C882] text-[#14181F] font-semibold rounded-full mt-2 w-full"
          >
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
