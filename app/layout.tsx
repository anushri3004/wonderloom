import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "WonderLoom — Stories Where They're the Hero",
  description:
    'Personalised hardcover storybooks for kids, handmade in the UAE. Your child becomes the hero of their own adventure.',
  keywords: ['personalised books', 'kids books', 'custom storybooks', 'UAE', 'Dubai', 'children gifts'],
  openGraph: {
    title: "WonderLoom — Stories Where They're the Hero",
    description: 'Personalised hardcover storybooks for kids, handmade in the UAE.',
    url: 'https://wonderloom.ai',
    siteName: 'WonderLoom',
    locale: 'en_AE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Englebert&family=Montserrat:wght@300;400;500;600;700&family=Caveat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
