import React from 'react'

const priceMap = {
  'Video': 1500,
  'Brand': 2200,
  'Ads': 1800,
}

export default function Calculator() {
  const [type, setType] = React.useState('Video')
  const [duration, setDuration] = React.useState(30) // seconds
  const [team, setTeam] = React.useState(2)
  const [options, setOptions] = React.useState({ drone: true, color: true, voice: false })

  const base = priceMap[type]
  const durationFactor = Math.max(1, duration / 30)
  const teamFactor = 1 + (team - 1) * 0.25
  const extras = (options.drone ? 350 : 0) + (options.color ? 250 : 0) + (options.voice ? 300 : 0)
  const price = Math.round(base * durationFactor * teamFactor + extras)

  const toggle = (k) => setOptions(o => ({ ...o, [k]: !o[k] }))

  const downloadPdf = () => {
    const text = `Estimate\nType: ${type}\nDuration: ${duration}s\nTeam size: ${team}\nOptions: ${Object.keys(options).filter(k=>options[k]).join(', ')||'None'}\n\nEstimated price: $${price}`
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'estimate.txt' // simple export
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="calculator" className="bg-white text-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">Cost Calculator</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-7">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Type of project</label>
              <select value={type} onChange={e=>setType(e.target.value)} className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 focus:ring-2 focus:ring-[color:var(--acc)] outline-none">
                {Object.keys(priceMap).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Duration (seconds)</label>
              <input type="range" min="15" max="180" value={duration} onChange={e=>setDuration(parseInt(e.target.value))} className="w-full accent-[color:var(--acc)]" />
              <div className="mt-1 text-sm text-neutral-600">{duration} seconds</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Team size</label>
              <input type="range" min="1" max="6" value={team} onChange={e=>setTeam(parseInt(e.target.value))} className="w-full accent-[color:var(--acc)]" />
              <div className="mt-1 text-sm text-neutral-600">{team} people</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { k:'drone', label:'Drone capture' },
                { k:'color', label:'Cinematic color' },
                { k:'voice', label:'Voiceover' },
              ].map(({k,label}) => (
                <button key={k} onClick={()=>toggle(k)} className={`rounded-xl border px-4 py-3 text-sm transition-all ${options[k] ? 'border-[color:var(--acc)] bg-[color:var(--acc)]/10 text-black' : 'border-neutral-200 hover:border-[color:var(--acc)]/50'}`}>{label}</button>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-neutral-200 bg-[#f8f8f8] p-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(50%_60% at 70% 20%, rgba(129,216,208,0.25), transparent 60%)'}}/>
            <div className="text-sm uppercase tracking-widest text-neutral-500">Your estimate</div>
            <div className="mt-4 text-6xl md:text-7xl font-black leading-none">
              <span className="text-neutral-900">$</span>
              <span className="text-[color:var(--acc)] transition-all" style={{filter:'drop-shadow(0 10px 30px rgba(129,216,208,0.35))'}}>{price.toLocaleString()}</span>
            </div>
            <p className="mt-4 text-neutral-600">Transparent, no-pressure estimate. Adjust your settings and watch the price update in real-time.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full border border-[color:var(--acc)] px-5 py-3 text-sm hover:bg-[color:var(--acc)] hover:text-black transition-all">Get Your Estimate</button>
              <button onClick={downloadPdf} className="rounded-full border border-neutral-300 px-5 py-3 text-sm hover:border-[color:var(--acc)] hover:text-[color:var(--acc)] transition-colors">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
