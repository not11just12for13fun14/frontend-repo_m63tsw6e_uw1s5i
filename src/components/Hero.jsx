import React from 'react'

const socials = [
  { name: 'Instagram', href: '#contacts', svg: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
  )},
  { name: 'TikTok', href: '#projects', svg: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14 3v7.2a4.8 4.8 0 1 1-4.8 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 3c.8 2 2.6 3.8 4.8 4.2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.2 12.8a3.2 3.2 0 1 0 3.2 3.2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { name: 'YouTube', href: '#projects', svg: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor"/>
    </svg>
  )},
  { name: 'X', href: '#projects', svg: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )}
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative h-screen w-full text-white">
      {/* Background video - replace src with your own video in public/videos/hero.mp4 */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover grayscale contrast-125"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/poster-hero.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Tiffany accent overlay for selective color feel */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20" style={{background:"radial-gradient(60%_60% at 50% 50%, rgba(129,216,208,0.35), transparent 70%)"}} />
      </div>

      {/* Gradient vignette for cinematic look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

      {/* Centered Heading */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[14vw] md:text-[9vw] leading-none tracking-[0.15em] font-extrabold">
          <span className="inline-block animate-[fadeIn_1.2s_ease-out]">JUST SEE</span>
        </h1>
        <p className="mt-5 text-lg md:text-2xl text-neutral-200 max-w-2xl animate-[fadeIn_1.6s_ease-out]">
          We create powerful visual stories
        </p>
        <button
          onClick={() => scrollTo('#projects')}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[color:var(--acc)] px-6 py-3 text-sm md:text-base tracking-wide transition-all duration-300 hover:bg-[color:var(--acc)] hover:text-black focus:outline-none focus:ring-2 focus:ring-[color:var(--acc)]/60"
        >
          <span>Explore Projects</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 backdrop-blur-md px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-sm bg-[color:var(--acc)]" />
              <span className="text-sm md:text-base tracking-widest text-white/90">JUST SEE STUDIO</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              {socials.map((s) => (
                <a key={s.name} href={s.href} className="p-2 rounded-md hover:text-[color:var(--acc)] transition-colors" aria-label={s.name}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  )
}
