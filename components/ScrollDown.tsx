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
      className="scroll_down_btn flex flex-row items-center mt-28 max-w-xs"
    >
      Scroll Down &nbsp;{" "}
      <ArrowDownCircleIcon className="h-4 w-4 text-white hvr-icon" />
    </button>
  );
};

export default ScrollDown;
