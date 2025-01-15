import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import img2 from "../../assets/product/2.jpeg";
import img3 from "../../assets/product/3.jpeg";
import img4 from "../../assets/product/4.jpeg";
const images = [img2, img3, img4];
interface Props {
  customNavigationButtons?: boolean
  classname?: string
  classnameForDivParent?: string
}
const SwiperPro : React.FC<Props> = ({customNavigationButtons = true , classname , classnameForDivParent}) => {
  return (
    <div className={`h-full relative mb-4 ${classnameForDivParent}`}>
      <Swiper
        direction="horizontal"
        loop={true}
        autoplay={{ delay: 1000 }}
        // auto looping
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper "
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={`w-full bg-cover bg-no-repeat  bg-center ${classname}`}
            // min-h-[70vh]
            style={{ backgroundImage: `url(${image})`, width: "100%" }}
          ></SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      {customNavigationButtons && (
        <>
          <button className="custom-next absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
            &#10095;{/* Left arrow icon */}
          </button>
          <button className="custom-prev absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-gray-600/50 hover:bg-gray-600/80 text-white px-4 aspect-square rounded-full shadow-lg hover:bg-blue-500">
            &#10094;{/* Right arrow icon */}
          </button>
          {/* Custom Pagination */}
          <div className="custom-pagination absolute bottom-3 left-0 right-0 flex justify-center gap-x-3 z-10 translate-y-7"></div>
        </>
      )}
    </div>
  );
};

export default SwiperPro;