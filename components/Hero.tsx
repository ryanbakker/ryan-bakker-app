"use client";

import Image from "next/image";
import HeroImage from "../public/ryan-bakker-head.webp";
import Title from "./Title";
import Button from "./Button";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="flex flex-col px-8 md:px-16 md:pt-10 pb-12 leading-7">
      <div className="hero_resize flex items-center justify-around">
        <div>
          <Title />
          <h2 className="text-xl uppercase font-light text-gray-300 pt-1.5 tracking-wider inter">
            Working under the hood of websites
          </h2>
          <p className="mobile_intro baseline max-w-3xl mt-10 mb-12 pr-8 poppins">
            Front-end Web Developer skilled in crafting SEO-friendly WordPress
            and Nex.js websites. Self-motivated, detail-oriented problem solver.
          </p>
          <p className="desktop_intro baseline max-w-3xl mt-10 mb-12 pr-8 poppins">
            Front-end Web Developer residing in Auckland, New Zealand. With
            experience designing and developing SEO-friendly websites using
            WordPress and Nex.js 13. Self-learning person, and problem solver,
            with an attention to detail.
          </p>
          <div className="mb-10 flex flex-col md:flex-row gap-6">
            <a href="#showcase">
              <Button title="My Work" style="solid" />
            </a>
            <a href="#contact">
              <Button title="Get In Touch" style="outlined" />
            </a>
          </div>
        </div>
        <div className="marginleft_shift flex-1 flex flex-col justify-center items-center mt-4 md:mt-10">
          <div className="hero_graphic">
            <span className="hero_graphic_small_square"></span>
            <Image
              src={HeroImage}
              alt="Hero Image"
              height={300}
              width={300}
              className="hero_graphic_img"
              loading="eager"
            />
            <span className="hero_graphic_star_one">+</span>
            <span className="hero_graphic_star_two">+</span>
            <span className="hero_graphic_star_three">+</span>
            <span className="hero_graphic_star_four">+</span>
            <span className="hero_graphic_big_square"></span>
          </div>

          <span className="transparent h-20 w-full block"></span>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="scroll_down_btn flex flex-row items-center mt-28 max-w-xs"
      >
        Scroll Down &nbsp;{" "}
        <ArrowDownCircleIcon className="h-4 w-4 text-white hvr-icon" />
      </button>
    </section>
  );
}

export default Hero;
