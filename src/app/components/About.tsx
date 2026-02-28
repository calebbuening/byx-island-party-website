import Image from "next/image";

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
                Island Party is Purdue&apos;s premier outdoor music festival, hosted annually by{" "}
                <span className="text-[#cfb358] font-semibold">Beta Upsilon Chi (BYX)</span> on the
                iconic slopes of Slayter Hill. What started as a small fraternity event has grown
                into one of the most anticipated nights on the Purdue social calendar.
              </p>
              <p>
                Every year, thousands of Boilermakers gather under the open sky for an unforgettable
                evening of live music — and more importantly, to make a real difference. Every
                dollar raised goes directly to{" "}
                <span className="text-[#cfb358] font-semibold">our local charity partner</span>{" "}
                right here in West Lafayette.
              </p>
              <p>
                We believe that community, music, and purpose can change lives. Island Party is
                proof of that. Join us in 2026 for the biggest Island Party yet.
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

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/images/slayter-hill.png"
                alt="Slayter Hill during Island Party"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#cfb358]/30 rounded-lg" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-[#cfb358] text-[#1a1403] px-6 py-4 rounded shadow-xl hidden lg:block">
              <p
                className="text-3xl leading-none"
                style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
              >
                All proceeds
              </p>
              <p className="text-xs uppercase tracking-widest font-bold mt-1">benefit local charity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
