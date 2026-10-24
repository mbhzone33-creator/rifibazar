import { Link } from 'react-router';
import { Phone } from 'lucide-react';
import logo from '../../assets/icon.png';
import { PHONE_TEL } from '../../data/products';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-rosh">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-paper grid place-items-center shrink-0">
            <img src={logo} alt="" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
          </span>
          <span className="font-display text-xl md:text-2xl leading-none truncate">
            রিফি বাজার
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 md:gap-3 text-sm">
          <Link
            to="/#combos"
            className="hidden sm:inline-block px-3 py-2 rounded-full hover:bg-white/10"
          >
            কম্বো অফার
          </Link>
          <Link
            to="/acher"
            className="px-3 py-2 rounded-full hover:bg-white/10 whitespace-nowrap"
          >
            গিভঅ্যাওয়ে
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="কল করুন"
            className="flex items-center gap-1.5 bg-brand text-ink font-semibold pl-3 pr-3.5 py-2 rounded-full"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">কল করুন</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
