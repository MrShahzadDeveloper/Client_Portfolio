import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { myWorks, myWorksGraph } from "../../data/ServicesData";
import MyWorkCard from "../components/myWorkCards";

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const [previewImage, setPreviewImage] = useState(null);

  // 🔹 GSAP refs
  const headingRef = useRef(null);
  const offPageHeadingRef = useRef(null);
  const onPageHeadingRef = useRef(null);
  const offPageCardsRef = useRef([]);
  const onPageCardsRef = useRef([]);

  // Clear refs before each render
  offPageCardsRef.current = [];
  onPageCardsRef.current = [];

  const closeModal = () => {
    setPreviewImage(null);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [previewImage]);

  // 🔹 GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Heading
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

      // Off-Page Section Heading
      gsap.from(offPageHeadingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: offPageHeadingRef.current,
          start: "top 85%",
        },
      });

      // Off-Page Cards
      offPageCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      // On-Page Section Heading
      gsap.from(onPageHeadingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: onPageHeadingRef.current,
          start: "top 85%",
        },
      });

      // On-Page Cards
      onPageCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    });

    return () => ctx.revert(); // ✅ Cleanup GSAP animations & ScrollTriggers
  }, []);

  return (
    <div className="relative ">
      <div className="px-6 md:px-12 lg:px-10 xl:px-28 py-10">
        {/* Main Heading */}
        <div
          className="flex justify-center bg-secondary text-primary py-7 md:py-14 rounded-xl items-center mb-10"
          // ref={headingRef}
        >
          <h1 className="text-4xl font-bold" ref={headingRef}>My Work</h1>
        </div>

        {/* Off-Page SEO Cards */}
        <p
          ref={offPageHeadingRef}
          className="text-center text-secondary font-bold text-4xl pb-8 md:pb-10"
        >
          Revenue-Boosting Off-Page SEO
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {myWorks.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (offPageCardsRef.current[index] = el)}
            >
              <MyWorkCard
                id={item.id}
                title={item.title}
                image={item.img}
                url={item.url}
              />
            </div>
          ))}
        </div>

        {/* On-Page SEO Images */}
        <p
          ref={onPageHeadingRef}
          className="text-center text-secondary font-bold text-4xl py-8 md:py-10"
        >
          Optimized On-Page SEO
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {myWorksGraph.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (onPageCardsRef.current[index] = el)}
              className="cursor-pointer"
              onClick={() => setPreviewImage(item.img)}
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform duration-300">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {previewImage &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeModal} // Close on clicking outside
          >
            <div
              className="relative max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
              >
                &times;
              </button>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MyWork;
