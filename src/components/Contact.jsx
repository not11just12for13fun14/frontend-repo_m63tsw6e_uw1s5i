import React from 'react'

export default function Contact() {
  return (
    <section id="contacts" className="bg-white text-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">Let’s Connect</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Name</label>
              <input className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:ring-2 focus:ring-[color:var(--acc)] outline-none" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Company</label>
              <input className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:ring-2 focus:ring-[color:var(--acc)] outline-none" placeholder="Company or brand" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Email</label>
              <input type="email" className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:ring-2 focus:ring-[color:var(--acc)] outline-none" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-1">Message</label>
              <textarea rows="5" className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:ring-2 focus:ring-[color:var(--acc)] outline-none" placeholder="Tell us about your project" />
            </div>
            <div className="flex gap-3">
              <button className="rounded-full border border-[color:var(--acc)] px-5 py-3 text-sm hover:bg-[color:var(--acc)] hover:text-black transition-all">Send Message</button>
              <a href="#hero" className="rounded-full border border-neutral-300 px-5 py-3 text-sm hover:border-[color:var(--acc)] hover:text-[color:var(--acc)] transition-colors">Back to top</a>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-[#f8f8f8]">
              <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Contact</div>
              <p className="text-lg">hello@justsee.studio</p>
              <p className="text-lg">+1 (555) 012-3456</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <div className="h-48 w-full rounded-xl bg-[linear-gradient(135deg,#efefef,#fafafa)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-60" style={{background:'repeating-linear-gradient(0deg, #ddd 0, #ddd 1px, transparent 1px, transparent 6px)'}} />
                <div className="absolute inset-6 rounded-lg border border-neutral-300" />
                <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[color:var(--acc)]" />
              </div>
              <div className="mt-3 text-sm text-neutral-600">Minimal monochrome map (placeholder).</div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between text-sm text-neutral-500">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[color:var(--acc)] rounded-sm"/>
            <span>JUST SEE STUDIO</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[color:var(--acc)]" href="#">Privacy</a>
            <a className="hover:text-[color:var(--acc)]" href="#hero">Back to top</a>
          </div>
        </div>
      </div>
    </section>
  )
}
