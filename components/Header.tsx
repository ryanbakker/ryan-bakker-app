import Link from "next/link";

function Header() {
  return (
    <header className="flex mb-8">
      <h1>Ryan Bakker</h1>
      <nav className="ml-auto">
        <ul className="flex gap-12">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="/projects">Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
