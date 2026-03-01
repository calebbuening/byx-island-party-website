"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Lineup", href: "#lineup" },
  { label: "About", href: "#about" },
  { label: "Tickets", href: "#tickets" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1403] shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-36">
          {/* Hamburger — always visible left */}
          <button
            className="text-[#f5f0e8] p-2 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

          {/* Centered lockup: logo + divider + location/tagline */}
          <a href="#top" className="absolute left-1/2 -translate-x-1/2 group flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-alt.png"
              alt="Island Party logo"
              width={160}
              height={60}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
            <span className="w-px h-8 bg-[#cfb358]/50 shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-[#f5f0e8] text-xs sm:text-sm uppercase tracking-widest">
                <span className="whitespace-nowrap">Slayter Hill<span className="hidden sm:inline"> ·</span></span>{" "}
                <span className="whitespace-nowrap">West Lafayette, IN</span>
              </span>
              <span
                className="text-[#cfb358] text-sm sm:text-base tracking-wide whitespace-nowrap"
                style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
              >
                No Man Is An Island
              </span>
            </div>
          </a>

          {/* Get Tickets — hidden on mobile to avoid overlap with centered lockup */}
          <a
            href="#tickets"
            className="hidden sm:block shrink-0 px-6 py-2.5 bg-[#cfb358] text-[#1a1403] font-bold rounded text-sm uppercase tracking-wide hover:bg-[#e8c96a] transition-colors"
          >
            Get Tickets
          </a>
        </div>

        {/* Dropdown menu — all screen sizes */}
        {menuOpen && (
          <div className="pb-4 border-t border-[#cfb358]/20 mt-1">
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
