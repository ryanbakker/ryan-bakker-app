import Link from "next/link";

function Footer() {
  return (
    <footer className="section_padding flex flex-col md:flex-row bg-transparent dark:bg-[#1d1d1d]">
      <Link href="/">
        <h2 className="barlow uppercase font-semibold text-2xl logo text-[#1d1d1d] dark:text-white">
          Ryan Bakker
        </h2>
      </Link>

      <ul className="mt-5 md:mt-0 md:ml-auto flex flex-col md:flex-row gap-8">
        <li>
          <Link href="/" className="nav_link text-[#1d1d1d] dark:text-white">
            Fiverr
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className="nav_link text-[#1d1d1d] dark:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="nav_link text-[#1d1d1d] dark:text-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="nav_link text-[#1d1d1d] dark:text-white"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/ryan-bakker-resume.pdf"
            className="nav_link text-[#1d1d1d] dark:text-white"
            target="_blank"
            rel="nofollow"
          >
            Resume
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
