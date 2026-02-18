import { Mountain } from "lucide-react";

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#14181F] border-t border-[#D4AF6A]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Mountain className="w-5 h-5 text-[#D4AF6A]" />
            <span className="font-serif text-lg font-bold text-[#F0EDE8] tracking-tight">
              Summit <span className="text-[#D4AF6A]">BnB</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F0EDE8]/40 hover:text-[#D4AF6A] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[#F0EDE8]/30 text-sm">
            &copy; {new Date().getFullYear()} Summit BnB. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D4AF6A]/8 text-center">
          <p className="text-[#F0EDE8]/20 text-xs tracking-wide">
            Colorado&apos;s premier short-term rental management company.
            Steamboat Springs, CO.
          </p>
        </div>
      </div>
    </footer>
  );
}
