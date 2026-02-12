import Link from 'next/link'
import { Bebas_Neue, Manrope } from 'next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default async function Home() {
  return (
    <div className={`island-page min-h-screen ${manrope.className}`}>
      <section className="island-hero relative flex min-h-[78vh] items-center overflow-hidden px-4 py-24 sm:px-6 md:min-h-[84vh] md:py-32">
        <div className="island-blob island-blob-sun" aria-hidden="true" />
        <div className="island-blob island-blob-wave" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          <div className="island-fade-up text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-amber-100 uppercase">
              BYX Presents
            </p>
            <h1 className={`${bebas.className} text-6xl leading-none text-white sm:text-7xl md:text-8xl`}>
              Island Party
            </h1>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/tickets" className="island-btn island-btn-primary">
                Get Event Passes
              </Link>
              <Link href="/support" className="island-btn island-btn-secondary">
                Sponsor The Party
              </Link>
              <Link href="/about" className="island-btn island-btn-secondary">
                About BYX
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
