"use client";

import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <header className="flex mb-8 px-8 md:px-16 pt-14 pb-6">
      <Link href="/">
        <h2 className="barlow uppercase font-semibold text-2xl logo text-[#1d1d1d] dark:text-white">
          Ryan Bakker
        </h2>
      </Link>

      <HamburgerMenu />
    </header>
  );
}

export default Header;
