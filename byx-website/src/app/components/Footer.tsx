import Image from "next/image";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/purduebyxislandparty",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const links = [
  { label: "Lineup", href: "#lineup" },
  { label: "About", href: "#about" },
  { label: "Tickets", href: "#tickets" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0a01] border-t border-[#cfb358]/15 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.svg"
              alt="Island Party"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
            />
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed max-w-xs">
              A Purdue BYX tradition. Live music at Slayter Hill, all for a greater purpose.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="text-[#f5f0e8]/40 hover:text-[#cfb358] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[#cfb358] text-lg mb-4 tracking-widest"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#f5f0e8]/50 hover:text-[#cfb358] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#cfb358] text-lg mb-4 tracking-widest"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[#f5f0e8]/50">
              <li>
                Email:{" "}
                <a href="mailto:purduebyx.islandparty@gmail.com" className="hover:text-[#cfb358] transition-colors">
                  purduebyx.islandparty@gmail.com
                </a>
              </li>
              <li className="pt-1 text-[#f5f0e8]/30">
                Beta Upsilon Chi · Purdue University
                <br />
                West Lafayette, Indiana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#cfb358]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5f0e8]/30">
          <p>© 2026 Beta Upsilon Chi · Purdue University · Island Party. All rights reserved.</p>
          <p
            className="text-[#cfb358]/50 text-sm tracking-widest"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            No Man Is An Island
          </p>
        </div>
      </div>
    </footer>
  );
}
