import { useState } from "react";
// components
import { SwiperPro } from "../../components";
// icons
import { MdOutlineModeComment } from "react-icons/md";
// motion
import { motion } from "framer-motion";
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

  // wilaya
  const wilaya = [
    {
      wilaya: "Adrar",
      baladiyat: [
        "Adrar",
        "Tamest",
        "Charouine",
        "Reggane",
        "Aoulef",
        "Timimoun",
        "Tit",
        "In Zghmir",
        "Tsabit",
        "Zaouiet Kounta",
      ],
    },
    {
      wilaya: "Chlef",
      baladiyat: [
        "Chlef",
        "Tenes",
        "Beni Haoua",
        "Oued Fodda",
        "El Karimia",
        "Ouled Fares",
        "Dahra",
        "Ain Merane",
        "Harchoun",
        "Tadjena",
      ],
    },
    {
      wilaya: "Laghouat",
      baladiyat: [
        "Laghouat",
        "Aflou",
        "Ksar El Hirane",
        "Hassi Delaa",
        "Hassi R'Mel",
        "Tadjmout",
        "Sidi Makhlouf",
        "El Ghicha",
        "Gueltat Sidi Saad",
        "Ain Madhi",
      ],
    },
    {
      wilaya: "Oued Djemaa",
      baladiyat: [
        "Ain Defla",
        "El Abadia",
        "Boumedfaa",
        "Miliana",
        "Hamza",
        "Djendel",
        "Rouina",
        "El Amra",
        "Khemis Miliana",
      ],
    },
  ];
  const [city, setCity] = useState<string[]>([]);
  const getCityByWilaya = (selectedWilaya: string) => {
    const selectedWilayaObj = wilaya.find((w) => w.wilaya === selectedWilaya);
    if (selectedWilayaObj) {
      setCity(selectedWilayaObj.baladiyat);
    } else {
      setCity([]);
    }
  };

  // choose size
  const [chooseSize, setChooseSize] = useState<string>("");
  const handleChooseSize = (theSize: string) => setChooseSize(theSize);

  // quantity
  const [quantity, setQuantity] = useState<number>(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };
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
            <div className="text-center pt-2 h-11 w-11 aspect-square bg-red-600 rounded-full text-white animate-bounce">
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
                <div
                  key={index}
                  onClick={() => handleChooseSize(size.size)}
                  className={`py-4 px-3 text-center w-12  text-black rounded hover:bg-black hover:text-white hover:-translate-y-1 duration-200 cursor-pointer hover:shadow-2xl ${
                    chooseSize === size.size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size.size}
                </div>
              ))}
            </div>
          </div>

          {/* offers container */}
          <div className=" bg-gray-100 w-full p-3 rounded-xl shadow-md">
            <h1 className="text-zinc-800 text-2xl font-bold underline w-full text-center">
              العروض
            </h1>
            <div className="flex justify-between px-10 my-4">
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

            <form action="" className="w-full">
              <div className="grid grid-cols-2 gap-3 my-2">
                {/* userName */}
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-zinc-600">
                    الإسم
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-black focus:outline-zinc-700 "
                    name=""
                    id=""
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                {/* phone number */}
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="text-zinc-600">
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-black focus:outline-zinc-700 "
                    name=""
                    id=""
                    placeholder="أدخل رقم الهاتف الخاص بك"
                  />
                  <p className="text-xs text-red-600">
                    ملاحظة : يجب أن يكون الرقم يعمل
                  </p>
                </div>
                {/* wilaya */}
                <div className="flex flex-col">
                  <select
                    name="wilaya"
                    id="wilaya"
                    className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-black focus:outline-zinc-700 "
                    onChange={(e) => getCityByWilaya(e.target.value)}
                  >
                    {wilaya.map((wilaya, index) => (
                      <option key={index} value={wilaya.wilaya}>
                        {wilaya.wilaya}
                      </option>
                    ))}
                  </select>
                </div>
                {/* city */}
                <div className="flex flex-col">
                  <select
                    name="city"
                    id="city"
                    className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-black focus:outline-zinc-700"
                  >
                    {city.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* order type (home or descktop) */}
              <div className="grid grid-cols-3 my-2">
                <div className="flex items-center gap-x-3">
                  <div className="checkbox-wrapper-12">
                    <div className="cbx">
                      <input id="homeOrder" type="checkbox" />
                      <label htmlFor="homeOrder"></label>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo-12">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                            result="goo-12"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <label htmlFor="homeOrder" className="text-zinc-600">
                    توصيل للمنزل
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="checkbox-wrapper-12">
                    <div className="cbx">
                      <input id="decktopOrder" type="checkbox" />
                      <label htmlFor="decktopOrder"></label>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo-12">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                            result="goo-12"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <label htmlFor="decktopOrder" className="text-zinc-600">
                    توصيل للمكتب
                  </label>
                </div>
              </div>

              {/* sum */}
              <div className="flex items-center justify-between w-full">
                <h1 className="text-zinc-600 text-lg font-semibold">
                  سعر التوصيل
                </h1>
                <p className="text-zinc-600 text-lg font-semibold">63000 دج</p>
              </div>
              <div className="flex items-center justify-between w-full my-3">
                <h1 className="text-zinc-700 text-lg font-semibold">
                  المنتجات
                </h1>
                <p className="text-zinc-700 text-lg font-semibold">3333 دج</p>
              </div>
              <div className="flex items-center justify-between w-full mb-6">
                <h1 className="text-zinc-700 text-lg font-semibold">
                  التكلفة الإجمالية
                </h1>
                <p className="text-green-500 text-lg font-semibold">3333 دج</p>
              </div>

              {/* quantity */}
              <div className="flex iems-center gap-x-2 my-4">
                <div
                  className="h-10 w-10 grid place-content-center bg-white border rounded-lg hover:bg-black hover:text-white cursor-pointer"
                  onClick={incrementQuantity}
                >
                  +
                </div>
                <p className="text-zinc-700 text-lg font-semibold self-center">
                  {quantity}
                </p>
                <div
                  className={`h-10 w-10 grid place-content-center bg-white border rounded-lg hover:bg-black ${
                    quantity === 1 && "pointer-events-none"
                  } hover:text-white cursor-pointer`}
                  onClick={decrementQuantity}
                >
                  -
                </div>
              </div>
              {/* submit btn */}
              <button className="w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 animate-bounce">
                أطلب الآن
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* comments */}
      <section className="w-full h-fit p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl text-zinc-800 font-bold">التعليقات</h1>
          {/* add comment */}
          <div className="px-3 py-2 rounded-lg bg-black hover:shadow-3xl duration-300 cursor-pointer text-white font-semibold text-xl flex items-center">
            إضافة تعليق <MdOutlineModeComment className="text-xl" />
          </div>
        </div>
        <div className="w-full h-[40vh] mt-5 bg-gray-50 rounded-2xl p-5 gap-y-3 flex flex-col overflow-y-auto scroll-">
          {/* <div className="w-full h-full flex items-center justify-center">
            <p className="text-zinc-600">لا يوجد تعليقات حتى الان</p>
          </div> */}
          <div className="rounded-l-xl rounded-b-xl bg-gray-300 w-fit px-4 pb-3">
            {/* username */}
            <h1 className="text-lg text-zinc-800 font-semibold mb-3">
              محمد حدبي
            </h1>
            <p className="text-zinc-600 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam
              odio aut laboriosam sunt voluptatibus! Quasi eveniet commodi vitae
              aliquam.
            </p>
          </div>
          <div className="rounded-l-xl rounded-b-xl bg-gray-300 w-fit px-4 pb-3">
            {/* username */}
            <h1 className="text-lg text-zinc-800 font-semibold mb-3">
              محمد حدبي
            </h1>
            <p className="text-zinc-600 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam
              odio aut laboriosam sunt voluptatibus! Quasi eveniet commodi vitae
              aliquam.
            </p>
          </div>
          <div className="rounded-l-xl rounded-b-xl bg-gray-300 w-fit px-4 pb-3">
            {/* username */}
            <h1 className="text-lg text-zinc-800 font-semibold mb-3">
              محمد حدبي
            </h1>
            <p className="text-zinc-600 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam
              odio aut laboriosam sunt voluptatibus! Quasi eveniet commodi vitae
              aliquam.
            </p>
          </div>
          <div className="rounded-l-xl rounded-b-xl bg-gray-300 w-fit px-4 pb-3">
            {/* username */}
            <h1 className="text-lg text-zinc-800 font-semibold mb-3">
              محمد حدبي
            </h1>
            <p className="text-zinc-600 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam
              odio aut laboriosam sunt voluptatibus! Quasi eveniet commodi vitae
              aliquam.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProDetailes;