import React from 'react'

const members = [
  { id:'m1', name:'Ava Carter', role:'Producer', img:'/team/producer.jpg', bio:'Ava orchestrates each project with clarity and care. From planning to delivery, she keeps the energy high and the process smooth.' },
  { id:'m2', name:'Mason Reed', role:'Director', img:'/team/director.jpg', bio:'Mason brings the cinematic touch. His eye for composition and rhythm turns ideas into memorable frames.' },
  { id:'m3', name:'Rio Lane', role:'Media', img:'/team/media.jpg', bio:'Rio handles the magic behind the scenes — edits, sound, and delivery with premium polish.' },
]

export default function Team() {
  const [open, setOpen] = React.useState(null)

  return (
    <section id="team" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map(m => (
            <div key={m.id} className="group relative">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--acc)]/50">
                <img src={m.img} alt={m.name} className="h-80 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
              </div>
              <div className="mt-4">
                <div className="text-xl font-semibold">{m.name}</div>
                <div className="text-sm text-white/70">{m.role}</div>
              </div>
              <button onClick={()=>setOpen(m)} className="mt-3 text-sm text-[color:var(--acc)] hover:underline">Read bio</button>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={()=>setOpen(null)} />
          <div className="relative z-10 max-w-md w-full rounded-2xl border border-white/10 bg-neutral-900 p-6 text-white animate-in" style={{animation:'fadeIn .25s ease'}}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{open.name}</div>
                <div className="text-sm text-white/70">{open.role}</div>
              </div>
              <button onClick={()=>setOpen(null)} className="p-2 rounded-md hover:text-[color:var(--acc)]" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">{open.bio}</p>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  )
}
