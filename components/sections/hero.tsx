"use client"

import { Button } from "@/components/button"
import { siteConfig } from "@/content/site"
import BounceCards from "@/components/bounce-cards"

 

export function Hero() {
  const weddingImages: string[] = [
    "/Couple_img/couple (9).jpg",
    "/Couple_img/couple (3).jpg",
    "/Couple_img/couple (8).jpg",

  ]

  const transformStyles: string[] = [
    // "rotate(5deg) translate(-120px)",
    "rotate(5deg) translate(-110px)",
    "rotate(0deg)",
    "rotate(-5deg) translate(110px)",
    // "rotate(-5deg) translate(120px)",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-0 pb-8 sm:pb-12"
    >
      {/* Background Silk removed; using page-level Silk background */}

      {/* Multi-layered Gradient Overlay (palette-forward) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#866347]/25 via-[#C9A58D]/18 to-[#CEB08E]/12"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm md:bg-black/10"></div>

      {/* Top corner floral decorations */}
      <img
        src="/decoration/hero-flower-corner-top-left.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 z-10 w-40 sm:w-56 md:w-72 lg:w-80 opacity-90 select-none pointer-events-none"
      />
      <img
        src="/decoration/hero-flower-corner-top-left.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 z-10 w-40 sm:w-56 md:w-72 lg:w-80 opacity-90 select-none pointer-events-none transform scale-x-[-1]"
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 opacity-10">
        <div className="w-full h-full border-2 border-[#C9A58D] rounded-full rotate-45"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 opacity-10">
        <div className="w-full h-full border-2 border-[#CEB08E] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Center Content Layout */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          
          {/* Main Heading Section */}
          <div className="text-center space-y-1 sm:space-y-2 md:space-y-3 w-full">


            {/* Names */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-[#F1E8E3] tracking-wide leading-tight drop-shadow-2xl pb-0 mb-0">
              {siteConfig.couple.brideNickname} & {siteConfig.couple.groomNickname}
            </h1>
            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-[#CEB08E] font-medium mb-0 sm:mb-1 md:mb-2">
              Golden Wedding Anniversary
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3 md:my-4 lg:my-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#C9A58D]"></div>
              <div className="w-2 h-2 rounded-full bg-[#CEB08E]"></div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#C9A58D]"></div>
            </div>
          </div>

          {/* Image Gallery - Centered */}
          <div className="flex justify-center items-center w-full relative max-w-4xl px-2 sm:px-0">
            <BounceCards
              className="custom-bounceCards relative z-10"
              images={weddingImages}
              containerWidth={220}
              containerHeight={165}
              animationDelay={0.5}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>

          {/* Golden Anniversary Card */}
          <div className="w-full max-w-3xl px-2 sm:px-0">
            <div className="relative bg-gradient-to-br from-[#866347]/40 via-[#3f2a1f]/35 to-[#866347]/25 backdrop-blur-md rounded-2xl p-5 sm:p-7 md:p-9 lg:p-12 border border-[#C9A58D]/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C9A58D] rounded-tl-xl"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C9A58D] rounded-tr-xl"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C9A58D] rounded-bl-xl"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C9A58D] rounded-br-xl"></div>

              <div className="text-center space-y-4 sm:space-y-5 relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#F1E8E3] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                  With hearts full of gratitude and joy,
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#F1E8E3]/90 leading-relaxed">
                  we invite you to join us in celebrating 50 beautiful years
                  of love, faith, and togetherness.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#F1E8E3]/85 leading-relaxed">
                  Through every season, they’ve shared laughter, strength, and unwavering devotion —
                  a golden story that continues to shine brighter with time.
                </p>

                <div className="flex items-center justify-center gap-3 sm:gap-4 my-1 sm:my-2">
                  <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#C9A58D]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#CEB08E]"></div>
                  <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#C9A58D]"></div>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <p className="text-lg sm:text-xl md:text-2xl text-[#F1E8E3] font-semibold drop-shadow-md">
                    Thursday, December 4, 2025
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-[#CEB08E] font-medium drop-shadow-md">
                    4:00 PM
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-[#F1E8E3]/85 leading-relaxed drop-shadow-md">
                    Holy Cross Chapel, 570th
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#F1E8E3]/90 leading-relaxed pt-2">
                  Let us honor this timeless love and witness once more
                  as Rachel and Arnulfo renew their vows —
                  a promise that truly lasts a lifetime. 💍✨
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 justify-center w-full max-w-xl flex-wrap">
            <Button
              href="#narrative"
              variant="primary"
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-[#866347] via-[#C9A58D] to-[#866347] border border-[#CEB08E]/70 text-[#F1E8E3] shadow-lg hover:shadow-[0_10px_28px_rgba(134,99,71,0.35)] hover:scale-[1.02] hover:border-[#C9A58D] hover:text-[#F1E8E3] hover:from-[#C9A58D] hover:via-[#CEB08E] hover:to-[#C9A58D] active:scale-[0.98]"
            >
              Our Love Story
            </Button>
            <Button
              href="#guest-list"
              variant="outline"
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-lg transition-all duration-500 ease-in-out bg-[#F1E8E3] border-2 border-[#866347] text-[#866347] text-center shadow-md hover:shadow-[0_10px_24px_rgba(134,99,71,0.25)] hover:scale-[1.02] hover:bg-[#FFE5E4] hover:border-[#866347] hover:text-[#866347] active:scale-[0.98]"
            >
              RSVP
            </Button>
            <Button
              href="/invitation.jpg"
              variant="outline"
              download
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-lg transition-all duration-500 ease-in-out bg-[#F1E8E3] border-2 border-[#C9A58D] text-[#866347] text-center shadow-md hover:shadow-[0_10px_24px_rgba(134,99,71,0.25)] hover:scale-[1.02] hover:bg-[#FFE5E4] hover:border-[#866347] hover:text-[#866347] active:scale-[0.98]"
            >
              Download Invitation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
