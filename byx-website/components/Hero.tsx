import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#0b3a53] to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brothers Under Christ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100">
            Building brotherhood centered on faith, service, and leadership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Tickets
            </Link>
            <Link
              href="/support"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
