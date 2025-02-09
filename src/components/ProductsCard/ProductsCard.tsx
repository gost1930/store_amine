// framer motion
import { motion } from "framer-motion";
// components
import { SwiperPro } from "../../components";
import { Link } from "react-router-dom";
import { FaCartShopping, FaEye } from "react-icons/fa6";

const ProductsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-[350px] md:h-[500px] relative overflow-hidden duration-300 group cursor-pointer"
    >
      <div className="w-full h-[70%] overflow-hidden">
        {/* make carousel withe swiper.js */}
        {/* this is a component for swiper in component/CardCrousel/CardCarousel.tsx :) */}
        <SwiperPro
          customNavigationButtons={false}
          classname={`min-h-[300px] md:min-h-[400px]`}
          classnameForDivParent={`w-full`}
        />
      </div>
      {/* pro details */}
      <div className="w-full h-[30%]">
        <h1 className="text-sm md:text-base lg:text-xl text-zinc-800 text-center">
          منتج1
        </h1>
        <div className="flex justify-center items-center gap-x-2 w-full my-2">
          <p className="text-gray-500 line-through">888 دج</p>
          <p className="text-red-500">888 دج</p>
        </div>
        {/* link btn */}
        <div className="w-full grid place-content-center">
          <Link
            to="/pro_detailes"
            className="group-hover:bg-black group-hover:text-white px-10 py-2 rounded-lg text-center md:translate-y-32 md:group-hover:translate-y-8 duration-300 border"
          >
            أطلب الآن
          </Link>
        </div>
        <div className="absolute top-1 right-1 bg-red-500 rounded-full w-10 h-10 aspect-square z-40 text-white grid place-content-center">
          <p>50%</p>
        </div>
        <div className="absolute top-1 left-1 md:-left-10 md:group-hover:left-1 duration-300 bg-gray-50 text-zinc-800 rounded-full w-10 h-10 aspect-square z-40 grid place-content-center">
          <FaCartShopping />
        </div>
        <div className="absolute top-14 left-1 md:-left-10 md:group-hover:left-1 duration-300 bg-gray-50 text-zinc-800 rounded-full w-10 h-10 aspect-square z-40 grid place-content-center">
          <FaEye />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
