import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";

// Import your images
import img1 from '../assets/first.png';
import img2 from '../assets/s.PNG';
import img3 from '../assets/t.PNG';
import img4 from '../assets/f.PNG';
import img5 from '../assets/fv.PNG';
import img6 from '../assets/sx.PNG';

// Sample ServiceData array with imported images
const ServiceData = [
  {
    title: "Web Development",
    content: "Learn to build modern web applications.",
    backgroundImage: img1,
    icon: RxArrowTopRight,
  },
  {
    title: "Mobile Apps",
    content: "Create mobile apps for Android and iOS.",
    backgroundImage: img2,
    icon: RxArrowTopRight,
  },
  {
    title: "Data Science",
    content: "Analyze and interpret complex data.",
    backgroundImage: img3,
    icon: RxArrowTopRight,
  },
  {
    title: "Cyber Security",
    content: "Protect systems from digital attacks.",
    backgroundImage: img4,
    icon: RxArrowTopRight,
  },
  {
    title: "Cloud Computing",
    content: "Learn about cloud infrastructure.",
    backgroundImage: img5,
    icon: RxArrowTopRight,
  },
  {
    title: "AI & Machine Learning",
    content: "Explore AI and ML techniques.",
    backgroundImage: img6,
    icon: RxArrowTopRight,
  },
];

const ImageSlider = () => {
  return (
    <>
      <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
        <h1 className='text-3xl font-semibold text-black'>Students Projects</h1>
        <span className='text-[14px] mt-2 block'>
          Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good,
        </span>
      </div>
      <div className="flex items-center justify-center flex-col ">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[90%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 z-10">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
