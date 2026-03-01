"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-04-18T18:00:00"); // placeholder — update when confirmed

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-4xl sm:text-5xl lg:text-6xl text-[#cfb358] leading-none"
        style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[#f5f0e8]/60 text-xs sm:text-sm uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/slayter-hill.png"
        alt="Slayter Hill venue"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay — heavy at top/bottom, clear in center to reveal the venue photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,20,3,0.82) 0%, rgba(26,20,3,0.25) 28%, rgba(26,20,3,0.15) 52%, rgba(26,20,3,0.45) 72%, rgba(26,20,3,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-8 sm:pb-16">
        {/* Title lockup */}
        <div
          className="flex flex-col items-center mb-8"
          style={{ textShadow: "0 2px 24px rgba(26,20,3,0.8), 0 1px 4px rgba(26,20,3,0.9)" }}
        >
          <h1
            className="text-7xl sm:text-8xl lg:text-[10rem] text-[#f5f0e8] leading-none tracking-wide"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            Island Party
          </h1>
          <div className="flex items-center gap-3 mt-1 w-full">
            <span className="flex-1 h-px bg-[#cfb358]/60" />
            <span
              className="text-2xl sm:text-3xl lg:text-4xl text-[#cfb358] leading-none tracking-[0.3em]"
              style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
            >
              2026
            </span>
            <span className="flex-1 h-px bg-[#cfb358]/60" />
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-4 sm:gap-8 mb-12">
          <CountdownUnit value={days} label="Days" />
          <span className="text-[#cfb358]/50 text-lg sm:text-xl mb-4">·</span>
          <CountdownUnit value={hours} label="Hours" />
          <span className="text-[#cfb358]/50 text-lg sm:text-xl mb-4">·</span>
          <CountdownUnit value={minutes} label="Minutes" />
          <span className="text-[#cfb358]/50 text-lg sm:text-xl mb-4">·</span>
          <CountdownUnit value={seconds} label="Seconds" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#tickets"
            className="px-10 py-4 bg-[#cfb358] text-[#1a1403] font-bold text-lg uppercase tracking-wider rounded hover:bg-[#e8c96a] transition-all hover:scale-105 shadow-lg"
          >
            Get Tickets
          </a>
          <a
            href="#lineup"
            className="px-10 py-4 border-2 border-[#cfb358] text-[#cfb358] font-bold text-lg uppercase tracking-wider rounded hover:bg-[#cfb358]/10 transition-all"
          >
            View Lineup
          </a>
        </div>
      </div>

      {/* Scroll indicator — anchored to bottom of section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cfb358" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
