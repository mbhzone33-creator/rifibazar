import { Link } from 'react-router';
import { bn, getProduct, taka, weightLabel, DELIVERY_CHARGE } from '../../data/products';

export default function ComboCard({ combo }) {
  const included = combo.items.map(i => ({ ...i, product: getProduct(i.id) }));

  return (
    <article className="bg-paper text-ink rounded-3xl p-5 flex flex-col border-2 border-transparent hover:border-brand transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl leading-tight">{combo.name}</h3>
          <p className="text-sm text-ink/70 mt-1">{combo.tagline}</p>
        </div>
        <span className="shrink-0 text-xs font-bold bg-leaf text-white px-3 py-1.5 rounded-full">
          {combo.badge}
        </span>
      </div>

      {/* কম্বোর ভেতরের গুড়গুলোর ছোট ছবি */}
      <ul className="flex mt-4 -space-x-3" aria-label="কম্বোর গুড়সমূহ">
        {included.map(({ product, id }) => (
          <li
            key={id}
            className="w-14 h-14 rounded-full border-[3px] border-paper grid place-items-center overflow-hidden"
            style={{ background: product.tone }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={product.imageFilter ? { filter: product.imageFilter } : undefined}
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      <ul className="mt-4 space-y-1.5 text-sm">
        {included.map(({ product, weight, id }) => (
          <li key={id} className="flex justify-between gap-3 border-b border-dashed border-ink/15 pb-1.5">
            <span>{product.name}</span>
            <span className="text-ink/70">{weightLabel(weight)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          {combo.saving > 0 && (
            <p className="text-sm text-ink/55 line-through">{taka(combo.listPrice)}</p>
          )}
          <p className="text-3xl font-bold text-brand-deep leading-none">
            {taka(combo.price)}
          </p>
          <p className="text-xs text-ink/60 mt-1">
            + ডেলিভারি {taka(DELIVERY_CHARGE)}
            {combo.saving > 0 && ` · ${taka(combo.saving)} সাশ্রয়`}
          </p>
        </div>
        <Link
          to={`/product/${combo.id}`}
          className="bg-brand text-ink font-bold px-5 py-3 rounded-full whitespace-nowrap"
        >
          অর্ডার করুন
        </Link>
      </div>
      <p className="sr-only">মোট {bn(combo.totalKg)} কেজি</p>
    </article>
  );
}
