// swiper modules
import { Swiper, SwiperSlide } from "swiper/react";

// Section Title
import SectionTitle from "../../components/SectionTitle";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-40">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-40 flex flex-col text-center items-center gap-7">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />

                <p className="py-4">{review.details}</p>
                <h3 className="text-2xl text-amber-200">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
