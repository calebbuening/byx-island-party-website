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

        {/* Single ticket card */}
        <div className="max-w-md mx-auto">
          <div className="rounded-lg p-8 flex flex-col bg-[#0d0a01] border border-[#cfb358]/20 text-[#f5f0e8]">
            <h3
              className="text-3xl mb-1 text-[#f5f0e8]"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              General Admission
            </h3>

            <p
              className="text-5xl mb-4 text-[#cfb358]"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              TBA
            </p>

            <p className="text-sm mb-6 leading-relaxed text-[#f5f0e8]/60">
              Full festival access on Slayter Hill. All performances, lawn access, and food vendor area.
            </p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                "Access to all performances",
                "Lawn standing area",
                "Food & vendor access",
                "Event wristband",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-[#cfb358]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#f5f0e8]/70">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              aria-disabled="true"
              className="block text-center py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all bg-[#cfb358]/10 border border-[#cfb358]/40 text-[#cfb358] hover:bg-[#cfb358]/20"
            >
              Get Tickets
            </a>
          </div>
        </div>

        <p className="text-center text-[#f5f0e8]/30 text-xs mt-8 max-w-lg mx-auto">
          All ticket sales benefit our local West Lafayette charity partner. By attending, you
          help us make a real difference in our community.
        </p>
      </div>
    </section>
  );
}
