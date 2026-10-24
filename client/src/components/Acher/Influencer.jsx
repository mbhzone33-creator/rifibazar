import { BadgeCheck, Users } from 'lucide-react';
import foodappi from '../../assets/shihab2.webp';
import { FOODAPPI_QUOTE, INFLUENCER } from '../../data/giveaway';

export default function Influencer() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-ink/10 overflow-hidden grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-6 md:p-10 items-center">
          <div className="text-center">
            <img
              src={foodappi}
              alt={INFLUENCER.name}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto border-4 border-rosh"
            />
            <p className="font-display text-2xl mt-4">{INFLUENCER.name}</p>
            <p className="text-sm text-ink/70 max-w-[14rem] mx-auto">{INFLUENCER.role}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1 bg-leaf/10 text-leaf-deep px-3 py-1.5 rounded-full">
                <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                ভেরিফাইড
              </span>
              <span className="inline-flex items-center gap-1 bg-rosh px-3 py-1.5 rounded-full">
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                {INFLUENCER.followers}
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              FoodAppi-র সাথে রাজশাহী যাওয়ার সুযোগ
            </h2>
            <p className="mt-3 text-ink/75 leading-relaxed">
              FoodAppi ঘোষণা করেছেন, রিফি বাজারের গুড়ের কম্বো কিনলে লটারির মাধ্যমে রাজশাহী সিটি ট্যুর, কালাভুনা আর আম বাগান ঘোরার সুযোগ জিতে নিতে পারেন ৪টি পরিবার।
            </p>

            {FOODAPPI_QUOTE && (
              <blockquote className="mt-5 border-l-4 border-brand bg-rosh rounded-r-2xl p-4 text-lg leading-relaxed">
                “{FOODAPPI_QUOTE}”
                <footer className="mt-2 text-sm font-semibold text-brand-deep">
                  {INFLUENCER.name}
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
