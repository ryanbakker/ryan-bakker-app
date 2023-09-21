import Link from "next/link";
import { useState } from "react";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import EmailIcon from "../public/at-solid.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement; // Select the HTML element

    if (isOpen) {
      // Add the class to toggle scrolling
      htmlElement.classList.add("disable-scroll");
    } else {
      // Remove the class to enable scrolling
      htmlElement.classList.remove("disable-scroll");
    }

    // Clean up the effect when the component unmounts
    return () => {
      htmlElement.classList.remove("disable-scroll");
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToSectionTop = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center ml-auto">
      <nav
        className={`hidden md:flex md:items-center w-auto ml-auto ${
          isOpen ? "md:flex" : "hidden"
        }`}
      >
        <ul className="flex gap-12">
          <li>
            <a href="/#about">
              <button
                className="nav_link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </a>
          </li>
          <li>
            <a href="/#showcase">
              <button
                className="nav_link"
                onClick={() => scrollToSection("showcase")}
              >
                Work
              </button>
            </a>
          </li>
          <li>
            <a href="/#contact">
              <button
                className="nav_link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </a>
          </li>
          <li>
            <Link
              href="/ryan-bakker-resume.pdf"
              className="nav_link"
              target="_blank"
              passHref
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={`hamburger_icon md:hidden flex items-center ml-auto ${
          isOpen ? "hamburger_active" : ""
        }`}
        onClick={handleClick}
        aria-label="hamburger button"
      >
        <span className="hamburger_line hamburger_icon_line_top"></span>
        <span className="hamburger_line hamburger_icon_line_middle"></span>
        <span className="hamburger_line hamburger_icon_line_bottom"></span>
      </button>

      <div
        className={`menu_container_box relative ${
          isOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <div
          className={`menu_container_backdrop ${
            isOpen ? "backdrop-open" : "backdrop-closed"
          }`}
        ></div>
        <nav
          className={`menu_container md:hidden w-full pt-9 ${
            isOpen ? "menu-open" : "menu-closed"
          }`}
        >
          <ul className="flex gap-8 items-center">
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => {
                  scrollToSectionTop("about");
                  closeMobileMenu(); // Close the mobile menu after clicking a link
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => {
                  scrollToSectionTop("showcase");
                  closeMobileMenu(); // Close the mobile menu after clicking a link
                }}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => {
                  scrollToSection("contact");
                  closeMobileMenu(); // Close the mobile menu after clicking a link
                }}
              >
                Contact
              </button>
            </li>
            <li>
              <Link
                href="/ryan-bakker-resume.pdf"
                className="nav_link mobile_link_lg"
                target="_blank"
                passHref
              >
                Resume
              </Link>
            </li>
          </ul>

          <div className="nav_social">
            <Link
              href="https://www.linkedin.com/in/ryan-bakker/"
              target="_blank"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin"
                className="social_icon"
              />
            </Link>
            <Link href="https://github.com/ryanbakkerNZ" target="_blank">
              <Image src={GithubLogo} alt="GitHub" className="social_icon" />
            </Link>
            <Link href="rmbakker2002@gmail.com" target="_blank">
              <Image src={EmailIcon} alt="Email" className="social_icon" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
