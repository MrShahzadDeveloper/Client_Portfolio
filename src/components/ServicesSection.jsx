import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import { seoServices } from "../../data/ServicesData";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear refs on each render to avoid duplicates
  cardsRef.current = [];

  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Cards animation
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 1.3,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // triggers a bit earlier
        },
      });
    });
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-10 xl:px-28 mb-24">
      <div className="flex justify-center items-center md:items-center md:justify-between flex-col md:flex-row mb-4 md:mb-16" ref={headingRef}>
        <div className="">
          <p className="text-lg text-center md:text-start">WHAT WE DO</p>
          <h1 className="text-4xl font-bold leading-tight">OUR SERVICES</h1>
        </div>
        <div className="md:flex items-end hidden">
          <Button
            label="See More Services"
            classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
            onClick={() => {
              navigate("/services");
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {seoServices.slice(0, 6).map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <ServicesCard
              id={item.id}
              title={item.cardTitle}
              description={item.description}
              image={item.img}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex md:hidden justify-center items-center md:items-end">
        <Button
          label="See More Services"
          classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          onClick={() => {
            navigate("/services");
          }}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
