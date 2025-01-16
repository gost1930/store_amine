// components
import { PagesTitle } from "../../components";
// react-icons
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

// react-router
import { Link } from "react-router-dom";

// framer-motion
import { motion } from "framer-motion";

const Contact = () => {
  const sclMidia: any = [
    {
      icon: <FaFacebook size={100} className="text-blue-800" />,
      link: "",
    },
    {
      icon: <AiFillInstagram size={100} className="text-pink-600" />,
      link: "",
    },
    {
      icon:<RiTwitterXFill size={100} className="text-black" />,
      link: "",
    },
    {
      icon: <FaTelegram size={100} className="text-blue-600" />,
      link: "",
    },
    {
      icon: <FaYoutube size={100} className="text-red-600" />,
      link: "",
    },
    {
      icon: <FaSnapchatGhost size={100} className="text-yellow-400" />,
      link: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="w-full min-h-screen h-fit"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <PagesTitle title="تواصل معنا" />

      {/* content */}
      <section className="w-full h-fit flex flex-col md:flex-row gap-5">
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl text-zinc-800 font-bold mb-4">مواقع التواصل الإجتماعي:</h1>
          {/* scl midia */}
          <motion.div
            className="w-full flex flex-wrap justify-center md:justify-start items-center gap-5"
            variants={containerVariants}
          >
            {sclMidia.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
                variants={itemVariants}
              >
                <Link to={item.link}>{item.icon}</Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="w-full md:w-1/2 h-fit" variants={itemVariants}>
          {/* address */}
          <h1 className="text-3xl text-zinc-800 font-bold mb-4">المحل على الخريطة:</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15406.86340977167!2d1.6663534!3d36.21898285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x128439aec50d298d%3A0xe8e25c0fcf010acf!2zNk1DQytXUDMg2YXYrdmE2KfYqiDYp9mE2LLZiNin2YTZiiDYp9mE2LnYt9in2YEg2YTZhNij2KvYp9irINin2YTZhdmG2LLZhNmKLCBFbCBBdHRhZg!3m2!1d36.222267099999996!2d1.6717271999999999!5e1!3m2!1sar!2sdz!4v1737067677390!5m2!1sar!2sdz"
            width="600"
            height="450"
            className="w-full h-[400px] rounded-2xl"
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </motion.section>
  );
};

export default Contact;
