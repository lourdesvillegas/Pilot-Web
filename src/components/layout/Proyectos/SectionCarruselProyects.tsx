import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../assets/images/slider1.jpg";
import img2 from "../../../assets/images/slider2.jpg";
import img3 from "../../../assets/images/slider3.jpg";
import img4 from "../../../assets/images/slider1.jpg";
import img5 from "../../../assets/images/slider2.jpg";
import img6 from "../../../assets/images/slider3.jpg";

const SectionCarruselProyects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={1.2}
          autoplay={{
          delay: 3000,              
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,     
        }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
          className="relative"
        >
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden ">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[full] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionCarruselProyects;
