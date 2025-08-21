"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button aria-label="Prev project" className={btnStyles}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button
        aria-label="Next project"
        onClick={() => swiper.slideNext()}
        className={btnStyles}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
