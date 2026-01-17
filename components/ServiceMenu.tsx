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
    [],
  );

  const [active, setActive] = useState<Service>(services[0]);

  return (
    <section
      aria-label="Services"
      className="w-full mt-[20px]"
      style={
        {
          // custom values (no tailwind theme colors)
          // you can remove these if you prefer pure classes only
          // but these are NOT from tailwind config
        }
      }
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[8px] sm:gap-[16px] mb-[18px] sm:mb-[22px]">
        <h2 className="text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] leading-[1.1]">
          Service Menu
        </h2>
        <span className="text-[12px] sm:text-[14px] text-white/60">
          Select a service to view details
        </span>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[20px]">
        {/* Left: menu */}
        <div
          className="rounded-[18px] overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {/* terminal header */}
          <div
            className="flex items-center justify-between px-[16px] py-[12px]"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(0,0,0,0.20)",
            }}
          >
            <div className="flex items-center gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-full bg-white/20" />
              <span className="w-[10px] h-[10px] rounded-full bg-white/20" />
              <span className="w-[10px] h-[10px] rounded-full bg-white/20" />
            </div>
            <p className="text-[12px] text-white/60">services.sh</p>
          </div>

          <div className="p-[12px] sm:p-[14px]">
            <div className="flex flex-col gap-[8px]">
              {services.map((s) => {
                const isActive = active.id === s.id;

                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s)}
                    className="w-full text-left rounded-[14px] px-[16px] py-[14px] transition"
                    style={{
                      border: isActive
                        ? "1px solid rgba(0,255,153,0.30)"
                        : "1px solid rgba(255,255,255,0.00)",
                      background: isActive
                        ? "rgba(0,255,153,0.10)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (isActive) return;
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      if (isActive) return;
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }}
                  >
                    <div className="flex items-start justify-between gap-[14px]">
                      <div className="min-w-0">
                        <p className="text-[12px] text-white/50 mb-[6px]">
                          {isActive ? (
                            <span style={{ color: "#00ff99" }}>
                              {"> selected"}
                            </span>
                          ) : (
                            <span>{"> service"}</span>
                          )}{" "}
                          <span className="ml-[8px] text-white/40">
                            {s.num}
                          </span>
                        </p>

                        <h3 className="text-[16px] sm:text-[18px] font-bold text-white leading-[1.25]">
                          {s.title}
                        </h3>

                        <p className="text-[13px] sm:text-[14px] text-white/70 mt-[6px] leading-[1.45]">
                          {s.short}
                        </p>
                      </div>

                      <span
                        className="shrink-0 text-[12px] px-[8px] py-[4px] rounded-full"
                        style={{
                          border: isActive
                            ? "1px solid rgba(0,255,153,0.40)"
                            : "1px solid rgba(255,255,255,0.10)",
                          color: isActive
                            ? "#00ff99"
                            : "rgba(255,255,255,0.50)",
                        }}
                      >
                        {s.num}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: details */}
        <div
          className="rounded-[18px] overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {/* header */}
          <div
            className="px-[16px] py-[12px]"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(0,0,0,0.20)",
            }}
          >
            <p className="text-[12px] text-white/60 mb-[6px]">details</p>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[10px]">
              <h3 className="text-[18px] sm:text-[22px] font-extrabold text-white leading-[1.2]">
                <span style={{ color: "#00ff99" }}>{active.num}.</span>{" "}
                {active.title}
              </h3>

              {active.ctaHref && active.ctaLabel && (
                <Button asChild className="min-h-[40px] px-[14px] self-start">
                  <Link href={active.ctaHref} aria-label={active.ctaLabel}>
                    <span className="whitespace-nowrap">{active.ctaLabel}</span>
                    <BsArrowUpRight className="ml-[8px]" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="p-[12px] sm:p-[14px]">
            <p className="text-white/80 text-[14px] sm:text-[16px] leading-[1.6]">
              {active.short}
            </p>

            <div
              className="mt-[16px] rounded-[14px] p-[12px]"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.20)",
              }}
            >
              <p className="text-[12px] text-white/60 mb-[10px]">{"> scope"}</p>
              <ul className="flex flex-col gap-[10px]">
                {active.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-[13px] sm:text-[15px] text-white/80 leading-[1.5]"
                  >
                    <span style={{ color: "#00ff99", marginRight: 6 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {active.outcome && (
              <div className="mt-[14px] flex items-start gap-[10px]">
                <span style={{ color: "#00ff99", fontWeight: 700 }}>
                  {"> outcome"}
                </span>
                <p className="text-white/70 text-[13px] sm:text-[14px] leading-[1.5]">
                  {active.outcome}
                </p>
              </div>
            )}

            <div className="mt-[18px] flex flex-col sm:flex-row gap-[10px]">
              <Button
                asChild
                size="lg"
                className="uppercase min-h-[52px] px-[24px] tracking-[2px]"
              >
                <Link href="/contact" aria-label="Book a call">
                  <span className="font-extrabold">Book a call</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="uppercase min-h-[52px] px-[24px] tracking-[2px]"
              >
                <Link href="/work" aria-label="View work">
                  <span className="font-extrabold">View work</span>
                </Link>
              </Button>
            </div>

            <p className="mt-[14px] text-[12px] text-white/50 leading-[1.5]">
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
