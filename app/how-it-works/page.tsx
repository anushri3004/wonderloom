'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { colors } from '@/lib/colors'
import { Blob, StarShape } from '@/components/ui'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function IconStory({ color }: { color: string }) {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
      {/* Open book */}
      <path d="M12 28 L48 34 L84 28 L84 76 L48 82 L12 76 Z" fill="white" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M48 34 L48 82" stroke={color} strokeWidth="2.5"/>
      {/* Page lines left */}
      <path d="M22 44 L40 47" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M22 52 L38 54" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M22 60 L40 62" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      {/* Page lines right */}
      <path d="M56 47 L74 44" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M58 54 L74 52" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M56 62 L74 60" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
      {/* Floating star */}
      <path d="M76 14 L78 20 L84 20 L79 24 L81 30 L76 26 L71 30 L73 24 L68 20 L74 20 Z" fill={color}/>
    </svg>
  )
}

function IconPhoto({ color }: { color: string }) {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
      {/* Polaroid frame tilted */}
      <g transform="rotate(-8 48 48)">
        <rect x="20" y="18" width="56" height="64" rx="3" fill="white" stroke={color} strokeWidth="2.5"/>
        <rect x="26" y="24" width="44" height="42" fill={color} opacity="0.15"/>
        {/* Sun */}
        <circle cx="62" cy="36" r="4" fill={color} opacity="0.5"/>
        {/* Mountain */}
        <path d="M26 60 L40 44 L50 54 L62 40 L70 60 Z" fill={color} opacity="0.35"/>
      </g>
      {/* Heart sparkle */}
      <path d="M74 70 C70 66, 66 66, 66 72 C66 77, 74 82, 74 82 C74 82, 82 77, 82 72 C82 66, 78 66, 74 70 Z" fill={color}/>
    </svg>
  )
}

function IconPreview({ color }: { color: string }) {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
      {/* Book spread */}
      <rect x="14" y="24" width="68" height="50" rx="3" fill="white" stroke={color} strokeWidth="2.5"/>
      <path d="M48 24 L48 74" stroke={color} strokeWidth="2"/>
      {/* Content hints */}
      <circle cx="30" cy="40" r="5" fill={color} opacity="0.4"/>
      <path d="M22 54 L40 56" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
      <path d="M22 62 L38 64" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
      <circle cx="66" cy="40" r="5" fill={color} opacity="0.4"/>
      <path d="M56 54 L74 56" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
      {/* Checkmark badge */}
      <circle cx="76" cy="72" r="11" fill={color}/>
      <path d="M71 72 L75 76 L81 68" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function IconDelivery({ color }: { color: string }) {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
      {/* Gift box body */}
      <rect x="18" y="38" width="60" height="44" rx="2" fill="white" stroke={color} strokeWidth="2.5"/>
      {/* Vertical ribbon */}
      <rect x="44" y="38" width="8" height="44" fill={color} opacity="0.6"/>
      {/* Horizontal ribbon */}
      <rect x="18" y="54" width="60" height="8" fill={color} opacity="0.6"/>
      {/* Bow loops */}
      <ellipse cx="38" cy="32" rx="10" ry="8" fill={color} opacity="0.7"/>
      <ellipse cx="58" cy="32" rx="10" ry="8" fill={color} opacity="0.7"/>
      <circle cx="48" cy="32" r="3" fill={color}/>
      {/* Stars around */}
      <path d="M12 22 L13.5 26 L17.5 26 L14 28.5 L15 32.5 L12 30 L9 32.5 L10 28.5 L6.5 26 L10.5 26 Z" fill={color}/>
      <path d="M82 20 L83 23 L86 23 L83.5 25 L84.5 28 L82 26 L79.5 28 L80.5 25 L78 23 L81 23 Z" fill={color}/>
      <path d="M86 54 L87 57 L90 57 L87.5 59 L88.5 62 L86 60 L83.5 62 L84.5 59 L82 57 L85 57 Z" fill={color}/>
    </svg>
  )
}

