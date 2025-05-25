import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import patientAvatar from "../../assets/Images/patient-avatar.png";

const testimonials = [
  {
    name: "Ahmed El Amrani",
    feedback:
      "J'ai utilisé les services médicaux de SmartHealthCare. Le personnel est très professionnel et les médecins m'ont bien pris en charge. Très satisfait de la consultation.",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Nasrollah el yamami",
    feedback:
      "Excellent service ! Les médecins sont compétents et à l'écoute. Je recommande vivement.",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Youssef Bouzid",
    feedback:
      "Une expérience positive avec une équipe attentive et des consultations rapides. Les installations sont propres et modernes.",
    rating: 4,
    avatar: patientAvatar,
  },
  {
    name: "Adam laghoviz",
    feedback:
      "Très satisfaite de la consultation. Le médecin a pris le temps d'expliquer les traitements et m'a bien conseillée.",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Khalid Ait Hammou",
    feedback:
      "Je suis allé à SmartHealthCare pour une consultation, et je suis vraiment impressionné par la qualité des services et de l'accueil.",
    rating: 5,
    avatar: patientAvatar,
  },
  {
    name: "Reda Wiliwili",
    feedback:
      "Consultation très professionnelle avec un médecin à l'écoute. Je me suis sentie bien prise en charge, je recommande !",
    rating: 4,
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
