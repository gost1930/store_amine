import { useState } from "react";
// icons
import { MdOutlineModeComment } from "react-icons/md";
// components
import AddComment from "./AddComment/AddComment";

const Comment = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full h-fit p-2 md:p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl text-zinc-800 font-bold">التعليقات</h1>
        {/* add comment */}
        <div
          onClick={() => setIsOpen(true)}
          className="px-3 py-2 rounded-lg bg-black hover:shadow-3xl duration-300 cursor-pointer text-white font-semibold text-md flex items-center"
        >
          إضافة تعليق <MdOutlineModeComment className="text-md" />
        </div>
      </div>
      <div className="w-full h-[40vh] mt-5 bg-gray-50 rounded-2xl p-5 gap-y-3 flex flex-col overflow-y-auto scroll-">
        {/* <div className="w-full h-full flex items-center justify-center">
        <p className="text-zinc-600">لا يوجد تعليقات حتى الان</p>
      </div> */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="rounded-l-xl rounded-b-xl bg-gray-200 w-fit px-4 pb-3">
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
        ))}
      </div>

      {/* add comments Modal */}
      <AddComment isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Comment;
