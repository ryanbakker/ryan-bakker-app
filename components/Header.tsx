"use client";

import Link from "next/link";

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header className="flex mb-8 px-16 py-6">
      <Link href="/">
        <h2 className="barlow uppercase font-semibold text-2xl logo">
          Ryan Bakker
        </h2>
      </Link>
      <nav className="ml-auto">
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
            <Link href="/" className="nav_link" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
