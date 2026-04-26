'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, ChevronDown, ArrowRight, Star } from 'lucide-react'
import { colors } from '@/lib/colors'
import { books, ages } from '@/lib/books'
import { StarShape, Blob } from '@/components/ui'
import { BookCover } from '@/components/BookCover'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT ONLY USED ON THIS PAGE
// ─────────────────────────────────────────────────────────────────────────────

const careers = [
  { label: 'Firefighter', emoji: '🧑‍🚒', angle: 'top-left', bg: '#FDB9D2' },
  { label: 'Astronaut', emoji: '🧑‍🚀', angle: 'top-right', bg: '#A5D8EE' },
  { label: 'Chef', emoji: '🧑‍🍳', angle: 'bottom-left', bg: '#FEF3A8' },
  { label: 'Doctor', emoji: '🧑‍⚕️', angle: 'bottom-right', bg: '#E4BEE5' },
] as const

const testimonials = [
  {
    quote:
      "Heyyy! Just wanted to say a big THANK YOU! My husband and son were super surprised and absolutely love the custom book! It's honestly one of the best gifts we've given — so personal, thoughtful, and beautifully illustrated. We're all obsessed!",
    author: 'Happy Customer',
    location: 'Dubai',
    bg: '#C7E6F3',
    shape: '#FDF940',
  },
  {
    quote:
      "My daughter actually gasped when she saw her face on the cover. She sleeps with it under her pillow now. This isn't just a book — it's a memory she'll keep forever.",
    author: 'Priya K.',
    location: 'Abu Dhabi',
    bg: '#F4D7D9',
    shape: '#6DBFE2',
  },
  {
    quote:
      "Ordered two for my twins and the detail is incredible. Even the illustrations look exactly like them. Worth every dirham. Already ordered the Father's Day edition.",
    author: 'Omar A.',
    location: 'Sharjah',
    bg: '#FEF3A8',
    shape: '#C459C5',
  },
]

