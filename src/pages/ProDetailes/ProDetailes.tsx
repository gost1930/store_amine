import { useState } from "react";
// components
import { SwiperPro } from "../../components";
// motion
import { motion } from "framer-motion";
// containers
import { Form, Comment } from "../../container";
const ProDetailes = () => {
  // colors array
  interface ColorsCheckBoxes {
    color: string;
    colorCode: string;
  }
  const colors: ColorsCheckBoxes[] = [
    {
      color: "أسود",
      colorCode: "bg-black",
    },
    {
      color: "أخضر",
      colorCode: "bg-green-600",
    },
    {
      color: "أحمر",
      colorCode: "bg-red-600",
    },
    {
      color: "أزرق",
      colorCode: "bg-blue-600",
    },
  ];

  // size array
  interface SizeCheckBoxes {
    size: string;
  }
  const size: SizeCheckBoxes[] = [
    {
      size: "S",
    },
    {
      size: "M",
    },
    {
      size: "L",
    },
    {
      size: "XL",
    },
    {
      size: "XXL",
    },
  ];

  // choose size
  const [chooseSize, setChooseSize] = useState<string>("");
  const handleChooseSize = (theSize: string) => setChooseSize((prev) => (prev === theSize ? "" : theSize));

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
      className="relative flex flex-col my-9 container mx-auto w-full"
    >
      <div className="relative flex flex-col md:flex-row my-9 w-full">
        {/* swiper component */}
        <SwiperPro
          classnameForDivParent="w-full md:w-[40%]"
          classname="min-h-[70vh] rounded-xl"
        />

        {/* details */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 px-4">
          <div className="flex items-center gap-x-5">
            {/* discpunt percentage */}
            <div className="text-center h-11 w-11 aspect-square bg-red-600 rounded-full text-white animate-bounce grid place-content-center">
              29%
            </div>
            <span className="ml-5 text-xl text-zinc-800">اللخر ميلحقش 😁</span>
          </div>
          <h1 className="text-3xl text-zinc-800 font-bold">New Balance 530</h1>
          <h1 className="text-2xl text-red-500 flex gap-x-8">
            {/* price */}
            <span className="font-bold">2500 دج</span>
            {/* old price */}
            <span className="text-stone-400 text-lg md:text-xl line-through decoration-red-400">
              3500 دج
            </span>
          </h1>

          {/* colors container */}
          <div className="grid grid-cols-2 md:grid-cols-3 place-content-start lg:grid-cols-5 gap-4">
            {/* color */}
            {colors.map((color, index) => (
              <div key={index} className="flex flex-row-reverse gap-x-1">
                <label htmlFor={color.color} className="text-lg text-zinc-800 ">
                  {color.color}
                </label>
                <input type="checkbox" name="" id={color.color} />
                <div
                  className={`w-8 h-8 rounded-full ${color.colorCode}`}
                ></div>
              </div>
            ))}
          </div>

          {/* size container */}
          <div className="">
            <h1 className="text-base text-zinc-600 font-bold">المقاسات :</h1>
            <div className="flex flex-row gap-x-3 mt-3">
              {size.map((size, index) => (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.150 }}
                  key={index}
                  onClick={() => handleChooseSize(size.size)}
                  className={`py-4 px-3 text-center w-12  text-black rounded hover:bg-black hover:text-white  duration-200 cursor-pointer hover:shadow-2xl ${
                    chooseSize === size.size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size.size}
                </motion.div>
              ))}
            </div>
          </div>

          {/* offers container */}
          <div className=" bg-gray-100 w-full p-3 rounded-xl shadow-md">
            <h1 className="text-zinc-800 text-2xl font-bold underline w-full text-center">
              العروض
            </h1>
            <div className="flex justify-between px-2 md:px-10 my-4">
              <div>
                {/* <h1 className="text-lg text-zinc-700 font-semibold">تشري وحدة نعطوك معاها ساعة هدية من المحل</h1> */}
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    name="1"
                    className="w-4 h-4 rounded-full"
                    id="1"
                  />
                  <label
                    htmlFor="1"
                    className="text-lg text-zinc-700 font-semibold"
                  >
                    تشري وحدة نعطوك معاها ساعة هدية من المحل
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    name="2"
                    className="w-4 h-4 rounded-full"
                    id="2"
                  />
                  <label
                    htmlFor="2"
                    className="text-lg text-zinc-700 font-semibold"
                  >
                    تشري وحدة نعطوك معاها ساعة هدية من المحل
                  </label>
                </div>
              </div>
              <div>
                <h1 className="text-lg text-zinc-600 font-semibold">
                  32000 دج
                </h1>
                <h1 className="text-lg text-zinc-600 font-semibold">555 دج</h1>
              </div>
            </div>
          </div>

          {/* order form container */}
          <div className="flex flex-col border-zinc-700 rounded shadow-md my-5 py-5 px-3">
            <h1 className="text-zinc-800 text-2xl font-bold w-full text-center">
              املأ الاستمارة للطلب
            </h1>

            {/* form */}
            <Form />
          </div>
        </div>
      </div>
      {/* comment */}
      <Comment />
    </motion.div>
  );
};

export default ProDetailes;
