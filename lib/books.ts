export type BookIconType = 'mountain' | 'star' | 'flower' | 'heart' | 'compass' | 'wave'

export type AgeRange = '0-2' | '2-4' | '4-6'

export type Book = {
  slug: string
  title: string
  tagline: string
  longDescription: string
  age: string
  ageRange: AgeRange
  themes: string[]
  image: string
  accent: string
}

export const books: Book[] = [
  {
    slug: 'chloe-saves-the-day',
    title: 'Chloe Saves the Day',
    tagline: 'A jungle adventure with a brave little hero',
    longDescription:
      "Deep in a whispering jungle, a lost fox, a shy rabbit, and a sleepy kitten need a friend who's brave and kind. That friend is your little one. A story about courage, friendship, and the quiet magic of saying \"I'll help.\"",
    age: '4–6 yrs',
    ageRange: '4-6',
    themes: ['Adventure', 'Courage', 'Friendship'],
    image: '/books/chloe-saves-the-day.png',
    accent: '#FD72A4',
  },
  {
    slug: 'jacks-zoo-adventure',
    title: "Jack's Zoo Adventure",
    tagline: 'Balloons, big animals, and the best day ever',
    longDescription:
      'The zoo is full of lions, tigers, elephants, and giraffes — and one very excited little visitor. A bright, joyful first-story for little explorers discovering animals and adventure.',
    age: '2–4 yrs',
    ageRange: '2-4',
    themes: ['First Book', 'Animals', 'Fun'],
    image: '/books/jacks-zoo-adventure.png',
    accent: '#FDF940',
  },
  {
    slug: 'jacks-big-brother-adventure',
    title: "Jack's Big Brother Adventure",
    tagline: 'Becoming a big brother feels like magic',
    longDescription:
      "When a new baby arrives, your child steps into the most important role they'll ever play: big brother or big sister. A tender, sparkling story to help little ones welcome a sibling with love and pride.",
    age: '2–4 yrs',
    ageRange: '2-4',
    themes: ['Family', 'Sibling', 'Keepsake'],
    image: '/books/jacks-big-brother-adventure.png',
    accent: '#6DBFE2',
  },
  {
    slug: 'kiaans-abc-adventure',
    title: "Kiaan's ABC Adventure",
    tagline: 'Letters that leap off the page',
    longDescription:
      'A is for adventure. B is for brave. C is for... your child. A lively alphabet journey where every letter unlocks a new character and a new surprise. Perfect for budding readers.',
    age: '2–4 yrs',
    ageRange: '2-4',
    themes: ['Learning', 'ABC', 'Early Reader'],
    image: '/books/kiaans-abc-adventure.png',
    accent: '#C459C5',
  },
  {
    slug: 'avas-big-color-hunt',
    title: "Ava's Big Color Hunt",
    tagline: 'A playful journey through colors for little explorers',
    longDescription:
      "A tiny artist on a big adventure — chasing rainbows, painting the world, and discovering each color as a new friend. Gentle rhymes and soft illustrations for baby's very first book.",
    age: '0–2 yrs',
    ageRange: '0-2',
    themes: ['First Book', 'Colors', 'Baby'],
    image: '/books/avas-big-color-hunt.png',
    accent: '#FD72A4',
  },
  {
    slug: 'my-first-day-of-school',
    title: 'My First Day of School',
    tagline: 'A big day for a big little hero',
    longDescription:
      'New backpack, butterflies in the tummy, and a world waiting just outside the gate. A warm, reassuring story to celebrate the milestone every parent remembers — and every child deserves a book for.',
    age: '4–6 yrs',
    ageRange: '4-6',
    themes: ['Milestone', 'School', 'Confidence'],
    image: '/books/my-first-day-of-school.png',
    accent: '#FDF940',
  },
  {
    slug: 'my-magical-mum',
    title: 'My Magical Mum',
    tagline: 'A love letter, wrapped in pages',
    longDescription:
      "The softest hugs, the silliest songs, the way everything feels safe when she's near. A keepsake book celebrating mothers — perfect for Mother's Day, birthdays, or just because.",
    age: '2–4 yrs',
    ageRange: '2-4',
    themes: ['Family', "Mother's Day", 'Keepsake'],
    image: '/books/my-magical-mum.png',
    accent: '#FD72A4',
  },
  {
    slug: 'all-things-kiaan-can-be',
    title: 'All Things Kiaan Can Be',
    tagline: 'A firefighter. An astronaut. A hero. Them.',
    longDescription:
      "Today a doctor, tomorrow a pilot, next week a painter. A big-dreams story that casts your child in every role they've ever imagined — with a message that they can be anything they want to be.",
    age: '4–6 yrs',
    ageRange: '4-6',
    themes: ['Dreams', 'Careers', 'Confidence'],
    image: '/books/all-things-kiaan-can-be.png',
    accent: '#6DBFE2',
  },
]

export const ages = [
  { range: '0–2', ageRange: '0-2' as AgeRange, label: 'First Stories', sub: 'Soft tales for tiny hands', bg: '#F4D7D9', tone: '#D85589' },
  { range: '2–4', ageRange: '2-4' as AgeRange, label: 'Little Explorers', sub: 'Big feelings, bright pages', bg: '#C7E6F3', tone: '#2E7A9A' },
  { range: '4–6', ageRange: '4-6' as AgeRange, label: 'Big Imaginations', sub: 'Adventures that feel like home', bg: '#FEF3A8', tone: '#8A6800' },
]

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}

export function getRelatedBooks(currentSlug: string, count: number = 3): Book[] {
  return books.filter((b) => b.slug !== currentSlug).slice(0, count)
}

export function getBooksByAge(ageRange: AgeRange): Book[] {
  return books.filter((b) => b.ageRange === ageRange)
}
