import Link from 'next/link'
import { MessageCircle, Mail, Camera } from 'lucide-react'
import { colors } from '@/lib/colors'
import { Blob } from './ui'

export default function Footer() {
  return (
    <footer className="py-14 relative overflow-hidden" style={{ background: colors.ink, color: colors.bg }}>
      <Blob color={`${colors.pink}20`} className="w-[400px] h-[400px] -top-20 -left-20" />
      <Blob color={`${colors.blue}20`} className="w-[300px] h-[300px] -bottom-10 right-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src="/logo.png" alt="WonderLoom" className="h-16 w-auto" />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Personalised hardcover storybooks where your child is the hero. Handmade in the UAE.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase mb-4 opacity-60 font-semibold">Explore</div>
            <div className="flex flex-col gap-2.5 text-sm">
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
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase mb-4 opacity-60 font-semibold">Get in touch</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="https://wa.me/971585052184" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                <MessageCircle size={14} /> +971 58 50 52184
              </a>
              <a href="mailto:support@wonderloom.ai" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                <Mail size={14} /> support@wonderloom.ai
              </a>
              <a href="#" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
                <Camera size={14} /> @wonderloom.ai
              </a>
            </div>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60"
          style={{ borderTop: '1px solid rgba(255, 251, 247, 0.15)' }}
        >
          <div>© 2026 WonderLoom.ai — All rights reserved</div>
          <div className="font-script text-base" style={{ color: colors.yellow }}>
            crafted with care in Dubai
          </div>
        </div>
      </div>
    </footer>
  )
}
