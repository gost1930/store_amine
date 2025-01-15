import React from "react";
// icons
import { IoMdClose } from "react-icons/io";
// framer motion
import {motion} from "framer-motion"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  insideClick?: boolean;
  btnClose?: boolean;
  children: React.ReactNode;
}
const Modal : React.FC<ModalProps> = ({
  isOpen,
  onClose,
  insideClick,
  children,
  btnClose,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (insideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 bg-gray-500/20 grid place-items-center w-full h-screen z-50"
      onClick={handleBackdropClick}
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay:0.2}} className="bg-white pt-16 px-4 pb-3 w-fit max-w-xl rounded relative shadow-xl">
        {/* Close Button */}
        {btnClose && (
          <button
            onClick={onClose}
            className="absolute w-fit top-2 right-2 text-black bg-white hover:text-white aspect-square px-3 rounded-full hover:bg-red-500 duration-200"
          >
            <IoMdClose />
          </button>
        )}
        {/* Modal Content */}
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
