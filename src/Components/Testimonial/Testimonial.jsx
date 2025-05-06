import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import patientAvatar from "../../assets/Images/patient-avatar.png";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "I have taken medical services from them. They treat so well and they are providing the best medical services.",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Jane Smith",
    feedback:
      "Excellent staff and doctors. Very professional and caring. Highly recommended!",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Michael Johnson",
    feedback:
      "Good experience overall. Facilities are clean and the service was quick.",
    rating: 4,
    avatar: patientAvatar,
  },
  {
    name: "Emily Brown",
    feedback:
      "I am very happy with the service. The doctor took the time to explain everything.",
    rating: 5,
    avatar: patientAvatar,
  },
];

const TestimonialCard = ({ name, feedback, rating, avatar }) => (
  <div className="py-[30px] px-5 rounded-lg shadow-md bg-white">
    <div className="flex items-center gap-[13px]">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-[50px] h-[50px] rounded-full"
      />
      <div>
        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
          {name}
        </h4>
        <div className="flex items-center gap-[2px]">
          {[...Array(rating)].map((_, i) => (
            <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
      {feedback}
    </p>
  </div>
);

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
