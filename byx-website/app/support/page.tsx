import SponsorFormModal from '@/components/SponsorFormModal'
import HomeButton from '@/components/HomeButton'

export default function SupportPage() {
  return (
    <div className="island-content-page px-4 py-16 sm:px-6">
      <div className="island-content-container">
        <HomeButton />
        <h1 className="mb-4 text-4xl font-extrabold text-cyan-950">Sponsor Island Party 2026</h1>
        <p className="mb-12 text-lg text-slate-700">
          Partner with us to fuel the music, community, and impact.
        </p>

        {/* Purpose & Impact */}
        <section className="mb-10 grid md:grid-cols-2 gap-8">
          <div className="island-content-card p-6">
            <h2 className="mb-4 text-2xl font-extrabold text-cyan-950">Our Purpose</h2>
            <ul className="space-y-3 text-slate-700">
              <li>Island Party exists to glorify Jesus Christ by uniting the Purdue campus and community through a music festival to combat homelessness</li>
              <li>Our goal is to raise <span className="font-extrabold text-cyan-950">$10,000</span> for <span className="font-extrabold text-cyan-950">Lafayette Urban Ministry (LUM)</span>, with no benefit to our organization</li>
              <li>We expect more than <span className="font-extrabold text-cyan-950">2,500 guests</span> with professional music artists and quality vendors, creating a non-alcoholic, engaging event</li>
            </ul>
          </div>
          <div className="island-content-card p-6">
            <h2 className="mb-4 text-2xl font-extrabold text-cyan-950">Our Impact</h2>
            <ul className="space-y-3 text-slate-700">
              <li>Lafayette Urban Ministry is a lifeline for the unhoused community, meeting basic needs such as food, shelter, and childcare for over <span className="font-extrabold text-cyan-950">4,000 households</span> in the Greater Lafayette area</li>
              <li>LUM continues to support essential needs for families in crisis, with an average of <span className="font-extrabold text-cyan-950">40 emergency shelter interactions daily</span></li>
            </ul>
          </div>
        </section>

        {/* Event Overview */}
        <section className="mb-10 island-content-card p-6">
          <h2 className="mb-6 text-2xl font-extrabold text-cyan-950">The Event</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="mb-2 text-lg font-extrabold text-cyan-900">Professionally Run</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>Non-alcoholic event catered to multiple demographics</li>
                <li>On-site police and EMS, plus emergency-trained volunteers</li>
                <li>Backed by <span className="font-bold text-cyan-950">$1M event insurance</span></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-extrabold text-cyan-900">Proven Track Record</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>Consistent attendance of over <span className="font-bold text-cyan-950">2,000 students</span></li>
                <li><span className="font-bold text-cyan-950">7,000+</span> attendees over past 4 years via word-of-mouth</li>
                <li><span className="font-bold text-cyan-950">0</span> safety incidents in event history</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-extrabold text-cyan-900">Lasting Impressions</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>High-impact night with thousands of attendees</li>
                <li>Multi-avenue sponsor exposure via social media, merchandise, signage, and on-stage recognition</li>
                <li>The only large-scale, sober on-campus option during Grand Prix weekend</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-extrabold text-cyan-950">Sponsorship Tiers</h2>

          {/* Presenting Sponsor */}
          <div className="mb-6 island-content-card p-6 border-2 border-amber-400">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-extrabold text-cyan-950">Presenting Sponsor</h3>
              <span className="rounded-full bg-amber-400 px-4 py-1 text-sm font-extrabold text-cyan-950">$10,000</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
              <div>
                <h4 className="mb-2 font-extrabold text-cyan-900">Your Visibility</h4>
                <ul className="space-y-1">
                  <li>Recognized as the primary sponsor of Island Party</li>
                  <li>Prime logo placement on T-shirts, social posts, website, and all promo materials</li>
                  <li>MC recognition at openings, intermissions, and the finale</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-extrabold text-cyan-900">Advertise Your Brand</h4>
                <ul className="space-y-1">
                  <li>Speak between performers to curate meaningful promotions</li>
                  <li>Table at Island Party to distribute merchandise or product samples</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-extrabold text-cyan-900">Our Thank You</h4>
                <ul className="space-y-1">
                  <li>Free VIP tickets, catering, parking, and included merchandise for your team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage & Entrance */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Stage Sponsor</h3>
                <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-extrabold text-cyan-950">$7,500</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Logo on banners on and around the Island Party stage</li>
                <li>Partnership in tailoring stage name to your company</li>
                <li>Logo on T-shirt, website, and promotional material</li>
                <li><span className="font-bold text-cyan-950">15 VIP tickets</span>, catering, and merchandise</li>
              </ul>
            </div>
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Entrance Sponsor</h3>
                <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-extrabold text-cyan-950">$5,000</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Logo on banners on and around the Island Party entrance</li>
                <li>Logo on T-shirt, website, and promotional material</li>
                <li><span className="font-bold text-cyan-950">10 VIP tickets</span>, catering, and merchandise</li>
              </ul>
            </div>
          </div>

          {/* Platinum, Gold, Silver */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Platinum</h3>
                <span className="rounded-full bg-slate-300 px-3 py-1 text-sm font-extrabold text-cyan-950">$2,000</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>MC mention during event intermissions</li>
                <li>Logo on back of Island Party T-shirt</li>
                <li>Logo on conglomerate advertising at event</li>
                <li>Logo on Island Party website</li>
                <li><span className="font-bold text-cyan-950">5 tickets</span> to Island Party</li>
              </ul>
            </div>
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Gold</h3>
                <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-extrabold text-cyan-950">$1,000</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Logo on back of Island Party T-shirt</li>
                <li>Logo on conglomerate advertising at event</li>
                <li>Logo on Island Party website</li>
                <li><span className="font-bold text-cyan-950">3 tickets</span> to Island Party</li>
              </ul>
            </div>
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Silver</h3>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-extrabold text-cyan-950">$500</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Logo on conglomerate advertising at event</li>
                <li>Logo on Island Party website</li>
                <li><span className="font-bold text-cyan-950">2 tickets</span> to Island Party</li>
              </ul>
            </div>
          </div>

          {/* Wristband & In-Kind */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">Wristband Sponsor</h3>
                <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-extrabold text-cyan-950">~$2,500</span>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-cyan-800">In-Kind Donation or Cash</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Your logo on cloth festival wristbands worn by every attendee</li>
                <li>Wristbands are a lasting souvenir and a touchpoint for your brand long past the event</li>
                <li>We need approximately 5,000 wristbands</li>
              </ul>
            </div>
            <div className="island-content-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-extrabold text-cyan-950">In-Kind Incentives</h3>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-extrabold text-cyan-950">Custom</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Digital promotion on social accounts for in-kind sponsors</li>
                <li>Your brand on select day-of promotional materials</li>
                <li>We&apos;re open to discussing additional incentives tailored to maximize value for your business</li>
                <li><span className="font-bold text-cyan-950">2 VIP tickets</span> included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="island-content-card p-8 text-center">
          <h2 className="mb-3 text-2xl font-extrabold text-cyan-950">Partner. Participate. Make an Impact.</h2>
          <p className="mb-6 text-slate-700">
            Sponsor today to help families in need and create an unforgettable experience at Island Party 2026.
          </p>
          <div className="mb-6">
            <SponsorFormModal />
          </div>
          <div className="text-sm text-slate-600">
            <p>
              Or reach out directly:{' '}
              <a href="mailto:purduebyx.islandparty@gmail.com" className="island-link">
                purduebyx.islandparty@gmail.com
              </a>
            </p>
            <p className="mt-1">
              <a href="tel:+13179671977" className="island-link">(317) 967-1977</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
