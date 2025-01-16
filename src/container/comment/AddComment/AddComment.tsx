// import {useState} from 'react'
// components
import { Inputs, Modal } from "../../../components";
// icons
import { RiStarSFill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddComment: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} insideClick={true} onClose={onClose} btnClose={true}>
      <h1 className="text-3xl text-zinc-800 font-bold">اضافة تعليق</h1>
      <form action="">
        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="username">الإسم</label>
            <Inputs
              type="text"
              id="username"
              placeholder="ادخل الاسم"
              className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-gray-500 focus:outline-zinc-400"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email">الإيميل</label>
            <Inputs
              type="text"
              id="email"
              placeholder="ادخل الإيميل الخاص بك"
              className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-gray-500 focus:outline-zinc-400"
            />
          </div>
        </div>
        {/* rating withe stars */}
        <div>
          <label htmlFor="email">التقييم</label>
          <div className="flex items-center gap-x-2">
            {[1, 2, 3, 4].map((index) => (
              <>
                <RiStarSFill
                  key={index}
                  className="text-2xl text-amber-500 cursor-pointer"
                />
                {/* <RiStarSLine /> */}
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">التعليق</label>
          <textarea
            name=""
            className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-gray-500 focus:outline-zinc-400"
            id=""
          ></textarea>
        </div>
        {/* submit btn */}
        <button className="bg-black text-white rounded-lg px-3 py-2 my-5 text-md font-semibold hover:bg-zinc-800 duration-300">
          ارسال
        </button>
      </form>
    </Modal>
  );
};

export default AddComment;
