import React from 'react'

const projects = [
  {
    id: 'p1',
    title: 'City Rhythm',
    tags: ['Video', 'Brand', 'Social'],
    src: '/videos/p1.mp4',
    poster: '/videos/poster-p1.jpg'
  },
  { id: 'p2', title: 'Neon Lines', tags: ['Ads', 'Brand'], src: '/videos/p2.mp4', poster: '/videos/poster-p2.jpg' },
  { id: 'p3', title: 'Monochrome Moves', tags: ['Video'], src: '/videos/p3.mp4', poster: '/videos/poster-p3.jpg' },
  { id: 'p4', title: 'Quiet Power', tags: ['Brand', 'Ads'], src: '/videos/p4.mp4', poster: '/videos/poster-p4.jpg' },
]

const filters = ['All', 'Video', 'Brand', 'Ads']

export default function Projects() {
  const [active, setActive] = React.useState('All')

  const filtered = projects.filter(p => active === 'All' || p.tags.includes(active))

  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Projects</h2>
          <div className="flex items-center gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm transition-all border ${active===f ? 'border-[color:var(--acc)] text-black bg-[color:var(--acc)]' : 'border-white/15 text-white/80 hover:text-white hover:border-[color:var(--acc)]/60'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[9/16] rounded-3xl border border-white/10 bg-[#111] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                {/* phone frame */}
                <div className="absolute inset-0 rounded-[2.2rem] border border-white/15 m-2"/>
                <div className="absolute inset-x-10 top-2 h-5 rounded-b-xl bg-black/60"/>
                <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-[color:var(--acc)]/0 group-hover:ring-[color:var(--acc)]/30 transition-[box-shadow] duration-300 rounded-3xl"/>

                <video className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                       autoPlay muted loop playsInline poster={p.poster}>
                  <source src={p.src} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="inline-block rounded-full bg-black/60 px-3 py-1 text-xs tracking-wide border border-[color:var(--acc)] text-white">{p.title}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/15 text-white/70 hover:text-[color:var(--acc)] transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
