import { aboutPageContent, coreValues } from '@/lib/content'
import HomeButton from '@/components/HomeButton'

export default function AboutPage() {
  return (
    <div className="island-content-page px-4 py-16 sm:px-6">
      {/* Hero Section */}
      {aboutPageContent.heroImageUrl && (
        <div className="mx-auto mb-12 h-64 max-w-5xl">
          <img
            src={aboutPageContent.heroImageUrl}
            alt="BYX Brotherhood"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      )}

      <div className="island-content-container">
        <HomeButton />

        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-extrabold text-cyan-950">TODO: Rush Info</h2>
          <p className="text-slate-700">
            <a href="#" className="island-link">TODO: Our website link</a>
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <h1 className="mb-6 text-4xl font-extrabold text-cyan-950">About BYX</h1>
          <div className="island-content-card p-8">
            <h2 className="mb-4 text-2xl font-extrabold text-cyan-950">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {aboutPageContent.missionStatement}
            </p>
          </div>
        </section>

        {/* Core Values */}
        {coreValues.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-3xl font-extrabold text-cyan-950">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value) => (
                <div key={value.title} className="island-content-card p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                      <span className="text-xl text-cyan-900">&#10022;</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-extrabold text-cyan-950">{value.title}</h3>
                      <p className="text-slate-700">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-extrabold text-cyan-950">What Makes BYX Different</h2>
          <p className="text-lg leading-relaxed text-slate-700">
            {aboutPageContent.whatMakesUsDifferent}
          </p>
        </section>

        {/* History */}
        {aboutPageContent.history && (
          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-extrabold text-cyan-950">Our Chapter History</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {aboutPageContent.history}
            </p>
          </section>
        )}

      </div>
    </div>
  )
}
