import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b3a53] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">BYX</h3>
            <p className="text-cyan-100">
              Brothers Under Christ - Building brotherhood centered on faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-cyan-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/tickets" className="block text-cyan-100 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/support" className="block text-cyan-100 hover:text-white transition-colors">
                Support BYX
              </Link>
              <Link href="/contact" className="block text-cyan-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-cyan-100 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-cyan-100 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-800/70 mt-8 pt-8 text-center text-cyan-100">
          <p>&copy; {currentYear} BYX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
