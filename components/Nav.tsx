'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle, Menu, X } from 'lucide-react'
import { colors } from '@/lib/colors'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-md' : 'py-5'
      }`}
      style={{
        background: scrolled ? 'rgba(255, 251, 247, 0.85)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${colors.softPink}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="WonderLoom" className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <Link href="/stories" className="hover:opacity-60 transition-opacity">
            Our Stories
          </Link>
          <Link href="/how-it-works" className="hover:opacity-60 transition-opacity">
            How it Works
          </Link>
          <Link href="/#love" className="hover:opacity-60 transition-opacity">
            Reviews
          </Link>
          <Link href="/#faq" className="hover:opacity-60 transition-opacity">
            FAQ
          </Link>
        </div>

        <a
          href="https://wa.me/971585052184"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-transform hover:scale-105 font-medium text-white"
          style={{ background: colors.pink }}
        >
          <MessageCircle size={15} />
          Order on WhatsApp
        </a>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-4" style={{ background: colors.bg }}>
          <Link href="/stories" onClick={() => setMobileMenuOpen(false)}>
            Our Stories
          </Link>
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How it Works
          </Link>
          <Link href="/#love" onClick={() => setMobileMenuOpen(false)}>
            Reviews
          </Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <a
            href="https://wa.me/971585052184"
            className="px-5 py-2.5 rounded-full text-sm text-center font-medium text-white"
            style={{ background: colors.pink }}
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
