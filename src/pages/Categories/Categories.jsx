import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";
const Categories = () => {
  return (
    <>
     <section>
        <SectionTitle
        subHeading={'from 11.00am to 10.pm'}
        heading={'Order Online'}
        ></SectionTitle>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-3xl uppercase -mt-16 text-center">Salads </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-3xl uppercase -mt-16 text-center">Pizza </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-3xl uppercase -mt-16 text-center">Soups </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-3xl uppercase -mt-16 text-center">Deserts </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-3xl uppercase -mt-16 text-center">Salads </h3>
        </SwiperSlide>
      </Swiper>
     </section>
    </>
  );
};

export default Categories;
