"use client";

import { useEffect, useState } from "react";
import { PiCaretUpBold } from "react-icons/pi";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        w-[48px] h-[48px]
        flex items-center justify-center
        rounded-full
        bg-accent text-primary
        shadow-lg
        transition-all duration-300
        hover:bg-accent-hover hover:-translate-y-1
        active:scale-95
      "
    >
      <PiCaretUpBold className="text-xl" />
    </button>
  );
};

export default ScrollToTopBtn;
