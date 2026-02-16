/** @format */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-left">
          Pastel Pixels Studio
        </Link>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-center ${isOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>

      <div
        className={`nav-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
