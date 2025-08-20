import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav-bar flex items-center justify-between px-6 sm:px-10 py-6">
      <Link
        href="https://setfreedigitaldisciples.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
        aria-label="Designed by Set Free Digital Disciples"
      >
        <Image src="/SetFreeDigitalDisciplesPortal.png" alt="Lemonted Edition" width={50} height={50} className="rounded" />
      </Link>
      <nav className="hidden sm:flex items-center gap-3 sm:gap-4">
        <Link href="/store" className="btn-lemonted rounded-full px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide">Drops</Link>
        <Link href="/#story" className="btn-lemonted rounded-full px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide">Story</Link>
        <Link href="/#subscribe" className="btn-lemonted rounded-full px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide">Subscribe</Link>
      </nav>
    </header>
  );
}


