// framer-motion
import {motion} from "framer-motion"
const LodingPage = () => {
  return (
    <motion.div className="min-h-screen w-full grid place-content-center">
        <motion.div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-red-600"></motion.div>
    </motion.div>
  )
}

export default LodingPage;
