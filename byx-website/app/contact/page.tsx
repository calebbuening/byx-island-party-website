import ContactForm from '@/components/ContactForm'
import HomeButton from '@/components/HomeButton'
import { siteSettingsContent } from '@/lib/content'

export default function ContactPage() {
  return (
    <div className="island-content-page px-4 py-16 sm:px-6">
      <div className="island-content-container">
        <HomeButton />
        <h1 className="mb-4 text-4xl font-extrabold text-cyan-950">Get in Touch</h1>
        <p className="mb-12 text-xl text-slate-700">
          Have questions? We&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-cyan-950">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-cyan-950">Other ways to connect</h2>

            {siteSettingsContent.contactEmail && (
              <div className="mb-6">
                <h3 className="mb-2 font-bold text-cyan-950">Email</h3>
                <a
                  href={`mailto:${siteSettingsContent.contactEmail}`}
                  className="island-link"
                >
                  {siteSettingsContent.contactEmail}
                </a>
              </div>
            )}

            {siteSettingsContent.socialMedia && (
              <div className="mb-6">
                <h3 className="mb-2 font-bold text-cyan-950">Social Media</h3>
                <div className="space-y-2">
                  {siteSettingsContent.socialMedia.instagram && (
                    <a
                      href={siteSettingsContent.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="island-link block"
                    >
                      Instagram
                    </a>
                  )}
                  {siteSettingsContent.socialMedia.facebook && (
                    <a
                      href={siteSettingsContent.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="island-link block"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="island-content-card p-6">
              <h3 className="mb-2 font-bold text-cyan-950">Response Time</h3>
              <p className="text-slate-700">
                We typically respond within 24-48 hours during the academic year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
