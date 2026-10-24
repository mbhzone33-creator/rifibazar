import React from 'react';
import Image1 from '../../assets/gur/lali.webp';
import Image2 from '../../assets/gur/danadar.webp';

const Banner = () => {
  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkOut');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollProducts = () => {
    const products = document.getElementById('products');
    if (products) {
      products.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 relative overflow-hidden md:pt-10">
      {/* Left Image */}
      <div className="absolute top-16 left-0 w-28 md:w-1/3 -mt-22 lg:-mt-40 -ml-2 md:-ml-10">
        <img
          src={Image1}
          alt="লালী গুড়"
          className="w-full max-w-[500px] drop-shadow-2xl"
        />
      </div>

      {/* Right Image */}
      <div className="absolute top-16 right-0 w-28 md:w-1/3 -mt-22 lg:-mt-40 -mr-2 lg:-mr-34">
        <img src={Image2} alt="দানাদার গুড়" className="w-full max-w-[500px]" />
      </div>

      {/* Center Content */}
      <div className="text-center px-4 sm:px-6 relative z-10 max-w-4xl mx-auto pt-6 md:pt-0">
        {/* Badges */}
        <div className="flex justify-center gap-2 mb-3 flex-wrap mt-12 md-mt-0">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
            খাঁটি খেজুর গুড়
          </span>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            সারাদেশে ডেলিভারি
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          শীতের স্বাদ <span className="text-orange-500">বাড়িয়ে তুলবে</span>{' '}
          <br />
          <span className="text-green-600">Rifi Bazar গুড়</span>
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-gray-700 text-base sm:text-lg">
          <strong>পাতালি</strong>, <strong>লালী</strong>, <strong>দানাদার</strong> ও{' '}
          <strong>চকলেট গুড়</strong> — খাঁটি খেজুর গুড় সরাসরি আপনার দরজায়
        </p>

        {/* Offer */}
        <div className="mt-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full inline-block text-xs md:text-sm font-medium">
          🍯 সব গুড় ৪৫০ টাকা কেজি · ডেলিভারি মাত্র ৯৯ টাকা
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={scrollCheckOut}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            🛒 এখনই অর্ডার করুন
          </button>

          <button
            onClick={scrollProducts}
            className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            🍯 সব গুড় দেখুন
          </button>
        </div>

        {/* Stats */}
        {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl font-bold">৫০০+</p>
            <p className="text-sm text-gray-500">সন্তুষ্ট গ্রাহক</p>
          </div>
          <div>
            <p className="text-xl font-bold">৪.৮★</p>
            <p className="text-sm text-gray-500">গড় রেটিং</p>
          </div>
          <div>
            <p className="text-xl font-bold">৩</p>
            <p className="text-sm text-gray-500">ধরনের আচার</p>
          </div>
          <div>
            <p className="text-xl font-bold">COD</p>
            <p className="text-sm text-gray-500">ক্যাশ অন ডেলিভারি</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
