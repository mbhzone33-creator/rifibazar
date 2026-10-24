import { Link } from 'react-router';
import { Phone, Truck, Banknote, BadgePercent, Gift } from 'lucide-react';
import {
  products,
  combos,
  PRICE_PER_KG,
  DELIVERY_CHARGE,
  PHONE_TEL,
  taka,
  bn,
} from '../../data/products';
import ProductCard from '../../components/common/ProductCard';
import ComboCard from '../../components/common/ComboCard';
import Reviews from '../../components/common/Reviews';
import Faq from '../../components/common/Faq';
import heroImg from '../../assets/gur/lali.webp';
import pithaAd from '../../assets/gur/pitha-ad.webp';

export default function Home() {
  return (
    <>
      {/* ───── হিরো ───── */}
      <section className="bg-rosh overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-14 grid md:grid-cols-2 gap-2 md:gap-10 items-center">
          <div className="pour-in">
            <p className="inline-block text-sm font-semibold bg-leaf text-white px-3 py-1.5 rounded-full">
              ৫ রকমের খেজুর গুড়
            </p>
            <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-6xl leading-[1.12] mt-4">
              খেজুরের খাঁটি গুড়,
              <br />
              সরাসরি আপনার ঘরে
            </h1>
            <p className="mt-4 text-lg text-ink/75 max-w-md leading-relaxed">
              পাতালি, লালী, দানাদার আর চকলেট গুড়। কেজি মাত্র {taka(PRICE_PER_KG)}, ডেলিভারি সারাদেশে {taka(DELIVERY_CHARGE)}।
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="bg-brand text-ink font-bold px-6 py-3.5 rounded-full"
              >
                গুড় দেখুন
              </a>
              <a
                href="#combos"
                className="border-2 border-ink font-bold px-6 py-3 rounded-full hover:bg-ink hover:text-rosh transition-colors"
              >
                কম্বো অফার
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <img
              src={heroImg}
              alt="মাটির বাটিতে চামচ থেকে ঝরে পড়ছে ঘন লালী গুড়"
              fetchPriority="high"
              className="pour-in w-[78%] max-w-[420px] md:max-w-[480px] md:w-full drop-shadow-[0_24px_30px_rgba(92,42,15,0.28)]"
              style={{ animationDelay: '0.15s' }}
            />
          </div>
        </div>
      </section>

      {/* ───── তিনটি কথা ───── */}
      <section className="bg-ink text-rosh">
        <ul className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
          <li className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <BadgePercent className="w-5 h-5 text-brand" aria-hidden="true" />
            <span>সব গুড় {taka(PRICE_PER_KG)}/কেজি</span>
          </li>
          <li className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <Truck className="w-5 h-5 text-brand" aria-hidden="true" />
            <span>সারাদেশে ডেলিভারি {taka(DELIVERY_CHARGE)}</span>
          </li>
          <li className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <Banknote className="w-5 h-5 text-brand" aria-hidden="true" />
            <span>ক্যাশ অন ডেলিভারি</span>
          </li>
        </ul>
      </section>

      {/* ───── সব গুড় ───── */}
      <section id="products" className="scroll-mt-16 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl">আপনার পছন্দের গুড় বেছে নিন</h2>
          <p className="text-ink/70 mt-2">
            প্রতিটির স্বাদ, রঙ আর ব্যবহার আলাদা। ছবিতে ট্যাপ করে বিস্তারিত দেখুন।
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:gap-4">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── কম্বো ───── */}
      <section id="combos" className="scroll-mt-16 bg-molasses text-rosh py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl">কম্বো নিলে সুবিধা বেশি</h2>
          <p className="text-rosh/75 mt-2 max-w-xl">
            একসাথে কয়েক রকম গুড় নিন, কম্বো অর্ডারে{' '}
            <Link to="/acher" className="underline decoration-brand underline-offset-4 font-semibold text-rosh">
              রাজশাহী ট্যুর গিভঅ্যাওয়ের
            </Link>{' '}
            এন্ট্রিও পাচ্ছেন।
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {combos.map(c => (
              <ComboCard key={c.id} combo={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── শীতের পিঠা ───── */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={pithaAd}
            alt="শীতের পিঠার আসল স্বাদ আসুক খেজুর গুড়ের সাথে"
            loading="lazy"
            className="w-full rounded-3xl border border-ink/10"
          />
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              শীতের পিঠার আসল স্বাদ আসে খেজুর গুড় থেকেই
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              ভাপা, পুলি, চিতই কিংবা পায়েস, গুড় ছাড়া শীতের পিঠা অসম্পূর্ণ। পিঠার জন্য পাতালি বা দানাদার, ওপরে ঢালার জন্য লালী।
            </p>
            <ul className="mt-5 space-y-2 text-ink/85">
              <li>পাতালি গুড়: ভাপা ও পুলি পিঠার পুরে</li>
              <li>লালী গুড়: চিতই ও রুটির ওপরে ঢেলে</li>
              <li>দানাদার গুড়: দুধ, দই ও পায়েসে</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───── রিভিউ ───── */}
      <Reviews sub="আমাদের ক্রেতাদের পাঠানো সত্যিকারের মেসেজ।" />

      {/* ───── গিভঅ্যাওয়ে ───── */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto bg-leaf text-white rounded-3xl p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div className="flex gap-4">
            <Gift className="w-10 h-10 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl md:text-3xl leading-tight">
                কম্বো কিনুন, FoodAppi-র সাথে রাজশাহী ঘুরতে যান
              </h2>
              <p className="mt-2 text-white/85">
                লটারিতে {bn(4)}টি পরিবার জিতবে রাজশাহী সিটি ট্যুর, কালাভুনা ও আম বাগানের সুযোগ।
              </p>
            </div>
          </div>
          <Link
            to="/acher"
            className="bg-brand text-ink font-bold px-6 py-3.5 rounded-full text-center"
          >
            গিভঅ্যাওয়ের বিস্তারিত
          </Link>
        </div>
      </section>

      <Faq />

      {/* মোবাইলে নিচে ভাসমান কল বাটন */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="কল করে অর্ডার করুন"
        className="md:hidden fixed bottom-4 right-4 z-30 bg-leaf text-white w-14 h-14 rounded-full grid place-items-center shadow-lg"
      >
        <Phone className="w-6 h-6" aria-hidden="true" />
      </a>
    </>
  );
}
