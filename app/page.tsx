"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"
import { Countdown } from "@/components/sections/countdown"
import { Narrative } from "@/components/sections/narrative"
// Lazy load heavy components below the fold
const Gallery = dynamic(() => import("@/components/sections/gallery").then(mod => ({ default: mod.Gallery })), {
  loading: () => <div className="min-h-screen" />,
})
const Messages = dynamic(() => import("@/components/sections/messages").then(mod => ({ default: mod.Messages })), {
  loading: () => <div className="min-h-screen" />,
})
import { Details } from "@/components/sections/details"
import { Entourage } from "@/components/sections/entourage"
import { PrincipalSponsors } from "@/components/sections/principal-sponsors"
import { BookOfGuests } from "@/components/sections/book-of-guests"
// Lazy load components below the fold
const Registry = dynamic(() => import("@/components/sections/registry").then(mod => ({ default: mod.Registry })), {
  loading: () => <div className="min-h-[400px]" />,
})
const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="min-h-[400px]" />,
})
const SnapShare = dynamic(() => import("@/components/sections/snap-share").then(mod => ({ default: mod.SnapShare })), {
  loading: () => <div className="min-h-[400px]" />,
})
import { Footer } from "@/components/sections/footer"
import { AnniversarySection } from "@/components/sections/anniversary"

const Silk = dynamic(() => import("@/components/silk"), { ssr: false })
const GuestList = dynamic(() => import("@/components/sections/guest-list").then(mod => ({ default: mod.GuestList })), { ssr: false })
// Lazy load background music - only load after page is interactive
const BackgroundMusic = dynamic(() => import("@/components/background-music"), { 
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <main className="relative">
      {/* Background music loads after page is interactive */}
      <BackgroundMusic />
      {/* Silk Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-primary/10 to-secondary/5" />}>
          <Silk speed={5} scale={1.1} color="#dbae4b" noiseIntensity={0.8} rotation={0.3} />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AnniversarySection />
        <Countdown />
        <Narrative />
        <Gallery />
        <Messages />
        <Details />
        {/* <Entourage /> */}
        {/* <PrincipalSponsors /> */}
        <GuestList />
        <BookOfGuests />
        <Registry />
        <FAQ />
        <SnapShare />
        <Footer />
      </div>
    </main>
  )
}
