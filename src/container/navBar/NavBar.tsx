// hooks
import { useEffect, useState } from "react";
// framer motion
import { motion } from "framer-motion";
// cmponent
import { Inputs } from "../../components";
// icons
import { FaBarsStaggered } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdSearch } from "react-icons/md";
// router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mainMotionProps = {
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
      y: -100,
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
  const handleNav = () => {
    !isOpen && window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };
  interface LinksProps {
    name: string;
    path: string;
  }
  const links: LinksProps[] = [
    { name: "الصفحة الرئيسية", path: "" },
    { name: "أسعار التوصيل", path: "delivery_prices" },
    { name: "حالة الطلب", path: "order_status" },
    { name: "تواصل معنا", path: "contact" },
  ];
  const { pathname } = useLocation();
  // this logic for close the navBar i we click in any link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <div>
      <motion.div
        variants={mainMotionProps}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        className=" fixed top-0 left-0 flex flex-row items-center gap-x-7 w-full px-14 shadow-lg py-5 bg-white z-50"
      >
        <FaBarsStaggered
          size={30}
          className="rotate-180 cursor-pointer"
          onClick={handleNav}
        />
        <motion.h2 className="md:text-2xl font-bold">متجر أمين</motion.h2>
        <motion.div className="flex flex-row items-center gap-x-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="w-10"
            alt=""
          />
          <div className="relative hidden md:block">
            <Inputs type="text" placeholder="بحث" className="w-80" />
            <MdSearch
              size={30}
              className="cursor-pointer absolute top-1 left-2"
            />
          </div>
        </motion.div>
        {/* cart */}
        <Link to="/cart" className="relative">
          <CiShoppingCart size={30} className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-sm">
            0
          </span>
        </Link>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ x: +100 }}
          animate={{ x: 0 }}
          className="flex flex-col items-start justify-start px-3 py-16 absolute top-0 right-0 h-full w-full md:w-[40%] lg:w-[30%]
       bg-white z-50"
        >
          {/* close btn */}
          <IoMdClose
            className="rotate-180 cursor-pointer absolute top-2 left-2 hover:bg-black rounded border hover:text-white text-5xl"
            onClick={handleNav}
          />
          <div className="relative">
            <Inputs type="text" placeholder="بحث" className="w-80" />
            <MdSearch
              size={30}
              className="cursor-pointer absolute top-1 left-2"
            />
          </div>
          {links.map((link, index) => (
            <Link to={`/${link.path}`} key={index} className="w-full">
              <motion.div
                className="text-xl font-semibold py-2 px-3
                my-1 rounded hover:bg-gray-200 
                w-full
                "
                whileHover={{ translateX: -10 }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;