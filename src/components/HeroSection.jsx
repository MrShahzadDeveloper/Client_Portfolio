import React, { useEffect, useRef } from 'react';
import Button from './Button';
import heroImg from '../assets/heroImg.png';
import { FaBusinessTime } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// TypingText Component
const TypingText = () => {
  const textRef = useRef(null);

  const texts = [
    "Best SEO Expert in Pakistan",
    "Google Ranking Specialist",
    "Your Digital Growth Partner"
  ];

  useEffect(() => {
    let index = 0;

    const typeLoop = () => {
      const tl = gsap.timeline();

      tl.to(textRef.current, {
        duration: 1.5,
        text: texts[index],
        ease: "power2.inOut",
      })
        .to(textRef.current, {
          duration: 0.5,
          delay: 2,
          text: "",
          ease: "power2.inOut",
          onComplete: () => {
            index = (index + 1) % texts.length;
            typeLoop();
          }
        });
    };

    typeLoop();
  }, []);

  return (
    <h1 className="text-xl md:text-3xl font-bold text-secondary">
      <span ref={textRef}></span>
      <span className="animate-blink">|</span>
    </h1>
  );
};

const HeroSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left content animation
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: leftRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Right image animation
    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: rightRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-10 xl:px-28 py-4 md:py-16 mb-12 lg:mb-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div ref={leftRef} className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <p className="text-xl font-bold text-grey">Hi I’m</p>
          <h2 className="text-5xl xl:text-7xl font-bold text-gray-900">Awais Saeed</h2>
          
          {/* Typing animated text */}
          <TypingText />

          <p className="text-grey text-xs md:text-base font-medium leading-relaxed">
            Looking to scale your search visibility, dominate Google rankings, and drive qualified traffic? You’ve just found the best SEO expert in Pakistan. I help global enterprises and local brands outrank their competition with tailored, ROI-focused SEO solutions.
          </p>

          <div className="md:pt-4 flex justify-center items-center lg:items-start lg:justify-start">
            <button className="px-8 py-3  text-white font-[500] flex gap-4 items-center justify-center bg-secondary hover:bg-secondary/90 transition rounded-lg">
              Let's Grow Your Business
              <FaBusinessTime color="#B2FAE3" size={25} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div ref={rightRef} className="w-full lg:w-1/2">
          <img src={heroImg} alt="SEO Expert" className="w-full mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
