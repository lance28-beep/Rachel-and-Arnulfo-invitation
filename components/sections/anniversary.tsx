"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Section } from "@/components/section"

type AnniversaryProps = {
  names?: string
}

export function AnniversarySection({
  names = "Rachel & Arnulfo",
}: AnniversaryProps) {
  // Build 21-image slideshow sequence: /Couple_img/couple (1).jpg ... (21).jpg
  const images = useMemo(() => {
    const basePath = "/Couple_img/couple "
    const ext = ".jpg"
    return Array.from({ length: 21 }, (_, i) => `${basePath}(${i + 1})${ext}`)
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  // Anniversary quotes
  const quotes = useMemo(
    () => [
      "Fifty years of love is not measured by time, but by the countless moments shared in faith, laughter, and devotion.",
      "Golden hearts, bound by a promise that only grows brighter through the years.",
      "Love that stood the test of time deserves not applause — but admiration and blessing.",
      "A lifetime together begins with a vow… and continues with choice, patience, and grace — every single day.",
      "They found forever not in fairy tales, but in the quiet strength of real love.",
      "Half a century of togetherness — and still, they choose each other.",
      "Love grows deeper, not older, when nurtured by faith and understanding.",
      "True love doesn’t fade with time; it becomes more radiant — just like gold.",
      "What God has joined fifty years ago, shines even brighter today.",
      "In a world where forever is rare, they made it real.",
    ],
    []
  )
  const quote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], [quotes])

  return (
    <Section
      id="anniversary"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF4E8] via-white to-white py-16 sm:py-20 md:py-24"
    >
      {/* Subtle gold background flourishes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-[#C6A66A]/10 blur-2xl" />
        <div className="absolute top-12 right-10 h-28 w-28 rounded-full bg-[#D6BC84]/20 blur-xl" />
        <div className="absolute bottom-16 left-1/3 h-px w-2/3 bg-gradient-to-r from-transparent via-[#C6A66A]/40 to-transparent" />
        <div className="absolute top-1/3 left-4 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D6BC84]/40 to-transparent rotate-3" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Photo card with torn-paper top/bottom and faded vintage effect */}
        <div className="relative overflow-hidden rounded-2xl bg-[#E8D8B7]/20 shadow-[0_8px_40px_rgba(64,41,33,0.15)]">
          {/* Top torn edge */}
          <svg
            className="absolute top-0 left-0 z-20 h-10 w-full text-[#E9E1CF]"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0,60 C150,90 300,20 450,40 C600,60 750,10 900,30 C1030,50 1120,20 1200,40 L1200,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>

          {/* Image wrapper */}
          <div className="relative h-[50vh] min-h-[320px] w-full sm:h-[60vh] md:h-[65vh]">
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={names}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 90vw"
                className={`object-cover object-center transition-opacity duration-700 ease-out ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Faded vintage overlay (sepia + soft wash) */}
            <div className="absolute inset-0 bg-[#6b4f3b]/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#EAD9BE]/50 via-transparent to-[#F9F5EC]/50 opacity-90" />

            {/* Subtle paper texture using radial noise via CSS gradients */}
            <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_20%_20%,rgba(0,0,0,.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,.05),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,.05),transparent_40%)]" />
          </div>

          {/* Bottom torn edge */}
          <svg
            className="absolute bottom-0 left-0 z-20 h-10 w-full rotate-180 text-[#E9E1CF]"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0,60 C150,90 300,20 450,40 C600,60 750,10 900,30 C1030,50 1120,20 1200,40 L1200,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>

          {/* Text overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-2 px-4 pb-6 text-center">
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#4A3A2A]">
                {names}
              </h3>
            </div>
            <div className="rounded-full bg-white/60 px-3 py-1 shadow-sm backdrop-blur-sm">
              <p className="text-xs sm:text-sm tracking-[0.02em] text-[#6B5132] max-w-[90%] sm:max-w-2xl">
                “{quote}”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground gold leaves/lines accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-6 top-6 h-24 w-24 opacity-50">
          <svg viewBox="0 0 120 120" className="h-full w-full">
            <g fill="none" stroke="#C9A86C" strokeWidth="1.5">
              <path d="M10,110 C50,80 70,40 110,10" />
              <path d="M25,105 C55,82 80,50 105,25" />
              <path d="M40,100 C60,85 85,55 100,40" />
            </g>
          </svg>
        </div>
        <div className="absolute -left-8 bottom-6 h-28 w-28 opacity-40 rotate-6">
          <svg viewBox="0 0 120 120" className="h-full w-full">
            <g fill="none" stroke="#D5BD89" strokeWidth="1.5">
              <path d="M10,110 C50,80 70,40 110,10" />
              <path d="M25,105 C55,82 80,50 105,25" />
              <path d="M40,100 C60,85 85,55 100,40" />
            </g>
          </svg>
        </div>
      </div>
    </Section>
  )
}


