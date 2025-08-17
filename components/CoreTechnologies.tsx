"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { client, urlFor } from "@/lib/sanityClient";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TechStackProps {
  name: string;
  logo: any;
}

// Skeleton component for loading state
const TechSkeleton = ({ isMobile }: { isMobile: boolean }) => (
  <div className="animate-pulse">
    {isMobile ? (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded mb-2"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    ) : (
      <div className="flex gap-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded mb-2"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default function CoreTechnologies() {
  const [techStack, setTechStack] = useState<TechStackProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const query = `*[_type == "technology"]`;
    client
      .fetch(query)
      .then((data) => {
        setTechStack(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 700);
      });
  }, []);

  return (
    <section aria-hidden="true" className="overflow-hidden">
      <h2 className="text-2xl font-bold mb-8">My Core Technologies</h2>

      {/* Fixed container with consistent height */}
      <div className="relative w-full min-h-[120px] flex items-center">
        {isLoading ? (
          <TechSkeleton isMobile={isMobile} />
        ) : (
          <>
            {isMobile ? (
              <div className="grid grid-cols-4 gap-6 w-full">
                {techStack.map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={urlFor(tech.logo.asset._ref).url()}
                        alt={tech.name}
                        fill
                        sizes="64px"
                        className="object-contain"
                        priority={i < 4} // Prioritize first 4 images
                      />
                    </div>
                    <p className="text-sm font-medium text-center leading-tight">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex gap-12 min-w-max"
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex flex-col items-center min-w-[80px]"
                  >
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={urlFor(tech.logo.asset._ref).url()}
                        alt={tech.name}
                        fill
                        sizes="64px"
                        className="object-contain"
                        priority={i < 8} // Prioritize first set of images
                      />
                    </div>
                    <p className="text-sm font-medium text-center leading-tight">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
