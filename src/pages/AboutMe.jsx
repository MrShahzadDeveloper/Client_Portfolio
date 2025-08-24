import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import about from "../assets/about.jpg";
import Testimonials from "../components/Testimonial";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  // 🔹 Refs for GSAP
  const headingRef = useRef(null);
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Heading Animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Text Block Animation
      gsap.from(textBlockRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textBlockRef.current,
          start: "top 85%",
        },
      });

      // Image Animation
      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });

      // Testimonials Animation
      gsap.from(testimonialsRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert(); // ✅ Cleanup GSAP on unmount
  }, []);

  return (
    <div>
      <div className="px-6 md:px-12 lg:px-10 xl:px-28 py-10">
        {/* Main Heading */}
        <div
          className="flex justify-center bg-secondary text-primary py-7 md:py-14 rounded-xl items-center mb-10"
          
        >
          <h1 className="text-4xl font-bold" ref={headingRef}>About Me</h1>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6" ref={textBlockRef}>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Grow Your Business with the{" "}
              <span className="text-secondary">Best SEO Expert</span> in
              Pakistan
            </h1>
            <p className="text-lg font-medium">Your Trusted SEO Partner</p>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Hi, I'm{" "}
                <span className="font-bold text-secondary">Awais</span>, an SEO
                strategist with 5+ years of experience helping Fortune 30+
                companies and high-growth startups scale their organic reach.
              </p>

              <p>
                I blend{" "}
                <span className="font-semibold">technical SEO</span>,{" "}
                <span className="font-semibold">advanced content strategy</span>
                , and{" "}
                <span className="font-semibold">white-hat link-building</span>{" "}
                to create bulletproof SEO systems. Whether you're a local
                business or a global brand, my goal is simple: make Google love
                you.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Why I'm considered the best SEO expert in Pakistan:
                </h3>
                <ul className="space-y-2 pl-5 list-disc">
                  <li className="font-medium">
                    Proven track record with global brands
                  </li>
                  <li className="font-medium">
                    Data-led strategies backed by performance metrics
                  </li>
                  <li className="font-medium">100% ethical, white-hat techniques</li>
                  <li className="font-medium">
                    Bespoke solutions for every client
                  </li>
                </ul>
              </div>
              <Button
                label="Let's build your organic growth engine"
                classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
              />
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2" ref={imageRef}>
            <img
              src={about}
              alt="SEO Expert Awais"
              className="rounded-xl shadow-xl w-full h-auto object-cover border-4 border-secondary"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </div>
  );
};

export default AboutMe;
