import Link from "next/link";
import { useState } from "react";
import LinkedinLogo from "../public/linkedin.svg";
import GithubLogo from "../public/github.svg";
import EmailIcon from "../public/at-solid.svg";
import Image from "next/image";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
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
            <button
              className="nav_link"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="nav_link"
              onClick={() => scrollToSection("showcase")}
            >
              Work
            </button>
          </li>
          <li>
            <button
              className="nav_link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <Link
              href="/ryan-bakker-resume-17-08-23.pdf"
              className="nav_link"
              target="_blank"
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
        onClick={() => setIsOpen(!isOpen)}
        aria-label="hamburger button"
      >
        <span className="hamburger_line hamburger_icon_line_top"></span>
        <span className="hamburger_line hamburger_icon_line_middle"></span>
        <span className="hamburger_line hamburger_icon_line_bottom"></span>
      </button>

      <div
        className={`menu_container_box relative ${
          isOpen ? "menu-open" : "hidden"
        }`}
      >
        <div className="menu_container_backdrop"></div>
        <nav
          className={`menu_container md:hidden w-full pt-9 ${
            isOpen ? "menu-open" : "hidden"
          }`}
        >
          <ul className="flex gap-12 items-center">
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => scrollToSection("showcase")}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="nav_link mobile_link_lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
            <li>
              <Link
                href="/ryan-bakker-resume-17-08-23.pdf"
                className="nav_link mobile_link_lg"
                target="_blank"
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
