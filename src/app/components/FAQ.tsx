"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When and where is Island Party 2026?",
    a: "Island Party 2026 will be held at Slayter Hill on Purdue University's campus in West Lafayette, Indiana. The exact date and time will be announced soon — follow us on Instagram for updates.",
  },
  {
    q: "Is Island Party open to the public, or just Purdue students?",
    a: "Island Party is open to everyone! While it's a Purdue-hosted event, we welcome students, alumni, and community members from the greater West Lafayette area.",
  },
  {
    q: "How old do I need to be to attend?",
    a: "Island Party is an all-ages event. This is a general-admission, alcohol-free music festival open to anyone with a ticket.",
  },
  {
    q: "Where do I park?",
    a: "Several parking lots are available near Slayter Hill. Detailed parking maps and shuttle information will be published closer to the event date. We also encourage attendees to walk, bike, or take the CityBus.",
  },
  {
    q: "Can I re-enter the event after leaving?",
    a: "Yes — re-entry is permitted with a valid wristband. Make sure to keep your wristband on throughout the event.",
  },
  {
    q: "What happens if it rains?",
    a: "Island Party is an outdoor event and typically goes on rain or shine. In the case of severe weather, we will communicate updates via Instagram and email. No refunds are issued for weather unless the event is fully cancelled.",
  },
  {
    q: "Is the venue ADA accessible?",
    a: "Yes. Slayter Hill is accessible to attendees with disabilities. Please contact us at islandparty@purduebyx.com for specific accommodation requests.",
  },
  {
    q: "Where does the money go?",
    a: "All proceeds from ticket sales and sponsorships go directly to our charity partner in West Lafayette. We are committed to full transparency — donation totals will be publicly shared after the event.",
  },
  {
    q: "How can my company become a sponsor?",
    a: "We'd love to partner with you! Download our sponsor deck on this page or reach out directly to sponsor@purduebyx.com. We offer Gold, Silver, and Bronze partnership tiers with varying benefits.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#cfb358]/15">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#f5f0e8] text-sm sm:text-base font-medium group-hover:text-[#cfb358] transition-colors">
          {q}
        </span>
        <svg
          className={`shrink-0 w-5 h-5 text-[#cfb358] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 text-[#f5f0e8]/60 text-sm leading-relaxed pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1403]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">Got Questions?</p>
          <h2
            className="text-6xl sm:text-7xl text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            FAQ
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-[#cfb358]" />
        </div>

        <div className="rounded-xl border border-[#cfb358]/15 bg-[#0d0a01] px-6 sm:px-10 divide-y-0">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <p className="text-center text-[#f5f0e8]/40 text-sm mt-8">
          Still have questions?{" "}
          <a href="mailto:islandparty@purduebyx.com" className="text-[#cfb358] hover:underline">
            islandparty@purduebyx.com
          </a>
        </p>
      </div>
    </section>
  );
}
