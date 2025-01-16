import React from "react";
import { motion } from "framer-motion";
// components
import { Inputs, PagesTitle } from "../../components";

const OrderStatus = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#444",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="min-h-screen h-fit w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <PagesTitle title="حالة الطلب" />
      <motion.div
        className="flex items-center gap-4 my-4"
        variants={containerVariants}
      >
        <Inputs
          type="text"
          name="search"
          id="search"
          className="bg-transparent border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-black"
          placeholder="تتبع حالة طلبيتك"
        />
        <motion.button
          className="bg-zinc-800 text-white px-4 py-2 rounded-2xl"
          variants={buttonVariants}
          whileHover="hover"
        >
          بحث
        </motion.button>
      </motion.div>

      {/* order status */}
      <div className="w-full h-full">
        <h1>هذه الطلبية:</h1>

        <div className="w-full h-fit flex flex-wrap gap-4">
          <p className="text-zinc-800 bg-gray-300 px-4 py-2 w-fit rounded-2xl ">
            قيد التجهيز
          </p>
          <p className="text-yellow-800 bg-yellow-300/50 px-4 py-2 w-fit rounded-2xl ">
            قيد التوصيل
          </p>
          <p className="text-blue-800 bg-blue-300/50 px-4 py-2 w-fit rounded-2xl ">
            عند شركة التوصيل
          </p>
          <p className="text-green-800 bg-green-300/50 px-4 py-2 w-fit rounded-2xl ">
            تم التسليم
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default OrderStatus;
