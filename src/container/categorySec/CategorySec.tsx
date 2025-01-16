// static images
import img2 from "../../assets/categories/2.jpeg";
// framer motion
import { motion } from "framer-motion";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// components
import { PagesTitle } from "../../components";

const CategorySec = () => {
  const categories = ["Men", "Women", "Kids", "Accessories", "Shoes", "Bags"];

  return (
    <section className="w-full h-full">
      <PagesTitle title="_التصنيفات:" discription="لدينا كل الفئات التي تحتاجها😁:" />
      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          navigation={{
            nextEl: "#button-next",
            prevEl: "#button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="p-5"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative grid place-content-center rounded h-40 md:h-52 lg:h-60 bg-no-repeat bg-center bg-cover group overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50 rounded"></div>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative text-2xl md:text-3xl lg:text-4xl text-white font-bold z-10"
                >
                  {item}
                </motion.h1>
                <motion.div className="absolute bottom-2 md:-bottom-20 rounded-2xl grid place-content-center px-5 md:px-20 py-5 md:group-hover:bottom-3 duration-300 w-fit -translate-x-1/2 left-[50%]">
                  <h1 className="text-sm md:text-base lg:text-lg text-white underline underline-offset-4">
                    المزيد..
                  </h1>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          id="button-next"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500"
        >
          &#10095;{/* Left arrow icon */}
        </button>
        <button
          id="button-prev"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500"
        >
          &#10094;{/* Right arrow icon */}
        </button>
      </div>
    </section>
  );
};

export default CategorySec;
