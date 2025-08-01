// components/FeedbackCarousel.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import client_1 from "../assets/feedback_client-1.jpg";
import client_2 from "../assets/feedback_client-2.jpg";

const feedbacks = [
  {
    name: "Sarah",
    tag: "Marketing",
    feedback:
      "He understood our needs perfectly and delivered ahead of schedule.The design was modern, clean, and responsive across all devices.Communication was smooth and professional throughout the project.Highly recommended for any front-end development work!",
    img: client_1,
  },
  {
    name: "Kate",
    tag: "Marketing",
    feedback:
      "He understood our needs perfectly and delivered ahead of schedule.The design was modern, clean, and responsive across all devices.Communication was smooth and professional throughout the project.Highly recommended for any front-end development work!",
    img: client_2,
  },
];

export default function FeedbackCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full max-w-md"
    >
      {feedbacks.map((feedback, idx) => (
        <SwiperSlide key={idx}>
          <div className="p-4 bg-white rounded-xl flex flex-col gap-5 justify-center shadow-md h-[300px]">
            <div className="flex gap-4 ">
              <img
                src={feedback.img}
                alt={feedback.name}
                className="rounded-full w-[70px]"
              />
              <div>
                <h1 className="font-bold text-2xl">{feedback.name}</h1>
                <h2 className="text-grey">{feedback.tag}</h2>
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium mb-2 text-grey">
                "{feedback.feedback}"
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
