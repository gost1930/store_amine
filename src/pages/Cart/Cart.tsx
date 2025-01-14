import { useState } from "react";
// import static image
import img1 from "../../assets/product/2.jpeg";
// react icons
import { IoCloseOutline } from "react-icons/io5";
import { Form } from "../../container";

const Cart = () => {
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
    <section className="w-full min-h-screen px-10">
      {/* title */}
      <h1 className="text-zinc-900 text-2xl font-bold text-center my-10">
        السلة
      </h1>

      <div className="mb-10 rounded-lg bg-gray-100 w-full py-5 px-3 flex flex-col md:flex-row gap-3 h-[640px] overflow-hidden">
        {/* products section */}
        <section className="w-1/2 h-full overflow-y-scroll">
          {/* products */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-full rounded-lg bg-white hover:shadow-lg duration-300 flex gap-x-2 group hover:cursor-pointer my-3 overflow-hidden"
            >
              {/* image */}
              <img src={img1} className="w-[100px] h-full" alt="" />
              {/* details of the product */}
              <div className="flex flex-row justify-between w-full">
                {/* product name and prices and quantity */}
                <div className="flex flex-col h-full gap-y-2">
                  {/* product name */}
                  <h1 className="text-zinc-900 text-lg font-bold">منتج أول</h1>
                  {/* product price */}
                  <div className="flex gap-x-3">
                    {/* new price */}
                    <h2 className="text-red-500 text-lg font-bold">555 دج</h2>
                    {/* old price */}
                    <h2 className="text-gray-500 text-lg font-bold line-through">
                      555 دج
                    </h2>
                  </div>

                  {/* quantity */}
                  <div className="flex iems-center gap-x-2 mt-4">
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
                </div>
                <IoCloseOutline className="m-3 text-2xl text-red-500 hover:bg-red-500 hover:text-white rounded-full group-hover:cursor-pointer" />
              </div>
            </div>
          ))}
        </section>
          {/* divider */}
          <div className="w-1 min-h-full bg-zinc-700 rounded mx-1"></div>
        {/* sum section */}
          <section className="w-full md:w-1/2">
            <h1 className="text-xl text-zinc-900 font-bold">معلومات عن السلة</h1>
            <h2 className="text-lg text-zinc-900 font-semibold">عدد المنتجات التي في السلة: <span className="text-red-500 underline underline-offset-4">5</span></h2>

            {/* form */}
            <h1 className="mt-5 text-lg underline text-center font-semibold">املىء الإستمارة:</h1>
            <Form />
          </section>

      </div>
    </section>
  );
};

export default Cart;
