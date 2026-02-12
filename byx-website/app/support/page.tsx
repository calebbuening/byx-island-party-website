import SponsorFormModal from '@/components/SponsorFormModal'
import HomeButton from '@/components/HomeButton'

export default function SupportPage() {
  return (
    <div className="island-content-page px-4 py-16 sm:px-6">
      <div className="island-content-container">
        <HomeButton />
        <h1 className="mb-8 text-4xl font-extrabold text-cyan-950">Sponsor Island Party</h1>

        {/* Sponsorship Inquiry Form */}
        <section className="mb-12">
          <p className="mb-6 text-slate-700">
            Interested in a larger partnership? Open the form and we&apos;ll be in touch.
          </p>
          <SponsorFormModal />
        </section>

        {/* Impact Section */}
        <section className="island-content-card p-8">
          <h2 className="mb-4 text-2xl font-extrabold text-cyan-950">Why Sponsor Us?</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black tracking-wide text-cyan-950 uppercase">
              Brand Visibility
            </span>
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black tracking-wide text-cyan-950 uppercase">
              Public Alignment
            </span>
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black tracking-wide text-cyan-950 uppercase">
              Product Sampling
            </span>
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black tracking-wide text-cyan-950 uppercase">
              Social Reach
            </span>
          </div>
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-extrabold text-cyan-900">1. How Sponsorship Benefits You</h3>
            <p className="mb-4 text-slate-700">
              Partnering with Island Party gives your team immediate{' '}
              <span className="font-extrabold text-cyan-950">BRAND VISIBILITY</span> and strong{' '}
              <span className="font-extrabold text-cyan-950">PUBLIC ALIGNMENT</span> with a values-driven
              campus community.
            </p>
            <p className="mb-4 text-slate-700">
              We can structure sponsorships around the same activation model brands like Celsius use on
              campuses: product drops, high-volume sampling, social content, and direct student engagement.
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-700">
              <li>
                <span className="font-bold text-cyan-950">Brand Visibility:</span> logo placement across
                event promos, social posts, stage mentions, and on-site signage
              </li>
              <li>
                <span className="font-bold text-cyan-950">Product Sampling + Giveaways:</span> get your
                product into students&apos; hands through free samples, sponsored tables, and prize drops
              </li>
              <li>
                <span className="font-bold text-cyan-950">Social Proof Content:</span> tagged photos,
                recap clips, and sponsor shoutouts that extend reach after the event
              </li>
              <li>
                <span className="font-bold text-cyan-950">Public Alignment:</span> connect your brand to
                positive student experiences, leadership development, and community impact
              </li>
              <li>
                <span className="font-bold text-cyan-950">Direct Response Opportunities:</span> use QR
                codes, promo links, and opt-ins to turn attention into measurable engagement
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-extrabold text-cyan-900">2. How It Advances Our Mission</h3>
            <p className="mb-4 text-slate-700">
              Your sponsorship helps BYX create safe places for college students to have fun in healthy,
              uplifting environments. It also supports our core purpose of building brotherhood centered on
              Christ and glorifying God through everything we do.
            </p>
            <ul className="list-inside list-disc space-y-2 text-slate-700">
              <li>Creates welcoming, safe events where students can connect and belong</li>
              <li>Funds service opportunities and faith-centered programming throughout the year</li>
              <li>Supports mentorship and leadership growth rooted in Christian character</li>
              <li>Helps us run events that point people toward hope, purpose, and God&apos;s glory</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
