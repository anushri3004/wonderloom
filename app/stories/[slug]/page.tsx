'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, ArrowLeft, Sparkles, User, Heart, Gift } from 'lucide-react'
import { getBookBySlug, getRelatedBooks } from '@/lib/books'
import { colors } from '@/lib/colors'
import { Blob, StarShape } from '@/components/ui'
import { BookCover } from '@/components/BookCover'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug)

  if (!book) {
    return (
      <div className="min-h-screen" style={{ background: colors.bg, color: colors.ink }}>
        <Nav />
        <div className="pt-40 pb-20 text-center px-6">
          <h1 className="font-display text-4xl mb-4">Story not found</h1>
          <p className="opacity-70 mb-8">That page seems to have wandered off.</p>
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white"
            style={{ background: colors.pink }}
          >
            <ArrowLeft size={16} /> Back to all stories
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const related = getRelatedBooks(params.slug, 3)
  const bookAccent = book.ageRange === '0-2' ? '#8A6800' : colors.pinkDeep

  const personalisationOptions = [
    { icon: User, label: "Your child's name", desc: 'Woven into the story' },
    { icon: Heart, label: 'Their face', desc: 'Matched from a single photo' },
    { icon: Sparkles, label: 'Little details', desc: 'Favourite colour, sibling names' },
    { icon: Gift, label: 'A dedication page', desc: 'A message from you' },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: colors.bg, color: colors.ink }}>
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <Blob color={`${colors.pink}20`} className="w-[500px] h-[500px] -top-40 -left-40" />
        <Blob color={`${colors.blue}20`} className="w-[400px] h-[400px] top-20 -right-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-8"
          >
            <ArrowLeft size={14} /> All stories
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute w-[80%] h-[80%] rounded-full blur-3xl opacity-30"
                style={{ background: colors.softPink }}
              />
              <div
                className="w-64 h-64 lg:w-80 lg:h-80 relative"
                style={{ filter: 'drop-shadow(0 40px 50px rgba(42, 35, 32, 0.25))' }}
              >
                <BookCover book={book} />
              </div>
              <StarShape size={24} color={colors.yellow} className="absolute top-10 right-10 animate-shimmer" />
              <StarShape size={16} color={colors.purple} className="absolute bottom-20 left-8 animate-shimmer" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="inline-block text-xs tracking-[0.2em] uppercase mb-4 px-3 py-1.5 rounded-full font-semibold"
                style={{ background: colors.softPink, color: colors.pinkDeep }}
              >
                Ages {book.age}
              </div>

              <h1 className="font-display text-4xl lg:text-6xl leading-[1.05] mb-4">{book.title}</h1>

              <p className="font-script text-2xl lg:text-3xl mb-6" style={{ color: bookAccent }}>
                {book.tagline}
              </p>

              <p className="text-base lg:text-lg leading-relaxed mb-8 opacity-75 max-w-lg">
                {book.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: colors.bgSoft, color: colors.ink, border: `1px solid ${colors.softPink}` }}
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="https://wa.me/971585052184"
                  className="flex items-center gap-3 px-7 py-3.5 rounded-full transition-transform hover:scale-105 font-medium text-white"
                  style={{ background: colors.pink }}
                >
                  <MessageCircle size={16} />
                  Order on WhatsApp
                </a>
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
                >
                  How it works <ArrowRight size={14} />
                </Link>
              </div>

              <div className="text-xs opacity-60 flex items-center gap-4">
                <span>📦 Delivered in 5 days across the UAE</span>
                <span>•</span>
                <span>📐 21×21cm hardcover</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAYS TO PERSONALISE */}
      <section className="py-20 lg:py-24" style={{ background: colors.bgSoft }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
              Made just for them
            </div>
            <h2 className="font-display text-3xl lg:text-4xl">Ways we personalise this story</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalisationOptions.map((opt, i) => {
              const Icon = opt.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center transition-transform hover:-translate-y-1 duration-300"
                  style={{ background: '#fff' }}
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: colors.softPink }}
                  >
                    <Icon size={24} color={colors.pinkDeep} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg mb-1">{opt.label}</h3>
                  <p className="text-xs opacity-65 leading-relaxed">{opt.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SAMPLE SPREADS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
              A peek inside
            </div>
            <h2 className="font-display text-3xl lg:text-4xl">What the pages feel like</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: 'Opening spread', bg: `linear-gradient(135deg, ${book.accent} 0%, ${colors.softPink} 100%)` },
              { label: 'Mid-story moment', bg: `linear-gradient(135deg, ${colors.yellow} 0%, ${colors.softPink} 100%)` },
              { label: 'The big ending', bg: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.purple} 100%)` },
            ].map((spread, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
                style={{ background: spread.bg }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative text-center px-6">
                  <StarShape size={32} color="#FFFBF7" className="mx-auto mb-3 opacity-60" />
                  <div className="font-display text-xl text-white opacity-90">{spread.label}</div>
                  <div className="text-xs text-white opacity-60 mt-1 tracking-wide">Sample visualisation</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs opacity-50 mt-6 italic">
            Actual spreads include your child&apos;s photo and illustrated likeness.
          </p>
        </div>
      </section>

      {/* RELATED BOOKS */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24" style={{ background: colors.bgSoft }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <div className="text-xs tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: colors.pink }}>
                More stories
              </div>
              <h2 className="font-display text-3xl lg:text-4xl">You might also love</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((b) => (
                <Link key={b.slug} href={`/stories/${b.slug}`} className="group">
                  <div
                    className="aspect-square mb-4 transition-transform group-hover:-translate-y-2 duration-500"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(42, 35, 32, 0.12))' }}
                  >
                    <BookCover book={b} />
                  </div>
                  <div className="px-1">
                    <div
                      className="text-xs tracking-[0.15em] uppercase mb-1.5 font-semibold"
                      style={{ color: colors.pinkDeep }}
                    >
                      Ages {b.age}
                    </div>
                    <h3 className="font-display text-xl mb-1">{b.title}</h3>
                    <p className="text-sm leading-relaxed opacity-70">{b.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <Blob color={`${colors.pink}30`} className="w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center relative">
          <h2 className="font-display text-3xl lg:text-5xl mb-5 leading-tight">
            Ready to make <em style={{ color: colors.pink, fontStyle: 'italic' }}>{book.title}</em> theirs?
          </h2>
          <p className="text-base lg:text-lg opacity-70 mb-8">
            Message us on WhatsApp with your little one&apos;s name and photo. We&apos;ll take it from there.
          </p>
          <a
            href="https://wa.me/971585052184"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-transform hover:scale-105 font-medium text-white"
            style={{ background: colors.pink }}
          >
            <MessageCircle size={18} />
            Start your book
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
