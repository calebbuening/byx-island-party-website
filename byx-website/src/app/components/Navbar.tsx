"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Lineup", href: "#lineup" },
  { label: "About", href: "#about" },
  { label: "Tickets", href: "#tickets" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1403]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + divider + location */}
          <a href="#top" className="flex items-center gap-4 group">
            <Image
              src="/images/logo-transparent.png"
              alt="Island Party"
              width={120}
              height={48}
              className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
            <div className="w-px h-10 bg-[#cfb358]/60" />
            <div className="flex flex-col leading-tight">
              <span className="text-[#f5f0e8] text-sm font-semibold tracking-wide">Slayter Hill · West Lafayette, IN</span>
              <span className="text-[#cfb358] text-sm font-semibold tracking-wide">Date TBA</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f5f0e8] hover:text-[#cfb358] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tickets"
              className="ml-2 px-5 py-2 bg-[#cfb358] text-[#1a1403] font-bold rounded text-sm uppercase tracking-wide hover:bg-[#e8c96a] transition-colors"
            >
              Get Tickets
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#f5f0e8] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#cfb358]/20 mt-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-[#f5f0e8] hover:text-[#cfb358] transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center px-5 py-2.5 bg-[#cfb358] text-[#1a1403] font-bold rounded text-sm uppercase tracking-wide hover:bg-[#e8c96a] transition-colors"
            >
              Get Tickets
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
