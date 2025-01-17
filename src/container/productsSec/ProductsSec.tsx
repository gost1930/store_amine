// framer motion
import { motion } from "framer-motion";
// components
import { PagesTitle, ProductsCard } from "../../components";

const ProductsSec = () => {
  const motionProp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "tween",
        duration: 5,
      },
      delay: {
        type: "tween",
        duration: 5,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={motionProp}
      className="w-full h-full my-10"
    >
      <PagesTitle
        title="_المنتجات:"
        discription="لدينا كل المنتجات التي تحتاجها😁:"
      />
      {/* the products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-5 lg:gap-x-7 gap-y-3 p-2 md:p-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductsCard key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsSec;
