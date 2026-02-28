const tiers = [
  {
    level: "Gold",
    color: "border-[#cfb358] bg-[#cfb358]/5",
    labelColor: "text-[#cfb358]",
    slots: 3,
  },
  {
    level: "Silver",
    color: "border-[#a8a8a8] bg-[#a8a8a8]/5",
    labelColor: "text-[#a8a8a8]",
    slots: 4,
  },
  {
    level: "Bronze",
    color: "border-[#b87333] bg-[#b87333]/5",
    labelColor: "text-[#b87333]",
    slots: 6,
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0a01]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">Partners</p>
          <h2
            className="text-6xl sm:text-7xl lg:text-8xl text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            Our Sponsors
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-[#cfb358]" />
          <p className="mt-6 text-[#f5f0e8]/60 max-w-lg mx-auto text-sm sm:text-base">
            Island Party 2026 is made possible by the generous support of our community partners.
            Interested in sponsoring? We&apos;d love to have you.
          </p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-14 mb-20">
          {tiers.map((tier) => (
            <div key={tier.level}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-px flex-1 ${tier.level === "Gold" ? "bg-[#cfb358]/30" : tier.level === "Silver" ? "bg-[#a8a8a8]/30" : "bg-[#b87333]/30"}`} />
                <span
                  className={`text-2xl tracking-widest ${tier.labelColor}`}
                  style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
                >
                  {tier.level} Sponsors
                </span>
                <div className={`h-px flex-1 ${tier.level === "Gold" ? "bg-[#cfb358]/30" : tier.level === "Silver" ? "bg-[#a8a8a8]/30" : "bg-[#b87333]/30"}`} />
              </div>

              <div className={`grid gap-4 ${tier.level === "Gold" ? "grid-cols-2 sm:grid-cols-3" : tier.level === "Silver" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3 sm:grid-cols-6"}`}>
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center rounded border ${tier.color} ${
                      tier.level === "Gold" ? "h-24 sm:h-28" : tier.level === "Silver" ? "h-20 sm:h-24" : "h-16 sm:h-20"
                    }`}
                  >
                    <span className={`text-xs uppercase tracking-widest ${tier.labelColor} opacity-40`}>
                      Sponsor
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="relative rounded-xl border border-[#cfb358]/30 bg-gradient-to-br from-[#cfb358]/5 to-transparent p-10 lg:p-16 text-center overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#cfb358]/30 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#cfb358]/30 rounded-bl-xl pointer-events-none" />

          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">Partnership Opportunities</p>
          <h3
            className="text-5xl sm:text-6xl text-[#f5f0e8] mb-6"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            Become a Sponsor
          </h3>
          <p className="text-[#f5f0e8]/60 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Sponsoring Island Party puts your brand in front of thousands of Purdue students and
            community members — while directly funding a meaningful local cause. Our sponsor packages
            offer tiered visibility, on-site presence, and digital exposure. Download our sponsor
            deck to learn more.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/sponsor-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#cfb358] text-[#1a1403] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#e8c96a] transition-all hover:scale-105 shadow-lg"
            >
              Download Sponsor Deck
            </a>
            <a
              href="mailto:sponsor@purduebyx.com"
              className="px-10 py-4 border-2 border-[#cfb358] text-[#cfb358] font-bold text-sm uppercase tracking-wider rounded hover:bg-[#cfb358]/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
