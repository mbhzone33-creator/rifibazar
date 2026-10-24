import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

import { reviews } from '../../data/products';

const ClientReview = () => {
  return (
    <div className="relative pt-10  overflow-hidden ">
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> */}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            গ্রাহকদের মতামত
          </div> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 tracking-tight">
            আমাদের
            <span className="relative inline-block ml-2">
              <span className="absolute inset-0 bg-indigo-200/60 skew-y-1 -z-10 rounded-lg"></span>
              গ্রাহকরা যা বলছেন
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            আমাদের ক্রেতাদের পাঠানো সত্যিকারের মেসেজ
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="client-review-swiper"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="group h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 relative border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-3 px-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} className="text-lg text-amber-400" />
                    ))}
                  </div>

                  {/* Customer message screenshot */}
                  <a href={review.image} target="_blank" rel="noreferrer">
                    <img
                      src={review.image}
                      alt={review.alt}
                      loading="lazy"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .client-review-swiper {
          padding-bottom: 3rem !important;
        }
        .client-review-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 2rem;
        }
        .client-review-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #c7d2fe;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .client-review-swiper .swiper-pagination-bullet-active {
          background-color: #6366f1;
          width: 24px;
          border-radius: 10px;
        }
        .client-review-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
