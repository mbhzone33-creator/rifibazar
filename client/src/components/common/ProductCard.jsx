import { Link } from 'react-router';
import { PRICE_PER_KG, taka } from '../../data/products';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex md:flex-col items-stretch bg-white rounded-2xl overflow-hidden border border-ink/10 w-full md:w-[calc(33.333%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
    >
      <div
        className="relative w-[38%] md:w-full shrink-0 grid place-items-center p-3 md:p-5"
        style={{ background: product.tone }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={product.imageFilter ? { filter: product.imageFilter } : undefined}
          className="w-full aspect-[4/5] object-contain drop-shadow-[0_10px_14px_rgba(60,25,5,0.25)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-3.5 md:p-4">
        <h3 className="font-display text-xl md:text-[1.35rem] leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-ink/70 mt-1 leading-snug">{product.tagline}</p>

        <div className="mt-auto pt-3 flex items-end justify-between gap-2">
          <div>
            <span className="text-xl font-bold text-brand-deep">
              {taka(PRICE_PER_KG)}
            </span>
            <span className="text-xs text-ink/60"> / কেজি</span>
          </div>
          <span className="text-sm font-semibold bg-ink text-rosh px-3.5 py-2 rounded-full group-hover:bg-leaf transition-colors">
            কিনুন
          </span>
        </div>
      </div>
    </Link>
  );
}
