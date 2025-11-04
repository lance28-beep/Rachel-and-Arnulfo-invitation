import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', // Prevent invisible text during font load
  preload: true,
})
const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-serif",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Rachel & Arnulfo - Wedding Invitation",
  description:
    "You're invited to the wedding of Rachel & Arnulfo! Join us on December 4, 2025 in Palawan, Philippines. RSVP, read our love story, view our gallery, and leave a message for the couple.",
  keywords:
    "Rachel & Arnulfo wedding, Filipino wedding, RSVP, wedding gallery, wedding message wall, wedding invitation, 2025 weddings, love story, guestbook, wedding registry, wedding details, wedding venues Palawan, #RachelAndArnulfoWedding",
  authors: [
    { name: "Rachel" },
    { name: "Arnulfo" },
  ],
  creator: "Rachel & Arnulfo",
  publisher: "Rachel & Arnulfo",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://Rachel-and-Arnulfo-invitation.vercel.app/"),
  alternates: {
    canonical: "https://Rachel-and-Arnulfo-invitation.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Rachel & Arnulfo Wedding | December 4, 2025",
    description:
      "Celebrate the union of Rachel & Arnulfo on December 4, 2025 in Palawan, Philippines. Discover our love story, RSVP, view the gallery, and leave your wishes!",
    url: "https://Rachel-and-Arnulfo-invitation.vercel.app/",
    siteName: "Rachel & Arnulfo Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://Rachel-and-Arnulfo-invitation.vercel.app/invitation.jpg",
        width: 1200,
        height: 630,
        alt: "Rachel & Arnulfo Wedding Invitation - December 4, 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachel & Arnulfo Wedding Invitation",
    description:
      "You're invited to the wedding of Rachel & Arnulfo! December 4, 2025. RSVP, view our gallery, and leave a message! #RachelAndArnulfoWedding",
    images: ["https://Rachel-and-Arnulfo Wedding-invitation.vercel.app/invitation.jpg"],
    creator: "@rachelandarnulfo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Rachel & Arnulfo Wedding",
      startDate: "2026-01-10T14:00:00+08:00",
      endDate: "2026-01-10T22:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "Holy Cross Chapel",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Puerto Princesa City, Palawan",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://Rachel-and-Arnulfo-invitation.vercel.app/invitation.jpg"],
      description:
        "You're invited to the wedding of Rachel & Arnulfo! Join us on December 4, 2025 in Palawan, Philippines. RSVP, read our love story, view our gallery, and leave a message for the couple.",
      organizer: {
        "@type": "Person",
        name: "Rachel & Arnulfo",
      },
      offers: {
        "@type": "Offer",
        url: "https://Rachel-and-Arnulfo-invitation.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
      eventHashtag: "#RachelAndArnulfoWedding",
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#866347" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        {/* Fonts are automatically preloaded by Next.js font optimization */}
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} font-inter antialiased text-foreground`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
