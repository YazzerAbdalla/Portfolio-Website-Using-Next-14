import { lazy, Suspense } from "react";
import Link from "next/link";

import Social from "@/components/Socials";
import { Button } from "@/components/ui/button";

const CoreTechnologies = lazy(() => import("@/components/CoreTechnologies"));

/** Lightweight, CLS-safe fallback with fixed height */
const CoreTechnologiesSkeleton = () => (
  <section className="overflow-hidden" aria-hidden="true">
    <h2 className="text-2xl font-bold mb-8">My Core Technologies</h2>
    <div className="relative w-full min-h-[120px] flex items-center">
      <div className="animate-pulse w-full">
        <div className="flex gap-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 bg-white/10 rounded mb-2" />
              <div className="w-12 h-4 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  // fixed ids to wire aria-labelledby/aria-describedby
  const headingId = "hero-label";
  const descId = "hero-desc";

  return (
    <main>
      <section
        id="hero"
        aria-labelledby={headingId}
        aria-describedby={descId}
        className="h-full"
      >
        <div className="container mx-auto h-full">
          <div className="xl:pl-8 xl:pb-24 flex flex-col gap-16 pb-4">
            <div className="flex flex-col xl:flex-row items-center justify-between">
              <div className="text-center xl:text-left order-2 xl:order-none w-full">
                {/* Main heading (LCP candidate) */}
                <h1
                  id={headingId}
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                >
                  Hello, I&apos;m{" "}
                  <span className="text-accent">Yasser Abdalla</span>
                </h1>

                {/* Location & role */}
                <p className="mt-1 text-sm text-white/70">from Cairo, Egypt</p>
                <p className="text-[32px] mt-2 font-semibold">
                  Software Engineer
                </p>

                {/* Short value prop / description */}
                <p
                  id={descId}
                  className="text-[20px] md:text-[22px] mb-9 xl:mt-6 text-white/90 leading-[1.55] max-w-3xl mx-auto xl:mx-0"
                >
                  <span className="font-semibold block leading-relaxed">
                    Node.js Developer Building High-Performance Web
                    Applications
                  </span>
                  I help businesses and startups bring their ideas to life with
                  fast, modern, and user-friendly web applications built with
                  React.js. I specialize in creating interactive UIs and
                  scalable front-end architecture to solve your most complex
                  challenges.
                </p>

                {/* CTA + socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                    asChild
                    size="lg"
                    className="uppercase flex items-center gap-2 min-h-[56px] px-8 tracking-[2px]"
                  >
                    <Link href="/work" aria-label="See my projects">
                      <span className="font-extrabold">See my projects</span>
                    </Link>
                  </Button>

                  <nav aria-label="Social links" className="mb-8 xl:mb-0">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="text-accent w-10 h-10 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition-colors duration-300"
                    />
                  </nav>
                </div>
              </div>
            </div>

            {/* Tech marquee (lazy) */}
            <Suspense fallback={<CoreTechnologiesSkeleton />}>
              <CoreTechnologies />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
