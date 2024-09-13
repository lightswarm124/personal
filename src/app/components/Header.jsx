// src/app/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-accent1">MyPortfolio</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="#about" className="hover:text-accent2">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-accent2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