const faqs = [
  {
    q: 'Where do you deliver and how long does it take?',
    a: 'We currently deliver across Dubai and the UAE. Most orders reach your doorstep within 5 days of confirmation, except during extended public holidays like Eid, when we ask for a little extra patience.',
  },
  {
    q: 'How do I place an order?',
    a: 'All orders are placed through WhatsApp, so the process feels personal from the start. Message us at +971 58 50 52184 and our team will walk you through story selection, photo upload, and preview.',
  },
  {
    q: 'What size and quality are the books?',
    a: 'Every book is a 21cm × 21cm hardcover on premium thick paper — designed to be read, re-read, and passed down. Equally at home on a nightstand or a coffee table.',
  },
  {
    q: 'Can I cancel or get a refund?',
    a: "You can cancel within 24 hours of placing the order for a full refund. Once the book is sent to print, we can't cancel — but if it arrives damaged, we'll replace it or refund you in full.",
  },
  {
    q: 'Are the photos I share safe?',
    a: 'Completely. Your photos are used only to craft your book. We never store, sell, or repurpose them for anything else. Ever.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function WonderLoomHomepage() {
  const [openFaq, setOpenFaq] = useState<number>(0)

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: colors.bg, color: colors.ink }}>
      <Nav />

      {/* ──────────────────── HERO ──────────────────── */}
      <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-10 overflow-hidden">
        <Blob color={`${colors.pink}30`} className="w-[500px] h-[500px] -top-40 -left-40" />
        <Blob color={`${colors.blue}30`} className="w-[400px] h-[400px] top-20 -right-20" />
        <Blob color={`${colors.yellow}40`} className="w-[300px] h-[300px] bottom-0 left-1/3" />

        <StarShape size={28} color={colors.yellow} className="absolute top-36 left-8 lg:left-16 animate-shimmer z-10" />
        <StarShape size={18} color={colors.pink} className="absolute top-28 right-10 lg:right-20 animate-shimmer z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative flex flex-col items-center text-center">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: '#fff', border: `1px solid ${colors.softPink}` }}
            >
              <span className="w-2 h-2 rounded-full animate-shimmer" style={{ background: colors.pink }} />
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: colors.pinkDeep }}>
                Now delivering across the UAE
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3">
              Stories where <span style={{ color: colors.pink }}>they&apos;re</span> the hero.
            </h1>

            <p className="text-sm lg:text-base leading-relaxed mb-0 max-w-xl mx-auto opacity-70">
              Hardcover keepsake books with your child as the hero. Handmade, delivered across the UAE.
            </p>
          </div>

          <div className="relative w-full mt-4 lg:mt-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[320px] md:h-[400px] lg:h-[440px] object-cover rounded-3xl shadow-2xl"
              style={{ filter: 'drop-shadow(0 30px 40px rgba(216, 85, 137, 0.2))' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent rounded-b-3xl pointer-events-none" />
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <Link
                href="/stories"
                className="group flex items-center gap-3 px-7 py-3.5 rounded-full transition-transform hover:scale-105 font-medium text-white"
                style={{ background: colors.pink }}
              >
                <span>Explore the stories</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/971585052184"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-white bg-white/15 backdrop-blur-sm hover:bg-white/25 transition"
              >
                <MessageCircle size={15} /> or order on WhatsApp
              </a>
            </div>
            <StarShape size={14} color={colors.purple} className="absolute -bottom-4 -right-4 lg:-right-8 animate-shimmer z-10" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] tracking-wide opacity-75">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} fill={colors.yellow} color={colors.yellow} />
              ))}
              <span className="ml-2 font-medium">Loved by 200+ families</span>
            </div>
            <div className="w-px h-4 opacity-20" style={{ background: colors.ink }} />
            <div>21×21cm · Hardcover</div>
          </div>
        </div>
      </section>

      {/* ──────────────────── SHOP BY AGE ──────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
                Find the perfect fit
              </div>
              <h2 className="font-display text-4xl lg:text-5xl">Shop by age</h2>
            </div>
            <Link href="/stories" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              View all stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ages.map((age, i) => (
              <Link
                key={i}
                href="/stories"
                className="w-full h-80 md:h-96 rounded-3xl relative overflow-hidden cursor-pointer group"
                style={{ background: age.bg }}
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <div className="font-display text-7xl lg:text-8xl leading-none" style={{ color: age.tone }}>
                      {age.range}
                    </div>
                    <div
                      className="text-xs tracking-[0.2em] uppercase mt-2 font-semibold"
                      style={{ color: age.tone, opacity: 0.7 }}
                    >
                      years
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl mb-2" style={{ color: age.tone }}>
                      {age.label}
                    </div>
                    <div className="text-sm" style={{ color: age.tone, opacity: 0.75 }}>
                      {age.sub}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: age.tone }}>
                      <span className="border-b pb-0.5" style={{ borderColor: age.tone }}>
                        Browse stories
                      </span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                <StarShape size={24} color={age.tone} className="absolute top-6 right-6 opacity-40" />
                <div
                  className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-20"
                  style={{ background: age.tone }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── BEST SELLERS ──────────────────── */}
      <section id="stories" className="py-12 lg:py-16 relative overflow-hidden" style={{ background: colors.bgSoft }}>
        <Blob color={`${colors.blue}30`} className="w-[400px] h-[400px] top-10 -right-20" />
        <Blob color={`${colors.yellow}30`} className="w-[300px] h-[300px] -bottom-10 -left-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
                Parents&apos; favourites
              </div>
              <h2 className="font-display text-4xl lg:text-5xl">Personalised bestsellers</h2>
            </div>
            <Link href="/stories" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              View all →
            </Link>
          </div>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 -mx-6 px-6">
            {books.map((book, i) => (
              <Link key={i} href={`/stories/${book.slug}`} className="flex-shrink-0 w-64 cursor-pointer group">
                <div
                  className="aspect-square w-64 mb-5 transition-transform group-hover:-translate-y-2 duration-500"
                  style={{ filter: 'drop-shadow(0 20px 30px rgba(42, 35, 32, 0.12))' }}
                >
                  <BookCover book={book} />
                </div>
                <div className="px-1">
                  <div
                    className="text-xs tracking-[0.15em] uppercase mb-2 font-semibold"
                    style={{ color: colors.pinkDeep, opacity: 0.9 }}
                  >
                    Ages {book.age}
                  </div>
                  <h3 className="font-display text-xl mb-1.5">{book.title}</h3>
                  <p className="text-sm leading-relaxed opacity-70">{book.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CAST THEM IN THE ROLE ──────────────────── */}
      <section id="how" className="py-16 lg:py-20 relative overflow-hidden">
        <Blob color={`${colors.purple}25`} className="w-[400px] h-[400px] top-20 -left-20" />
        <Blob color={`${colors.pink}25`} className="w-[350px] h-[350px] -bottom-10 right-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase mb-5 font-semibold" style={{ color: colors.pink }}>
              Made for their big dreams
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] mb-6">
              Cast <span style={{ color: colors.pink }}>them</span> in the role they dream about.
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-md opacity-70">
              Every book is built around your child&apos;s face and name. Firefighter on Monday, astronaut by Friday
              — we craft the story, the illustrations, the world. You just send us a photo.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full transition-transform hover:scale-105 font-medium text-white"
              style={{ background: colors.pink }}
            >
              See how it works <ArrowRight size={16} />
            </Link>

            <div className="mt-10 flex items-center gap-4 text-sm opacity-75">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2" style={{ background: colors.pink, borderColor: colors.bg }} />
                <div className="w-8 h-8 rounded-full border-2" style={{ background: colors.blue, borderColor: colors.bg }} />
                <div className="w-8 h-8 rounded-full border-2" style={{ background: colors.yellow, borderColor: colors.bg }} />
              </div>
              <span className="font-script text-lg" style={{ color: colors.pinkDeep }}>
                loved by families across the UAE
              </span>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[580px] flex items-center justify-center">
            <StarShape size={22} color={colors.yellow} className="absolute top-12 right-16 animate-shimmer" />
            <StarShape size={16} color={colors.blue} className="absolute bottom-16 left-12 animate-shimmer" />

            <div
              className="absolute w-32 h-32 rounded-full overflow-hidden z-10 shadow-2xl flex items-center justify-center text-5xl border-4"
              style={{
                background: `linear-gradient(135deg, ${colors.yellow} 0%, ${colors.softPink} 100%)`,
                borderColor: colors.bg,
              }}
            >
              👧🏽
            </div>

            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500" preserveAspectRatio="none">
              <defs>
                <marker id="ah-pink" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M2,2 L8,6 L2,10" fill="none" stroke={colors.pinkDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ah-blue" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M2,2 L8,6 L2,10" fill="none" stroke={colors.blueDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ah-gold" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M2,2 L8,6 L2,10" fill="none" stroke="#B8900F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ah-purple" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M2,2 L8,6 L2,10" fill="none" stroke={colors.purple} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              <path d="M 222 225 C 198 246, 170 228, 158 202 C 145 174, 132 150, 120 130" stroke={colors.pinkDeep} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah-pink)" />
              <circle cx="168" cy="178" r="2.2" fill={colors.pinkDeep} opacity="0.55" />

              <path d="M 278 225 C 310 238, 328 214, 345 192 C 368 162, 382 138, 388 122" stroke={colors.blueDeep} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="5 4" markerEnd="url(#ah-blue)" />
              <path d="M 322 183 l 0 6 M 319 186 l 6 0" stroke={colors.blueDeep} strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />

              <path d="M 222 278 Q 202 298, 198 318 T 178 350 Q 160 368, 130 380" stroke="#B8900F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah-gold)" />
              <circle cx="198" cy="318" r="2.2" fill="#B8900F" opacity="0.55" />

              <path d="M 278 278 C 308 290, 325 308, 335 328 C 348 350, 362 352, 360 338 C 358 324, 370 360, 385 385" stroke={colors.purple} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah-purple)" />
              <path d="M 300 300 l 0 5 M 297.5 302.5 l 5 0" stroke={colors.purple} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            </svg>

            {careers.map((career, i) => {
              const positions: Record<string, string> = {
                'top-left': 'top-4 left-4 lg:top-8 lg:left-8',
                'top-right': 'top-4 right-4 lg:top-8 lg:right-8',
                'bottom-left': 'bottom-4 left-4 lg:bottom-8 lg:left-8',
                'bottom-right': 'bottom-4 right-4 lg:bottom-8 lg:right-8',
              }
              return (
                <div key={i} className={`absolute ${positions[career.angle]} flex flex-col items-center gap-2`}>
                  <div
                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full shadow-xl flex items-center justify-center text-4xl lg:text-5xl transition-transform hover:scale-110 border-4"
                    style={{ background: career.bg, borderColor: colors.bg }}
                  >
                    {career.emoji}
                  </div>
                  <div className="font-script text-xl lg:text-2xl" style={{ color: colors.ink }}>
                    {career.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────── TESTIMONIALS ──────────────────── */}
      <section id="love" className="py-12 lg:py-16 relative overflow-hidden" style={{ background: colors.bgSoft }}>
        <Blob color={`${colors.blue}20`} className="w-[500px] h-[500px] -top-20 left-1/4" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
              From the loveliest inboxes
            </div>
            <h2 className="font-display text-4xl lg:text-5xl mb-4">
              What parents are <span style={{ color: colors.pink }}>saying</span>
            </h2>
            <p className="text-base opacity-70">Unfiltered, unedited — the messages we wake up to.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="relative rounded-3xl p-8 lg:p-10 overflow-hidden" style={{ background: t.bg }}>
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-70" style={{ background: t.shape }} />
                <StarShape size={18} color={t.shape} className="absolute bottom-8 right-8 opacity-60" />

                <div className="font-display text-8xl leading-none mb-2 relative" style={{ color: t.shape, marginTop: '-8px' }}>
                  &ldquo;
                </div>

                <p className="text-[15px] leading-relaxed mb-8 relative" style={{ color: colors.ink }}>
                  {t.quote}
                </p>

                <div className="pt-5 relative" style={{ borderTop: `1px solid ${colors.ink}20` }}>
                  <div className="font-display text-xl mb-1">{t.author}</div>
                  <div className="text-xs tracking-wide uppercase font-medium opacity-60">{t.location}</div>
                  <div className="flex gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill={colors.yellow} color={colors.yellow} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/971585052184"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
              style={{ color: colors.pinkDeep }}
            >
              Read more reviews on WhatsApp <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────── FAQ ──────────────────── */}
      <section id="faq" className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
              Good to know
            </div>
            <h2 className="font-display text-4xl lg:text-5xl">Questions parents ask</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all"
                style={{
                  background: colors.bgSoft,
                  border: `2px solid ${openFaq === i ? colors.pink : 'transparent'}`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-display text-lg pr-6">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: colors.pink,
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openFaq === i ? '200px' : '0' }}
                >
                  <p className="px-7 pb-6 leading-relaxed opacity-75">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-sm opacity-70">
            Still curious? Reach us at{' '}
            <a
              href="mailto:support@wonderloom.ai"
              className="underline underline-offset-4 font-medium"
              style={{ color: colors.pinkDeep }}
            >
              support@wonderloom.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
