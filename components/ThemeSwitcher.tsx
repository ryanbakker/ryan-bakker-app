"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLeft = theme === "dark" ? "0%" : "50%"; // Adjust the values as needed

  return (
    <button
      className="w-10 h-[0.9rem] p-1 rounded-full bg-gray-600 right-6 top-6 absolute md:right-16 transition-all duration-300 ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className="absolute top-[-0.3rem] left-0.5 h-6 w-6 rounded-full bg-yellow-50 dark:bg-violet-100 transition-all duration-300 flex justify-center items-center"
        style={{ left: toggleLeft }}
      >
        {theme === "light" ? (
          // Render the sun icon to the left
          <BsFillSunFill className="text-yellow-600 text-sm absolute" />
        ) : (
          // Render the moon icon to the right
          <BsFillMoonStarsFill className="text-violet-900 text-sm absolute" />
        )}
      </div>
    </button>
  );
};
