// import React from 'react'
import { motion } from "framer-motion";

const DelivetyPrices = () => {
  const data = [
    { id: 1, wilaya: "أدرار", officePrice: 100, homePrice: 100 },
    { id: 2, wilaya: "الجزائر", officePrice: 100, homePrice: 100 },
    { id: 3, wilaya: "عين الدفلى", officePrice: 100, homePrice: 100 },
    { id: 4, wilaya: "الشلف", officePrice: 100, homePrice: 100 },
    { id: 5, wilaya: "غيليزان", officePrice: 100, homePrice: 100 },
  ];

  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <div className="w-full h-fit px-1 md:px-10 lg:px-20">
      {/* title */}
      <motion.h1
        className="text-zinc-900 text-2xl font-bold text-center my-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        سعر التوصيل
      </motion.h1>

      {/* table */}
      <motion.table
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={tableVariants}
      >
        <thead className="bg-zinc-200">
          <tr>
            <th className="text-start border border-zinc-300 p-2 text-md font-semibold">
              المدينة
            </th>
            <th className="text-start border border-zinc-300 p-2 text-md font-semibold">
              سعر التوصيل للمكتب
            </th>
            <th className="text-start border border-zinc-300 p-2 text-md font-semibold">
              سعر التوصيل للمنزل
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={item.id}
              className={`${item.id % 2 === 0 && "bg-zinc-100"}`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={rowVariants}
            >
              <td className="border-b border-zinc-300 p-2 text-md font-semibold">
                {item.wilaya}
              </td>
              <td className="border-b border-zinc-300 p-2 text-md font-semibold">
                {item.officePrice}
              </td>
              <td className="border-b border-zinc-300 p-2 text-md font-semibold">
                {item.homePrice}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default DelivetyPrices;
