import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/products';

export default function Faq() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4">
        <h2 id="faq-title" className="font-display text-3xl md:text-4xl">
          যা জানতে চান
        </h2>
        <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map(f => (
            <details key={f.q} className="group py-4">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold">
                {f.q}
                <ChevronDown
                  className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-2 text-ink/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
