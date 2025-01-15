import { useEffect, useState } from "react";

const Form = ({}) => {
  const [city, setCity] = useState<string[]>([]);
  const getCityByWilaya = (selectedWilaya: string) => {
    const selectedWilayaObj = wilaya.find((w) => w.wilaya === selectedWilaya);
    if (selectedWilayaObj) {
      setCity(selectedWilayaObj.baladiyat);
    } else {
      setCity([]);
    }
  };
  useEffect(() => {
    getCityByWilaya("Adrar");
  } , []);
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
      <div className="flex gap-x-4 my-5">
        <div className="flex items-center gap-x-3">
          <div className="checkbox-wrapper-12">
            <div className="cbx">
              <input id="homeOrder" type="checkbox" />
              <label htmlFor="homeOrder"></label>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
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
        <h1 className="text-zinc-600 text-lg font-semibold">سعر التوصيل</h1>
        <p className="text-zinc-600 text-lg font-semibold">63000 دج</p>
      </div>
      <div className="flex items-center justify-between w-full my-3">
        <h1 className="text-zinc-700 text-lg font-semibold">المنتجات</h1>
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
  );
};

export default Form;
