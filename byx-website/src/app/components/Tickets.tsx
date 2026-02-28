const tiers = [
  {
    name: "General Admission",
    price: "TBA",
    description: "Full festival access on Slayter Hill. All three performances, lawn access, and food vendor area.",
    perks: [
      "Access to all performances",
      "Lawn standing area",
      "Food & vendor access",
      "Event wristband",
    ],
    cta: "Get GA Tickets",
    highlighted: false,
  },
  {
    name: "VIP Experience",
    price: "TBA",
    description: "The ultimate Island Party experience — elevated viewing, exclusive access, and premium perks.",
    perks: [
      "Reserved elevated viewing section",
      "VIP entrance & wristband",
      "Exclusive VIP lounge access",
      "Complimentary refreshments",
      "Priority merch access",
    ],
    cta: "Get VIP Tickets",
    highlighted: true,
  },
  {
    name: "Group Bundle",
    price: "TBA",
    description: "Coming with your crew? Group pricing available for 10+ tickets. Contact us for details.",
    perks: [
      "Discounted group rate",
      "General Admission access",
      "Designated group meet-up area",
      "Group coordinator support",
    ],
    cta: "Inquire About Groups",
    highlighted: false,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1403]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">Join Us</p>
          <h2
            className="text-6xl sm:text-7xl lg:text-8xl text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            Get Your Tickets
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-[#cfb358]" />
          <p className="mt-6 text-[#f5f0e8]/60 max-w-lg mx-auto text-sm sm:text-base">
            Ticket pricing and on-sale dates will be announced soon. Follow our Instagram to be
            first in line when tickets drop.
          </p>
        </div>

        {/* Urgency banner */}
        <div className="mb-10 text-center">
          <span className="inline-block px-6 py-2.5 bg-[#cfb358]/10 border border-[#cfb358]/40 text-[#cfb358] text-sm uppercase tracking-widest rounded-full">
            Tickets on Sale Soon — Follow @PurdueBYX for Updates
          </span>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-lg p-8 flex flex-col transition-transform hover:-translate-y-1 duration-300 ${
                tier.highlighted
                  ? "bg-[#cfb358] text-[#1a1403] shadow-2xl shadow-[#cfb358]/20 scale-[1.02] ring-2 ring-[#cfb358]"
                  : "bg-[#0d0a01] border border-[#cfb358]/20 text-[#f5f0e8]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#1a1403] text-[#cfb358] text-xs font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3
                className={`text-3xl mb-1 ${tier.highlighted ? "text-[#1a1403]" : "text-[#f5f0e8]"}`}
                style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
              >
                {tier.name}
              </h3>

              <p
                className={`text-5xl mb-4 ${tier.highlighted ? "text-[#1a1403]" : "text-[#cfb358]"}`}
                style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
              >
                {tier.price}
              </p>

              <p className={`text-sm mb-6 leading-relaxed ${tier.highlighted ? "text-[#1a1403]/70" : "text-[#f5f0e8]/60"}`}>
                {tier.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? "text-[#1a1403]" : "text-[#cfb358]"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.highlighted ? "text-[#1a1403]" : "text-[#f5f0e8]/70"}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                aria-disabled="true"
                className={`block text-center py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all ${
                  tier.highlighted
                    ? "bg-[#1a1403] text-[#cfb358] hover:bg-[#0d0a01]"
                    : "bg-[#cfb358]/10 border border-[#cfb358]/40 text-[#cfb358] hover:bg-[#cfb358]/20"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[#f5f0e8]/30 text-xs mt-8 max-w-lg mx-auto">
          All ticket sales benefit our local West Lafayette charity partner. By attending, you
          help us make a real difference in our community.
        </p>
      </div>
    </section>
  );
}
