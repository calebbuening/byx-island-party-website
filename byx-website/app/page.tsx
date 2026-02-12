import Image from 'next/image'
import Link from 'next/link'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default async function Home() {
  return (
    <div className={`island-page ${manrope.className}`}>
      <section className="island-hero relative flex min-h-screen min-h-[100dvh] items-center overflow-x-hidden px-4 py-6 sm:px-6 sm:py-10 md:py-12">
        <div className="island-blob island-blob-sun" aria-hidden="true" />

        {/* Island triangles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Far left island */}
          <div className="absolute bottom-[8%] -left-[5%] w-[35%] aspect-[2/1]"
            style={{ background: 'linear-gradient(to top, #1a5c3a 0%, #2a8f52 60%, #34a85e 100%)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', opacity: 0.6 }} />
          {/* Center-left island */}
          <div className="absolute bottom-[5%] left-[15%] w-[40%] aspect-[1.8/1]"
            style={{ background: 'linear-gradient(to top, #1a6b3f 0%, #2d9a55 60%, #3cb868 100%)', clipPath: 'polygon(45% 0%, 0% 100%, 100% 100%)', opacity: 0.7 }} />
          {/* Center-right island */}
          <div className="absolute bottom-[5%] right-[10%] w-[45%] aspect-[2/1]"
            style={{ background: 'linear-gradient(to top, #1a5c3a 0%, #2a8f52 60%, #34a85e 100%)', clipPath: 'polygon(55% 0%, 0% 100%, 100% 100%)', opacity: 0.65 }} />
          {/* Far right island */}
          <div className="absolute bottom-[10%] -right-[8%] w-[30%] aspect-[1.6/1]"
            style={{ background: 'linear-gradient(to top, #1a6b3f 0%, #2d9a55 70%, #3cb868 100%)', clipPath: 'polygon(40% 0%, 0% 100%, 100% 100%)', opacity: 0.55 }} />
        </div>

        <div className="island-blob island-blob-wave" aria-hidden="true" />
        <div className="mx-auto w-full max-w-6xl">
          <div className="island-fade-up text-center">
            <Image
              src="/images/byx-logo.png"
              alt="(No Man Is An) Island Party 2026"
              width={520}
              height={520}
              className="island-hero-logo mx-auto mb-1 h-auto drop-shadow-[0_8px_30px_rgba(255,171,79,0.3)]"
              priority
            />
            <div className="island-hero-cta mt-4 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-4">
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
