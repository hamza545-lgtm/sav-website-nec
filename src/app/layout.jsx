import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientEffects, { MotionProvider } from '@/components/ClientEffects'
import { SITE_URL, DEFAULT_TITLE, pageMeta, organizationJsonLd, jsonLdScript } from '@/data/seo'
import './globals.css'

// Brand fonts, self-hosted by Next.js at build time (no request to Google from the visitor's browser).
const sans = Inter_Tight({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })
// Inter (the open-spaced sibling of Inter Tight) for navigation, where small text must read instantly.
const ui = Inter({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-ui', display: 'swap' })

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: pageMeta['/'].description,
  applicationName: 'Savnec',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // Keep this: it verifies savnec.com in Google Search Console.
  verification: { google: 'xHh63NQxWwkSMx1iJlw-J4VYLrU4S504IxOF9GpJFr0' },
}

export const viewport = {
  themeColor: '#F8F7F3',
}

// Runs before the first paint: lets the CSS know scripts are on, so scroll-in animations can
// start hidden. Without JavaScript nothing is ever hidden.
const jsFlag = "document.documentElement.classList.add('js')"

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${mono.variable} ${ui.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
        <MotionProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <ClientEffects />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  )
}
