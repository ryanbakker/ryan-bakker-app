"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const ScrollDown = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="scroll_down_btn flex flex-row items-center mt-20 max-w-xs text-[#1d1d1d] dark:text-white"
    >
      Scroll Down &nbsp;{" "}
      <ArrowDownCircleIcon className="h-4 w-4 hvr-icon text-[#1d1d1d] dark:text-white" />
    </button>
  );
};

export default ScrollDown;
