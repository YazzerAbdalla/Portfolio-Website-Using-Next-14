"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setShowChildren(false);
    const timer = setTimeout(() => setShowChildren(true), 1000); // delay نفس وقت overlay
    return () => clearTimeout(timer);
  }, [pathname]);

  // To break transition on phones
  if (isMobile) {
    return <div key={pathname}>{children}</div>;
  }
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary  top-0 pointer-events-none"
        ></motion.div>
        {showChildren && children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
