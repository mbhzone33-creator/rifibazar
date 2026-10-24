import { Link } from 'react-router';
import { Phone, Globe } from 'lucide-react';
import logo from '../../assets/icon.png';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  products,
} from '../../data/products';

export default function Footer() {
  return (
    <footer className="bg-ink text-rosh/80 pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-full bg-paper grid place-items-center">
              <img src={logo} alt="" className="w-8 h-8 object-contain" />
            </span>
            <span className="font-display text-2xl text-rosh">রিফি বাজার</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            খাঁটি খেজুর গুড় পৌঁছে যাবে সারাদেশে, ক্যাশ অন ডেলিভারিতে।
          </p>
        </div>

        <div>
          <p className="font-semibold text-rosh mb-3">আমাদের গুড়</p>
          <ul className="space-y-2 text-sm">
            {products.map(p => (
              <li key={p.id}>
                <Link to={`/product/${p.id}`} className="hover:text-brand">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-rosh mb-3">যোগাযোগ</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-brand">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4" aria-hidden="true" />
              {SITE_URL}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span>© রিফি বাজার</span>
          <span>
            Design and develop by{' '}
            <a
              href="https://delt-a-digivast-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline"
            >
              Delta Digivast
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
