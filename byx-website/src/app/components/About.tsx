export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0a01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
            <h2
              className="text-6xl sm:text-7xl text-[#f5f0e8] leading-none mb-8"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              No Man Is
              <br />
              <span className="text-[#cfb358]">An Island</span>
            </h2>

            <div className="space-y-5 text-[#f5f0e8]/70 leading-relaxed text-sm sm:text-base">
              <p>
                Island Party is an outdoor music festival at Purdue, hosted by{" "}
                <a href="https://purduebyx.com" target="_blank" rel="noopener noreferrer" className="text-[#cfb358] font-semibold hover:underline">Beta Upsilon Chi (BYX)</a> on
                Slayter Hill. We&apos;re bringing live music, community, and purpose together for
                an unforgettable night under the open sky.
              </p>
              <p>
                This isn&apos;t just a concert — it&apos;s a chance to make a real difference.
                All net proceeds go directly to{" "}
                <a href="https://lumserve.org" target="_blank" rel="noopener noreferrer" className="text-[#cfb358] font-semibold hover:underline">Lafayette Urban Ministry (LUM)</a>,
                serving those in need right here in our community.
              </p>
              <p>
                Great music, a great cause, and a night you won&apos;t forget. Join us on Slayter
                Hill in 2026.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#cfb358]/20">
              {[
                { stat: "3", label: "Live Bands" },
                { stat: "1", label: "Great Cause" },
                { stat: "1 Night", label: "To Remember" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="text-4xl text-[#cfb358]"
                    style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
                  >
                    {stat}
                  </p>
                  <p className="text-[#f5f0e8]/50 text-xs uppercase tracking-wider mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/press-video.mp4" type="video/mp4" />
              </video>
              {/* Gold frame accent */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#cfb358]/30 rounded-lg" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-[#cfb358] text-[#1a1403] px-6 py-4 rounded shadow-xl hidden lg:block">
              <p
                className="text-3xl leading-none"
                style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
              >
                Net proceeds
              </p>
              <p className="text-xs uppercase tracking-widest font-bold mt-1">benefit LUM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
