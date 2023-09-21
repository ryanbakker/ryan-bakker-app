import Link from "next/link";

function Footer() {
  return (
    <footer className="section_padding flex flex-col md:flex-row">
      <Link href="/">
        <h2 className="barlow uppercase font-semibold text-2xl logo">
          Ryan Bakker
        </h2>
      </Link>

      <ul className="mt-5 md:mt-0 md:ml-auto flex flex-col md:flex-row gap-8">
        <li>
          <Link href="/" className="nav_link">
            Fiverr
          </Link>
        </li>
        <li>
          <Link href="/#about" className="nav_link">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="nav_link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="nav_link">
            Contact
          </Link>
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
    </footer>
  );
}

export default Footer;
