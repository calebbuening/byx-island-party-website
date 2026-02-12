'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#0b3a53] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/byx-logo.png"
              alt="Island Party"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              Island Party
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/tickets" className="text-gray-300 hover:text-white transition-colors">
              Tickets
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tickets"
              className="island-btn island-btn-primary !py-2 !px-5 !text-sm"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link href="/tickets" className="text-gray-300 hover:text-white">Tickets</Link>
              <Link href="/support" className="text-gray-300 hover:text-white">Support</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
