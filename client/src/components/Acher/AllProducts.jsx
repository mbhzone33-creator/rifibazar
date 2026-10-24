import { products, combos } from '../../data/products';
import ProductCard from '../../components/common/ProductCard';
import ComboCard from '../../components/common/ComboCard';

export default function AllProducts() {
  return (
    <>
      <section className="bg-molasses text-rosh py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl">গিভঅ্যাওয়ের এন্ট্রি পেতে কম্বো নিন</h2>
          <p className="text-rosh/75 mt-2">তিনটি কম্বোর যেকোনোটি অর্ডার করলেই একটি লটারি এন্ট্রি।</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {combos.map(c => (
              <ComboCard key={c.id} combo={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl">আমাদের সব গুড়</h2>
          <p className="text-ink/70 mt-2">আলাদা করেও নিতে পারেন, সব গুড় কেজি প্রতি ৪৫০ টাকা।</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:gap-4">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
