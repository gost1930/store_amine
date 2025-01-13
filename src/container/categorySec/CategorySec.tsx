import img2 from "../../assets/categories/2.jpeg";
import { motion } from "framer-motion";

const CategorySec = () => {
  const categories = ["Men", "Women", "Kids", "Accessories", "Shoes", "Bags"];

  return (
    <section className="w-full h-full">
        <motion.h1 initial={{ y: -100 , opacity: 0 }} animate={{ y: 0 , opacity: 1 }} transition={{ duration: 0.5  }} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">التصنيفات</motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2 md:p-5">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative grid place-content-center rounded h-40 md:h-52 lg:h-60 bg-no-repeat bg-center bg-cover group overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            {" "}
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
        ))}
      </div>
    </section>
  );
};

export default CategorySec;
