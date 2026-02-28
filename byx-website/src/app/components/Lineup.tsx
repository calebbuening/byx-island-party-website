const bands = [
  {
    name: "HEADLINER TBA",
    role: "Headliner",
    genre: "Live Music",
    bio: "The biggest act of the night — headliner announcement coming soon. Stay tuned to our Instagram for the reveal.",
    image: null,
    large: true,
  },
  {
    name: "ARTIST TBA",
    role: "Supporting Act",
    genre: "Live Music",
    bio: "Our second act brings serious energy to Slayter Hill. Announcement dropping soon.",
    image: null,
    large: false,
  },
  {
    name: "ARTIST TBA",
    role: "Opening Act",
    genre: "Live Music",
    bio: "Kicking off the night right — opener announcement coming soon.",
    image: null,
    large: false,
  },
];

function BandCard({ band }: { band: (typeof bands)[0] }) {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg border border-[#cfb358]/20 bg-[#1a1403] hover:border-[#cfb358]/60 transition-all duration-300 ${
        band.large ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`relative bg-gradient-to-br from-[#2a2003] to-[#0d0a01] flex items-center justify-center overflow-hidden ${
          band.large ? "h-72 sm:h-80 lg:h-96" : "h-56 sm:h-64"
        }`}
      >
        {/* Palm tree silhouette decorative */}
        <svg
          className="w-24 h-24 text-[#cfb358]/15 group-hover:text-[#cfb358]/25 transition-colors duration-300"
          viewBox="0 0 100 120"
          fill="currentColor"
        >
          <path d="M50 110 L50 60 M50 60 C50 60 30 55 20 40 C30 42 40 50 50 60 M50 60 C50 60 70 55 80 40 C70 42 60 50 50 60 M50 60 C50 60 35 45 35 25 C40 35 45 48 50 60 M50 60 C50 60 65 45 65 25 C60 35 55 48 50 60 M50 60 C50 60 50 40 40 25 C45 38 48 50 50 60" />
          <rect x="47" y="60" width="6" height="50" rx="3" />
        </svg>

        {band.large && (
          <span
            className="absolute top-4 left-4 px-3 py-1 bg-[#cfb358] text-[#1a1403] text-xs font-bold uppercase tracking-widest rounded"
          >
            Headliner
          </span>
        )}
      </div>

      {/* Text */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className={`text-[#f5f0e8] leading-tight ${band.large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            {band.name}
          </h3>
          <span className="shrink-0 px-2 py-1 border border-[#cfb358]/40 text-[#cfb358] text-xs uppercase tracking-wider rounded">
            {band.genre}
          </span>
        </div>
        <p className="text-[#cfb358] text-xs uppercase tracking-widest mb-3">{band.role}</p>
        <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">{band.bio}</p>
      </div>
    </div>
  );
}

export default function Lineup() {
  return (
    <section id="lineup" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1403]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">The Artists</p>
          <h2
            className="text-6xl sm:text-7xl lg:text-8xl text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            2026 Lineup
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-[#cfb358]" />
          <p className="mt-6 text-[#f5f0e8]/60 max-w-xl mx-auto text-sm sm:text-base">
            Three incredible acts. One unforgettable night on Slayter Hill. Artist announcements
            dropping soon — follow us on Instagram to be the first to know.
          </p>
        </div>

        {/* Band grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bands.map((band) => (
            <BandCard key={band.name} band={band} />
          ))}
        </div>

        {/* More info note */}
        <p className="text-center text-[#f5f0e8]/40 text-sm mt-10">
          Full schedule &amp; set times announced closer to the event.
        </p>
      </div>
    </section>
  );
}
