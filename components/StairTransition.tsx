"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true); // show transition each route change

    const timer = setTimeout(() => {
      setVisible(false); // remove from DOM after animation
    }, 800); // delay(0.4) + duration(0.4)

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="hidden md:block">
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default StairTransition;
