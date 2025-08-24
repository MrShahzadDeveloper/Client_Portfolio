import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from "../components/ServicesCard";
import { seoServices } from "../../data/ServicesData";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear refs each render
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Whole section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      // 🔹 Title animation
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

      // 🔹 Cards animation (staggered)
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
    });

    return () => ctx.revert(); // ✅ cleanup GSAP animations
  }, []);

  return (
    <div
      className="px-6 md:px-12 lg:px-10 xl:px-28 py-10"
      ref={sectionRef}
    >
      {/* Section Heading */}
      <div
        className="flex justify-center bg-secondary text-primary py-7 md:py-14 rounded-xl items-center mb-10"
      >
        <div ref={titleRef}>
          <h1 className="text-4xl font-bold">OUR SERVICES</h1>
        </div>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {seoServices.map((item, index) => (
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
    </div>
  );
};

export default Services;
