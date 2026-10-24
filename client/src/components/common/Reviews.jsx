import { reviews } from '../../data/products';

export default function Reviews({ heading = 'ক্রেতারা যা বলছেন', sub }) {
  return (
    <section className="py-12 md:py-16" aria-labelledby="reviews-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="reviews-title" className="font-display text-3xl md:text-4xl">
          {heading}
        </h2>
        {sub && <p className="text-ink/70 mt-2">{sub}</p>}
      </div>

      <ul className="no-scrollbar mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-2">
        {reviews.map((r, i) => (
          <li key={i} className="snap-center shrink-0 w-[78%] sm:w-[46%] md:w-[30%] lg:w-[23%]">
            <a href={r.image} target="_blank" rel="noreferrer" aria-label="রিভিউ বড় করে দেখুন">
              <img
                src={r.image}
                alt={r.alt}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-2xl border border-ink/10"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
