// framer-motion
import { motion } from "framer-motion";

const PagesTitle: React.FC<{ title: string; discription?: string }> = ({
  title,
  discription,
}) => {
  // animition variables
  const animationVariables: { [key: string]: any } = {
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
    <div className="my-5">
      {/* page title */}
      <motion.h1
        variants={animationVariables}
        initial={"hidden"}
        animate={"visible"}
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-zinc-900"
      >
        {title}
      </motion.h1>
      {/* page discription */}
      <motion.p
        variants={animationVariables}
        initial={"hidden"}
        animate={"visible"}
        className="text-sm md:text-base lg:text-lg text-zinc-600"
      >
        {discription}
      </motion.p>
    </div>
  );
};

export default PagesTitle;
