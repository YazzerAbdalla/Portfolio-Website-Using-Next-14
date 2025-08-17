import { lazy, Suspense } from "react";

// components
import Social from "@/components/Socials";
import Link from "next/link";
const CoreTechnologies = lazy(() => import("@/components/CoreTechnologies"));
import { Button } from "@/components/ui/button";

// Better loading fallback with consistent height
const CoreTechnologiesLoader = () => (
  <section className="overflow-hidden">
    <h2 className="text-2xl font-bold mb-8">My Core Technologies</h2>
    <div className="relative w-full min-h-[120px] flex items-center">
      <div className="animate-pulse">
        <div className="flex gap-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center min-w-[80px]">
              <div className="w-16 h-16 bg-gray-300 rounded mb-2"></div>
              <div className="w-12 h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="xl:pl-8 xl:pb-24 flex flex-col gap-10 pb-4">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1>
                Hello, I&apos;m{" "}
                <span className="text-accent">Yasser Abdalla</span>{" "}
                <span className="text-[18px]">from Cairo, Egypt</span>
              </h1>
              <span className="text-[32px] mt-2 block">Software Engineer</span>
              <p className="text-[22px] mb-9 xl:mt-6 text-white/90">
                <span className="font-semibold block leading-relaxed">
                  React.js Developer Building High-Performance Web Applications{" "}
                </span>
                I help businesses and startups bring their ideas to life with
                fast, modern, and user-friendly web applications built with
                React.js. I specialize in creating interactive UIs and scalable
                front-end architecture to solve your most complex challenges.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-10">
                <Link href="/work" passHref>
                  <Button
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span className="font-extrabold">SEE MY PROJECTS</span>
                  </Button>
                </Link>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="text-accent w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <Suspense fallback={<CoreTechnologiesLoader />}>
            <CoreTechnologies />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
