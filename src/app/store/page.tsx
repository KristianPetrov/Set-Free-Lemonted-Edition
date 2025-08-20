import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store – Lemonted Edition Drops",
  description:
    "Shop limited drops from Lemonted Edition: Hats, T‑Shirts, Crop Tops, Shirt Dresses, and Hoodies.",
};

const categories: Array<{ key: string; label: string; tagline: string }> = [
  { key: "hats", label: "Hats", tagline: "Crown the hustle" },
  { key: "t-shirts", label: "T‑Shirts", tagline: "Everyday statements" },
  { key: "crop-tops", label: "Crop Tops", tagline: "Cut bold, play loud" },
  { key: "shirt-dresses", label: "Shirt Dresses", tagline: "Flow and flex" },
  { key: "hoodies", label: "Hoodies", tagline: "Warmth with attitude" },
];

export default function StorePage() {
  return (
    <div className="min-h-screen w-full font-sans">
      <main className="relative isolate px-6 sm:px-10 py-10">
        {/* Background texture and accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 hero-grain" />
          <div className="absolute -top-24 -left-16 h-[420px] w-[420px] rounded-full blur-[120px] opacity-[0.18] accent-pink" />
          <div className="absolute -bottom-24 -right-16 h-[520px] w-[520px] rounded-full blur-[140px] opacity-[0.18] accent-yellow" />
        </div>
        <header className="max-w-6xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="title-layer">
              <span aria-hidden className="title-stroke">DROPS</span>
              <span className="title-fill">DROPS</span>
            </span>
          </h1>
          <p className="mt-3 neon-yellow-pink-outline-sm">Limited by design. Legendary by nature.</p>
        </header>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, label, tagline }) => (
            <Link
              key={key}
              href={`/store?category=${encodeURIComponent(key)}`}
              className="card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-4 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div>
                <h2 className="text-2xl font-extrabold neon-yellow-pink-outline-md">{label}</h2>
                <p className="mt-1 text-xs neon-yellow-pink-outline-sm">{tagline}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[11px] neon-yellow-pink-outline-sm uppercase tracking-wider">Limited drop</span>
                <span className="btn-lemonted rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide">Explore</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}


