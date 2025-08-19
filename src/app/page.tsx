import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans">
      <main className="relative isolate min-h-screen overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 hero-grain" />
          <div className="absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full blur-[120px] opacity-[0.18] accent-pink" />
          <div className="absolute -bottom-24 -right-16 h-[520px] w-[520px] rounded-full blur-[140px] opacity-[0.18] accent-yellow" />
        </div>

        {/* Nav */}
        <header className="nav-bar flex items-center justify-between px-6 sm:px-10 py-6">
          <div className="flex items-center gap-3">
            <Image src="/fresh-squeezed-lemonted-edition.png" alt="Lemonted Edition" width={36} height={36} className="rounded" />
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-white/70 text-sm">
            <a href="#drops" className="hover:text-white">Drops</a>
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#subscribe" className="hover:text-white">Subscribe</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="px-6 sm:px-10 pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <Image
                src="/fresh-squeezed-set-free-lemonted-edition.png"
                alt="Lemonted Edition logo"
                width={560}
                height={560}
                className="w-full max-w-[560px] h-auto mx-auto"
                priority
                sizes="(min-width: 1024px) 720px, (min-width: 640px) 560px, 90vw"
              />
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="title-layer">
                <span aria-hidden className="title-stroke">HOLY BUT HOOD.</span>
                <span className="title-fill">HOLY BUT HOOD.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg neon-yellow-pink-outline-md">
              Lemonted Edition is more than just streetwear—it’s a lifestyle squeezed straight from the grind and served lemonted fresh. Born out of hustle, faith, and raw creativity, we design pieces that hit like fresh lemonade on a hot day: sharp, refreshing, and impossible to ignore.
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg neon-yellow-pink-outline-sm">
              Our clothes carry the DNA of the streets—skater cuts, hood-inspired designs, and unapologetic statements—blended with a touch of light and hope. Every drop is limited, every release is a statement, and every piece is built to stand out while staying true.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a href="#drops" className="btn-lemonted rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide">Shop Lemonted Drops</a>
              <a href="#story" className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide badge-lemonted">Our Story</a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4 text-white/60 text-xs uppercase tracking-wide">
              <span className="badge-lemonted rounded-full px-2 py-1">Limited by design</span>
              <span className="badge-lemonted rounded-full px-2 py-1">Legendary by nature</span>
            </div>
          </div>
        </section>

        {/* Feature Banner */}
        <section id="drops" className="px-6 sm:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl card-surface">
              <Image
                src="/lemonted-edition-playa-made-lemonade.PNG"
                alt="Lemonted Edition – Playa Made Lemonade"
                fill
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-8 rounded-2xl card-surface">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="neon-yellow-pink-outline-md">Fresh Squeezed. Street Approved.</span>
              </h2>
              <p className="neon-yellow-pink-outline-sm">
                We don’t just sell clothes. We bottle up resilience, redemption, and realness—then stitch it into every hoodie, tee, and cap. Because Lemonted Edition isn’t about fitting in; it’s about turning life’s lemons into a streetwear legacy.
              </p>
              <div className="mt-2">
                <a href="#subscribe" className="btn-lemonted rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide">Notify Me</a>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="px-6 sm:px-10 pb-24">
          <div className="max-w-4xl">
            <h3 className="text-xl uppercase tracking-[0.25em] neon-yellow-pink-outline-sm">Manifesto</h3>
            <p className="mt-4 neon-yellow-pink-outline-sm">
              Every drop is limited, every release is a statement, and every piece is built to stand out while staying true. Skater cuts. Hood-inspired silhouettes. Light and hope in bold color. That’s the code.
            </p>
            <p className="mt-3 neon-yellow-pink-outline-sm">
              Lemonted Edition – Playa Made. Holy But Hood. Limited by design, legendary by nature.
            </p>
          </div>
        </section>

        {/* Subscribe */}
        <section id="subscribe" className="px-6 sm:px-10 pb-28">
          <div className="max-w-3xl rounded-2xl card-surface p-6 sm:p-8">
            <h4 className="text-2xl font-bold">Stay in the know</h4>
            <p className="mt-2 neon-yellow-pink-outline-sm">Get first access to limited drops and restocks.</p>
            <form className="mt-5 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-black/40 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--lemonted-pink)]"
              />
              <button type="submit" className="btn-lemonted rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide">Join</button>
            </form>
            <p className="mt-3 text-[11px] neon-yellow-pink-outline-sm">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 sm:px-10 pb-10 flex items-center justify-between text-xs text-white/50">
          <span className="neon-yellow-pink-outline-sm">© {new Date().getFullYear()} Lemonted Edition</span>
          <span className="neon-yellow-pink-outline-sm">Lemonted by design · Legendary by nature</span>
        </footer>
      </main>
    </div>
  );
}
