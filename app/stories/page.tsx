'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { books, ages, type AgeRange } from '@/lib/books'
import { colors } from '@/lib/colors'
import { Blob, StarShape } from '@/components/ui'
import { BookCover } from '@/components/BookCover'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type Filter = 'all' | AgeRange

export default function StoriesPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filteredBooks = filter === 'all' ? books : books.filter((b) => b.ageRange === filter)

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All stories' },
    ...ages.map((a) => ({ key: a.ageRange as Filter, label: `Ages ${a.range}` })),
  ]

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: colors.bg, color: colors.ink }}>
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <Blob color={`${colors.pink}25`} className="w-[500px] h-[500px] -top-40 -left-40" />
        <Blob color={`${colors.yellow}30`} className="w-[400px] h-[400px] top-20 -right-20" />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <div className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: colors.pink }}>
            Our stories
          </div>
          <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] mb-6">
            Find their <span style={{ color: colors.pink }}>next favourite</span> story.
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto opacity-70">
            Every story is designed to be personalised — your child&apos;s face, their name, a world woven around them.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => {
              const active = filter === f.key
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: active ? colors.pink : '#fff',
                    color: active ? '#fff' : colors.ink,
                    border: `1px solid ${active ? colors.pink : colors.softPink}`,
                  }}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOOK GRID */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10"
            >
              {filteredBooks.map((book) => (
                <Link key={book.slug} href={`/stories/${book.slug}`} className="group">
                  <div
                    className="aspect-square mb-4 transition-transform group-hover:-translate-y-2 duration-500"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(42, 35, 32, 0.12))' }}
                  >
                    <BookCover book={book} />
                  </div>
                  <div className="px-1">
                    <div
                      className="text-xs tracking-[0.15em] uppercase mb-1.5 font-semibold"
                      style={{ color: colors.pinkDeep, opacity: 0.9 }}
                    >
                      Ages {book.age}
                    </div>
                    <h3 className="font-display text-lg md:text-xl mb-1">{book.title}</h3>
                    <p className="text-xs md:text-sm leading-relaxed opacity-70 mb-2">{book.tagline}</p>
                    <div className="flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.pinkDeep }}>
                      View story <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20 opacity-60">
              <StarShape size={40} color={colors.pink} className="mx-auto mb-4 animate-shimmer" />
              <p className="text-sm">No stories yet for this age group. More coming soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
