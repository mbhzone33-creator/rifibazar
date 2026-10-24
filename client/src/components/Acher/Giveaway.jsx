import { MapPin, Utensils, Trees, ShoppingCart, CheckCircle2, Ticket, Trophy, Video } from 'lucide-react';
import { DRAW_DATE_TEXT } from '../../data/giveaway';

const prizes = [
  { icon: MapPin, title: 'রাজশাহী সিটি ট্যুর', text: 'রাজশাহীর সেরা জায়গাগুলো ঘুরে দেখার সুযোগ' },
  { icon: Utensils, title: 'কালাভুনা ফেস্ট', text: 'ঐতিহ্যবাহী রাজশাহীর কালাভুনা' },
  { icon: Trees, title: 'আম বাগান', text: 'বাগানে ঘুরে আম খাওয়ার অভিজ্ঞতা' },
];

const steps = [
  { icon: ShoppingCart, text: 'কম্বো অর্ডার করুন' },
  { icon: CheckCircle2, text: 'এন্ট্রি নিশ্চিত হবে' },
  { icon: Ticket, text: 'লাইভে লটারি ড্র' },
  { icon: Trophy, text: 'রাজশাহী ট্রিপ জিতুন' },
];

export default function Giveaway() {
  return (
    <section id="giveaway" className="bg-rosh py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl">কী কী জিতছেন</h2>
        <p className="text-ink/75 mt-2">
          ৪টি পরিবার (মোট ৮ জন, প্রতি পরিবারে ২ জন) জিতবে এই তিনটি অভিজ্ঞতা।
        </p>

        <ul id="prizes" className="scroll-mt-20 mt-7 grid gap-4 md:grid-cols-3">
          {prizes.map(p => (
            <li key={p.title} className="bg-paper rounded-2xl border border-ink/10 p-5 flex md:block gap-4">
              <span className="w-12 h-12 rounded-xl bg-leaf text-white grid place-items-center shrink-0">
                <p.icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl md:mt-4">{p.title}</p>
                <p className="text-ink/70 mt-1">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="font-display text-2xl mt-12">অংশ নেবেন যেভাবে</h3>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.text} className="flex items-center gap-3 bg-paper rounded-2xl border border-ink/10 p-4">
              <span className="w-9 h-9 rounded-full bg-ink text-rosh grid place-items-center font-bold shrink-0">
                {'১২৩৪'[i]}
              </span>
              <span className="font-medium">{s.text}</span>
            </li>
          ))}
        </ol>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/75">
          <li className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-brand-deep" aria-hidden="true" />
            প্রতি কম্বো অর্ডার = ১টি লটারি এন্ট্রি
          </li>
          <li className="flex items-center gap-2">
            <Video className="w-4 h-4 text-brand-deep" aria-hidden="true" />
            লটারি FoodAppi-র লাইভে হবে
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-deep" aria-hidden="true" />
            {DRAW_DATE_TEXT}
          </li>
        </ul>
      </div>
    </section>
  );
}
