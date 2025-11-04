"use client"

import { Section } from "@/components/section"
import { Gift, Heart } from "lucide-react"

export function Registry() {
  return (
    <Section id="registry" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Monetary Gift Card */}
        <div className="rounded-2xl p-5 sm:p-8 md:p-10 border bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-md shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold" style={{ color: '#525E2C' }}>
                Monetary Gift
              </h2>
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="space-y-4 sm:space-y-5">
              <p className="leading-relaxed text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto" style={{ color: '#525E2C' }}>
                Your presence in celebrating our 50th wedding anniversary is already the greatest gift we could ever receive.
              </p>
              <p className="leading-relaxed text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto" style={{ color: '#525E2C' }}>
                But if you wish to share a token of love through a monetary gift, we would deeply appreciate giving or handing it personally — so we can thank you from the heart. 💛
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
