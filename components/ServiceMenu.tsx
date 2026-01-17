"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";

type Service = {
  id: string;
  num: string;
  title: string;
  short: string;
  bullets: string[];
  outcome?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const ServiceMenu = () => {
  const services: Service[] = useMemo(
    () => [
      {
        id: "fullstack",
        num: "01",
        title: "Full-Stack Web Apps",
        short: "Next.js apps with scalable backend architecture.",
        bullets: [
          "Next.js 14 App Router, SSR/SSG, routing patterns",
          "NestJS APIs, modules, validation, best practices",
          "Clean UI systems with Tailwind + shadcn/ui",
        ],
        outcome: "Production-ready delivery with clean architecture.",
        ctaLabel: "See work",
        ctaHref: "/work",
      },
      {
        id: "ui",
        num: "02",
        title: "UI Systems & Design Integration",
        short: "Consistent components that scale with your product.",
        bullets: [
          "Reusable components + variants (shadcn/ui patterns)",
          "Design tokens, spacing, typography consistency",
          "Accessible UI and responsive layouts",
        ],
        outcome: "A UI system you can build on fast.",
        ctaLabel: "Book a call",
        ctaHref: "/contact",
      },
      {
        id: "api",
        num: "03",
        title: "Secure APIs",
        short: "Auth, validation, and secure data flow.",
        bullets: [
          "JWT/Auth strategies, guards, roles",
          "DTO validation, sanitization, error handling",
          "Rate limiting & security-minded patterns",
        ],
        outcome: "Secure APIs that won’t break in production.",
        ctaLabel: "Contact",
        ctaHref: "/contact",
      },
      {
        id: "perf",
        num: "04",
        title: "Performance Optimization",
        short: "Speed + Core Web Vitals improvements.",
        bullets: [
          "Bundle + rendering optimizations",
          "Image optimization, caching strategies",
          "Real-world auditing & profiling",
        ],
        outcome: "Faster load times and smoother UX.",
        ctaLabel: "View details",
        ctaHref: "/contact",
      },
    ],
    []
  );

  const [active, setActive] = useState<Service>(services[0]);

  return (
    <section aria-label="Services" className="w-full">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Service Menu
        </h2>
        <span className="text-sm text-white/60">
          Select a service to view details
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left: menu */}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {/* terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <p className="text-xs text-white/60">services.sh</p>
          </div>

          <div className="p-3">
            {services.map((s) => {
              const isActive = active.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={[
                    "w-full text-left rounded-xl px-4 py-4 mb-2 transition",
                    "border border-transparent",
                    isActive
                      ? "bg-accent/10 border-accent/30"
                      : "hover:bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs text-white/50 mb-1">
                        {isActive ? (
                          <span className="text-accent">{"> selected"}</span>
                        ) : (
                          <span>{"> service"}</span>
                        )}{" "}
                        <span className="ml-2 text-white/40">{s.num}</span>
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-white truncate">
                        {s.title}
                      </h3>
                      <p className="text-sm text-white/70 mt-1">{s.short}</p>
                    </div>
                    <span
                      className={[
                        "text-xs px-2 py-1 rounded-full border",
                        isActive
                          ? "border-accent/40 text-accent"
                          : "border-white/10 text-white/50",
                      ].join(" ")}
                    >
                      {s.num}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: details */}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {/* header */}
          <div className="px-5 py-4 border-b border-white/10 bg-black/20">
            <p className="text-xs text-white/60 mb-1">details</p>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                <span className="text-accent">{active.num}.</span>{" "}
                {active.title}
              </h3>
              {active.ctaHref && active.ctaLabel && (
                <Button asChild className="min-h-[40px] px-4 text-wrap">
                  <Link href={active.ctaHref} aria-label={active.ctaLabel}>
                    {active.ctaLabel}
                    <BsArrowUpRight className="ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="p-5">
            <p className="text-white/80 text-base leading-relaxed">
              {active.short}
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-white/60 mb-2">{"> scope"}</p>
              <ul className="space-y-2">
                {active.bullets.map((b, i) => (
                  <li key={i} className="text-sm md:text-base text-white/80">
                    <span className="text-accent mr-2">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {active.outcome && (
              <div className="mt-4 flex items-start gap-3">
                <span className="text-accent font-bold">{"> outcome"}</span>
                <p className="text-white/70">{active.outcome}</p>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="uppercase min-h-[52px] px-6 tracking-[2px]"
              >
                <Link href="/contact" aria-label="Book a call">
                  <span className="font-extrabold">Book a call</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="uppercase min-h-[52px] px-6 tracking-[2px]"
              >
                <Link href="/work" aria-label="View work">
                  <span className="font-extrabold">View work</span>
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Tip: this menu is keyboard-friendly and keeps your UI clean on
              mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMenu;
