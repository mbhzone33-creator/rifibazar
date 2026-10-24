import { Trophy, MapPin } from 'lucide-react';
import { taka, combos } from '../../data/products';
import heroImg from '../../assets/gur/danadar.webp';
import { DRAW_DATE_TEXT } from '../../data/giveaway';

export default function GiveawayHero() {
  const lowest = Math.min(...combos.map(c => c.price));
  return (
    <section className="bg-leaf text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-14 grid md:grid-cols-2 gap-4 md:gap-10 items-center">
        <div className="pour-in pb-2 md:pb-14">
          <p className="inline-flex items-center gap-2 text-sm font-semibold bg-white/15 px-3 py-1.5 rounded-full">
            <Trophy className="w-4 h-4 text-brand" aria-hidden="true" />
            FoodAppi গিভঅ্যাওয়ে
          </p>
          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.12] mt-4">
            গুড়ের কম্বো কিনুন, রাজশাহী ঘুরে আসুন
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-md leading-relaxed">
            প্রতিটি কম্বো অর্ডার মানে লটারিতে একটি এন্ট্রি। কম্বো শুরু মাত্র {taka(lowest)} থেকে।
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {DRAW_DATE_TEXT}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#order" className="bg-brand text-ink font-bold px-6 py-3.5 rounded-full">
              কম্বো অর্ডার করুন
            </a>
            <a href="#prizes" className="border-2 border-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-leaf-deep transition-colors">
              পুরস্কার দেখুন
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="মাটির বাটিতে সোনালি দানাদার গুড়"
            className="pour-in w-[70%] max-w-[380px] md:max-w-[440px] md:w-full drop-shadow-[0_24px_28px_rgba(0,0,0,0.35)]"
            style={{ animationDelay: '0.15s' }}
          />
        </div>
      </div>
    </section>
  );
}
