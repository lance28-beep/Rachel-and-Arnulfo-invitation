"use client"

import { useEffect, useRef, useState } from "react"

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only load audio after page is fully loaded and user interacts
    // This prevents blocking initial page load (5-10MB file)
    const loadAudio = () => {
      if (isLoaded || audioRef.current) return

      // Check if page is fully loaded
      if (document.readyState !== 'complete') {
        window.addEventListener('load', loadAudio, { once: true })
        return
      }

      const audio = new Audio("/background_music/Kina Grannis ft. Imaginary Future - I Will Spend My Whole Life Loving You (lyrics).mp3")
      audio.loop = true
      audio.volume = 0.5
      audio.preload = 'none' // Don't preload, only load on demand
      audioRef.current = audio
      setIsLoaded(true)

      const handleUserInteraction = () => {
        if (audioRef.current && audioRef.current.readyState === 0) {
          // Load audio source only when user interacts
          audioRef.current.load()
        }
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.log("Autoplay prevented:", error)
          })
          document.removeEventListener("click", handleUserInteraction)
          document.removeEventListener("touchstart", handleUserInteraction)
        }
      }

      document.addEventListener("click", handleUserInteraction, { once: true })
      document.addEventListener("touchstart", handleUserInteraction, { once: true })
    }

    // Delay initial load check to prioritize critical resources
    const timer = setTimeout(loadAudio, 2000)
    
    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [isLoaded])

  return null
}

export default BackgroundMusic


