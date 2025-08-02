import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import seoServices from "../../data/ServicesData";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-10 xl:px-28 mb-24">
      <div className="flex justify-center items-center my-16">
        <div ref={titleRef}>
          <h1 className="text-4xl font-bold">OUR SERVICES</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {seoServices.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <ServicesCard
              title={item.title}
              description={item.description}
              image={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
