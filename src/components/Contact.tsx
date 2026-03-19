"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Mountain,
  Send,
} from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  message: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyAddress: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again or email us directly.");
    }
  };

  const inputClass =
    "bg-[#14181F]/60 border-[#D4AF6A]/20 text-[#F0EDE8] placeholder:text-[#F0EDE8]/30 focus:border-[#D4AF6A]/60 focus:ring-[#D4AF6A]/20 rounded-xl h-12 px-4 transition-colors";

  return (
    <section id="contact" className="bg-[#1E2530] py-28 md:py-40">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-tight mb-3">
              Let&apos;s talk about <br />
              <span className="text-[#D4AF6A]">your property.</span>
            </h2>
            <p className="text-[#F0EDE8]/55 mb-10 leading-relaxed">
              Tell us a little about yourself and your property and we&apos;ll
              reach out within one business day to schedule a free assessment.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#14181F] border border-[#D4AF6A]/30 rounded-2xl p-10 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#D4AF6A] mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-[#F0EDE8] mb-2">
                  We&apos;ll be in touch soon.
                </h3>
                <p className="text-[#F0EDE8]/55 text-sm">
                  Thanks for reaching out! Expect a call or email from our team
                  within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-[#F0EDE8]/70 text-sm"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="James"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-[#F0EDE8]/70 text-sm"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Walker"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#F0EDE8]/70 text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="james@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#F0EDE8]/70 text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(970) 555-0100"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="propertyAddress"
                    className="text-[#F0EDE8]/70 text-sm"
                  >
                    Property Address
                  </Label>
                  <Input
                    id="propertyAddress"
                    name="propertyAddress"
                    value={form.propertyAddress}
                    onChange={handleChange}
                    placeholder="123 Mountain View Dr, Steamboat Springs, CO"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#F0EDE8]/70 text-sm"
                  >
                    Tell us about your property
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Number of bedrooms, current rental status, goals..."
                    className="bg-[#14181F]/60 border-[#D4AF6A]/20 text-[#F0EDE8] placeholder:text-[#F0EDE8]/30 focus:border-[#D4AF6A]/60 focus:ring-[#D4AF6A]/20 rounded-xl px-4 py-3 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D4AF6A] hover:bg-[#E4C882] text-[#14181F] font-semibold py-6 text-base rounded-xl shadow-lg shadow-[#D4AF6A]/20 hover:shadow-[#D4AF6A]/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#14181F]/30 border-t-[#14181F] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-24"
          >
            {/* Why choose us */}
            <div className="bg-[#14181F] border border-[#D4AF6A]/15 rounded-2xl p-8 mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#F0EDE8] mb-6">
                Why Summit BnB?
              </h3>
              <ul className="space-y-4">
                {[
                  "No upfront costs — we earn when you earn",
                  "Average 34% revenue increase vs. self-managing",
                  "Dedicated local team with deep Colorado market knowledge",
                  "Full-service: listing, pricing, guests, cleaning, reporting",
                  "Transparent monthly statements, zero hidden fees",
                ].map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.5 + i * 0.09,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A] mt-2 shrink-0" />
                    <span className="text-[#F0EDE8]/65 text-sm leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="bg-[#14181F] border border-[#D4AF6A]/15 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Mountain className="w-4 h-4 text-[#D4AF6A]" />
                <span className="font-serif font-bold text-[#F0EDE8]">
                  Summit BnB
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    el: "a" as const,
                    href: "tel:+17208358894",
                    icon: Phone,
                    label: "(720) 835-8894",
                    hover: true,
                  },
                  {
                    el: "a" as const,
                    href: "mailto:hello@summitbnb.co",
                    icon: Mail,
                    label: "hello@summitbnb.co",
                    hover: true,
                  },
                  {
                    el: "div" as const,
                    href: undefined,
                    icon: MapPin,
                    label: "Denver, Colorado",
                    hover: false,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const Tag = motion[item.el];
                  return (
                    <Tag
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      initial={{ opacity: 0, x: 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.6 + i * 0.1,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex items-center gap-3 text-[#F0EDE8]/60 text-sm${item.hover ? " hover:text-[#D4AF6A] transition-colors" : ""}`}
                    >
                      <Icon className="w-4 h-4 text-[#D4AF6A] shrink-0" />
                      <span>{item.label}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
