import {
  SliderImg1,
  SliderImg2,
  SliderImg3,
} from "../components/ALL-IMAGES";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const SliderData = [
  {
    id: 1,
    imgLg: SliderImg1,
    alt: "Slider img 1",
    title: "Experience The Brightness of a Star",
    description: "",
  },
  {
    id: 2,
    imgLg: SliderImg2,
    alt: "Slider img 2",
    title: "Fress Beginning Comfort",
    description: "",
  },
  {
    id: 3,
    imgLg: SliderImg3,
    alt: "Slider img 3",
    title: "A Piece of Modern Art",
    description: "",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 2000,
        }}
        effect={"fade"}
        navigation={false}
        modules={[Autoplay, EffectFade, Pagination]}
        className="full_width_slider"
      >
        {SliderData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="inner_content w-screen h-[80vh] object-cover relative overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={item.imgLg}
                  alt={item.alt}
                />

                <div className="absolute lg:top-1/3 lg:left-20 top-20 left-5 z-50 w-[90%] md:w-96">
                  <h2 className="text-3xl text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_80%)] lg:[text-shadow:_0_0px_0px_rgb(0_0_0_/_0%)] lg:text-dark-primary2 font-bold mb-6 pr-3 md:pr-0">
                    {item.title}
                  </h2>
                  <button
                    type="button"
                    className="bg-brand-secondary hover:bg-brand-secondary/80 text-white py-3 px-12 rounded-sm transition-all duration-300 ease-linear"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
