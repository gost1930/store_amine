import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Inputs } from "../../components";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

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
    !isOpen && window.scrollTo(0, 0)
    setIsOpen(!isOpen)
  };
  const links: string[] = [
    "الصفحة الرئيسية",
    "الفئات",
    "أسعار التوصيل",
    "تواصل معنا",
  ];
  return (
    <div>
      <motion.div
        variants={mainMotionProps}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        className=" fixed top-0 left-0 flex flex-row items-center gap-x-7 w-full px-20 shadow-lg py-5 bg-white z-50"
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
            <Link to={`/${link}`} key={index} className="w-full">
              <motion.div
                className="text-xl font-semibold py-2 px-3
                my-1 rounded hover:bg-gray-200 
                w-full
                "
                whileHover={{ translateX: -10 }}
              >
                {link}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
