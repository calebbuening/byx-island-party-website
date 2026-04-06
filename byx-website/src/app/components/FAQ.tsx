"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When and where is Island Party 2026?",
    a: "Island Party 2026 will be held at Slayter Hill on Purdue University's campus in West Lafayette, Indiana. Follow @purduebyxislandparty on Instagram for date and time announcements.",
  },
  {
    q: "Is Island Party open to the public, or just Purdue students?",
    a: "Island Party is open to everyone! While it's hosted by Purdue BYX, we welcome students, alumni, and community members from the greater West Lafayette area.",
  },
  {
    q: "How old do I need to be to attend?",
    a: "Island Party is an 18+ event. All attendees will be required to show a valid photo ID at the gate.",
  },
  {
    q: "What can't I bring?",
    a: "No bags, backpacks, alcohol, weapons, or outside food and drink are permitted. This is for the safety and enjoyment of all attendees. Small clutches and clear bags may be allowed — check our Instagram for the full list closer to the event.",
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
    a: "Yes. Slayter Hill is accessible to attendees with disabilities. Please contact us at purduebyx.islandparty@gmail.com for specific accommodation requests.",
  },
  {
    q: "Where does the money go?",
    a: "All net proceeds from ticket sales and sponsorships go directly to Lafayette Urban Ministry (LUM), serving those in need right here in our community.",
  },
  {
    q: "How can my company become a sponsor?",
    a: "We'd love to partner with you! Download our sponsor deck on this page or reach out directly to purduebyx.islandparty@gmail.com.",
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
          <a href="mailto:purduebyx.islandparty@gmail.com" className="text-[#cfb358] hover:underline">
            purduebyx.islandparty@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
