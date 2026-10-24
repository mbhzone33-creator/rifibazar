import { landingPages } from '../../data/landingPageConfig';
import { DELIVERY_CHARGE, PRICE_PER_KG, bn } from '../../data/products';
import ProductCard from '../../components/am/ProductCard';
import {
  Package,
  Sparkles,
  TrendingUp,
  Apple,
  Leaf,
  Truck,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero / Title Section for Home */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-4">
            <span className="text-amber-600 text-sm">🍯</span>
            <span className="text-xs font-semibold text-amber-700 tracking-wide">
              খাঁটি খেজুর গুড়
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            খেজুরের <span className="text-amber-600">খাঁটি গুড়</span>{' '}
            সরাসরি আপনার ঘরে
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            পাতালি, লালী, দানাদার ও চকলেট গুড়। শীতের পিঠা, পায়েস কিংবা সকালের
            রুটির সাথে খেজুর গুড়ের আসল স্বাদ। সারা দেশে ক্যাশ অন ডেলিভারি।
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full mb-3">
              <Package className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700 tracking-wide">
                গুড়ের সেরা কালেকশন
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              আমাদের<span className="text-amber-600"> খেজুর গুড় </span>
              সমূহ
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              বেছে নিন আপনার পছন্দের গুড় বা কম্বো অফার
            </p>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {landingPages.map(item => (
              <ProductCard key={item.id} data={item.card} id={item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 px-4 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <span className="text-amber-600 text-sm">🍯</span>
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                খাঁটি খেজুর গুড়
              </p>
              <p className="text-xs text-gray-500">৫ রকমের স্বাদ</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                ক্যাশ অন ডেলিভারি
              </p>
              <p className="text-xs text-gray-500">হাতে পেয়ে টাকা দিন</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">সব গুড়</p>
              <p className="text-xs text-gray-500">কেজি {bn(PRICE_PER_KG)} টাকা</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                দ্রুত ডেলিভারি
              </p>
              <p className="text-xs text-gray-500">সারা দেশে মাত্র {bn(DELIVERY_CHARGE)} টাকা</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