const steps = [
  {
    num: '01',
    icon: IconStory,
    title: 'Choose a Story',
    body:
      'Browse our catalog by age or occasion — from first-word books for babies to chapter adventures for brave readers. Each story is designed to be personalised around a single child as the hero.',
    bg: '#F4D7D9',
    accent: '#D85589',
    star: '#FDF940',
  },
  {
    num: '02',
    icon: IconPhoto,
    title: 'Share Your Little One',
    body:
      "Send us a clear photo of your child's face and their name via WhatsApp. Add any details you want woven in — a favourite colour, a sibling's name, a family pet. The more you share, the more magic we can weave.",
    bg: '#C7E6F3',
    accent: '#2E7A9A',
    star: '#FD72A4',
  },
  {
    num: '03',
    icon: IconPreview,
    title: 'Preview & Approve',
    body:
      "Within 24 hours you'll receive a digital preview of every page. Change anything — a scene, a line, an outfit. We refine until it feels exactly right. Nothing goes to print until you love it.",
    bg: '#FEF3A8',
    accent: '#8A6800',
    star: '#C459C5',
  },
  {
    num: '04',
    icon: IconDelivery,
    title: 'Delivered to Your Door',
    body:
      'Once you approve, we print your premium 21×21cm hardcover on thick, archival paper and ship across the UAE within 5 days. Gift-wrapping available on request — because first impressions matter.',
    bg: '#E4BEE5',
    accent: '#7A2D7B',
    star: '#6DBFE2',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: colors.bg, color: colors.ink }}>
      <Nav />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <Blob color={`${colors.pink}25`} className="w-[500px] h-[500px] -top-40 -left-40" />
        <Blob color={`${colors.blue}25`} className="w-[400px] h-[400px] top-20 -right-20" />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <div className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: colors.pink }}>
            How WonderLoom works
          </div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] mb-6">
            Four steps from <span style={{ color: colors.pink }}>idea</span> to keepsake.
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto opacity-70">
            No apps, no forms, no logins. We do the whole thing over WhatsApp — the way a good gift should be arranged.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-24 lg:space-y-32">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  !isEven ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative h-80 lg:h-96 flex items-center justify-center">
                  <div
                    className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-[42%_58%_38%_62%_/_52%_44%_56%_48%] opacity-90"
                    style={{ background: step.bg }}
                  />
                  <div
                    className="relative w-44 h-44 lg:w-48 lg:h-48 rounded-full flex items-center justify-center shadow-2xl border-4"
                    style={{ background: '#fff', borderColor: step.accent }}
                  >
                    <Icon color={step.accent} />
                  </div>
                  <StarShape size={22} color={step.star} className="absolute top-12 right-12 animate-shimmer" />
                  <StarShape size={14} color={step.star} className="absolute bottom-12 left-8 animate-shimmer" />
                </div>

                <div>
                  <div className="font-display text-6xl lg:text-7xl mb-4 opacity-80" style={{ color: step.accent }}>
                    {step.num}
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl mb-4">{step.title}</h2>
                  <p className="text-base lg:text-lg leading-relaxed opacity-75 max-w-md">{step.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: colors.bgSoft }}>
        <Blob color={`${colors.yellow}30`} className="w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative">
          <div className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: colors.pink }}>
            Ready when you are
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-tight">
            Start your little one&apos;s story today.
          </h2>
          <p className="text-base lg:text-lg opacity-70 mb-10">
            A WhatsApp message is all it takes. We&apos;ll walk you through the rest.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971585052184"
              className="flex items-center gap-3 px-8 py-4 rounded-full transition-transform hover:scale-105 font-medium text-white"
              style={{ background: colors.pink }}
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
            <Link
              href="/stories"
              className="flex items-center gap-2 px-6 py-4 text-sm font-medium hover:underline underline-offset-4"
            >
              Browse our stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
