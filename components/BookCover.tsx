import type { Book } from '@/lib/books'

export function BookCover({ book }: { book: Book }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl w-full h-full bg-white">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
