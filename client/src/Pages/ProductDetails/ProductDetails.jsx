import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Check, Gift } from 'lucide-react';
import {
  getItem,
  getProduct,
  products,
  combos,
  PRICE_PER_KG,
  DELIVERY_CHARGE,
  taka,
  bn,
  weightLabel,
} from '../../data/products';
import OrderPanel from '../../components/common/OrderPanel';
import Reviews from '../../components/common/Reviews';
import Faq from '../../components/common/Faq';
import ProductCard from '../../components/common/ProductCard';
import ComboCard from '../../components/common/ComboCard';

export default function ProductDetails() {
  const { id } = useParams();
  const item = getItem(id);

  // GTM: view_item (একই সেশনে একবার)
  useEffect(() => {
    if (!item) return;
    const key = `viewed_${id}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, 'true');

    const price = item.kind === 'combo' ? item.price : PRICE_PER_KG;
    const ecommerce = {
      currency: 'BDT',
      value: price,
      items: [
        {
          item_id: item.id,
          item_name: item.name,
          item_brand: 'Rifi Bazar',
          item_category: 'Gur',
          price,
          quantity: 1,
        },
      ],
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'view_item', ecommerce });
  }, [id, item]);

  if (!item) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-4 text-center">
        <div>
          <h1 className="font-display text-3xl">পণ্যটি পাওয়া যায়নি</h1>
          <Link to="/" className="inline-block mt-5 bg-brand text-ink font-bold px-6 py-3 rounded-full">
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  const isCombo = item.kind === 'combo';
  const priceText = isCombo ? taka(item.price) : taka(PRICE_PER_KG);
  const goOrder = () =>
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* ───── হিরো ───── */}
      <section style={{ background: item.tone }} className="overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-10 md:py-14">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/80 py-2">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            সব গুড়
          </Link>

          <div className="mt-2 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <img
                src={item.image}
                alt={item.name}
                fetchPriority="high"
                style={item.imageFilter ? { filter: item.imageFilter } : undefined}
                className="pour-in w-[72%] max-w-[400px] md:max-w-[460px] md:w-full drop-shadow-[0_24px_28px_rgba(60,25,5,0.3)]"
              />
            </div>

            <div className="md:order-1">
              {isCombo && (
                <span className="inline-block text-sm font-bold bg-leaf text-white px-3 py-1.5 rounded-full">
                  {item.badge}
                </span>
              )}
              <h1 className="font-display text-5xl md:text-6xl leading-[1.1] mt-3">
                {item.name}
              </h1>
              <p className="mt-3 text-lg text-ink/80 leading-relaxed max-w-md">
                {item.description}
              </p>

              <div className="mt-5 flex items-end gap-3 flex-wrap">
                <span className="text-4xl font-bold text-brand-deep leading-none">
                  {priceText}
                </span>
                {isCombo ? (
                  item.saving > 0 && (
                    <span className="text-lg text-ink/55 line-through">
                      {taka(item.listPrice)}
                    </span>
                  )
                ) : (
                  <span className="text-ink/70 mb-0.5">প্রতি কেজি</span>
                )}
              </div>
              <p className="text-sm text-ink/70 mt-1">
                ডেলিভারি চার্জ সারাদেশে {taka(DELIVERY_CHARGE)}
                {isCombo && item.saving > 0 && ` · আপনার সাশ্রয় ${taka(item.saving)}`}
              </p>

              <button
                onClick={goOrder}
                className="mt-6 bg-ink text-rosh font-bold text-lg px-8 py-4 rounded-full hidden md:inline-block"
              >
                অর্ডার করতে নিচে যান
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───── বিশেষত্ব / কম্বোতে কী আছে ───── */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {isCombo ? (
            <>
              <h2 className="font-display text-3xl md:text-4xl">এই কম্বোতে কী কী পাচ্ছেন</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {item.items.map(i => {
                  const p = getProduct(i.id);
                  return (
                    <li key={i.id}>
                      <Link
                        to={`/product/${p.id}`}
                        className="flex items-center gap-4 bg-white rounded-2xl border border-ink/10 p-3 hover:border-leaf transition-colors"
                      >
                        <span
                          className="w-16 h-16 rounded-xl grid place-items-center shrink-0"
                          style={{ background: p.tone }}
                        >
                          <img
                            src={p.image}
                            alt=""
                            style={p.imageFilter ? { filter: p.imageFilter } : undefined}
                            className="w-14 h-14 object-contain"
                            loading="lazy"
                          />
                        </span>
                        <span>
                          <span className="block font-display text-lg leading-tight">{p.name}</span>
                          <span className="text-sm text-ink/70">{weightLabel(i.weight)}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex gap-3 items-start bg-leaf/10 text-leaf-deep rounded-2xl p-4">
                <Gift className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  কম্বো অর্ডারে পাচ্ছেন <b>FoodAppi-র সাথে রাজশাহী ট্যুর গিভঅ্যাওয়ের</b> লটারি এন্ট্রি।{' '}
                  <Link to="/acher" className="underline font-semibold">বিস্তারিত দেখুন</Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-3xl md:text-4xl">
                কেন নিবেন {item.name}
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {item.highlights.map(h => (
                  <li key={h.title} className="bg-white rounded-2xl border border-ink/10 p-5">
                    <Check className="w-6 h-6 text-leaf" aria-hidden="true" />
                    <p className="font-display text-xl mt-3">{h.title}</p>
                    <p className="text-ink/70 mt-1">{h.text}</p>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl mt-10">কীভাবে খাবেন</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.uses.map(u => (
                  <li
                    key={u}
                    className="px-4 py-2 rounded-full bg-rosh border border-ink/10 text-sm font-medium"
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <Reviews sub="গুড় হাতে পেয়ে ক্রেতারা যা জানিয়েছেন।" />
      <OrderPanel key={item.id} itemId={item.id} />
      <Faq />

      {/* ───── অন্যান্য ───── */}
      <section className="pb-28 md:pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl">
            {isCombo ? 'আলাদা করেও নিতে পারেন' : 'আরও দেখুন'}
          </h2>
          {isCombo ? (
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3 bg-molasses rounded-3xl p-4 md:p-6">
              {combos.map(c => (
                <ComboCard key={c.id} combo={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ───── মোবাইলে স্টিকি অর্ডার বার ───── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-ink text-rosh px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-8px_20px_rgba(0,0,0,0.25)]">
        <div className="leading-tight">
          <p className="text-xs text-rosh/70">{isCombo ? `${bn(item.totalKg)} কেজি কম্বো` : 'প্রতি কেজি'}</p>
          <p className="text-xl font-bold">{priceText}</p>
        </div>
        <button onClick={goOrder} className="bg-brand text-ink font-bold px-7 py-3 rounded-full">
          অর্ডার করুন
        </button>
      </div>
    </>
  );
}
