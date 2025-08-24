import React from "react";
import { testimonials } from "../../data/ServicesData";
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 lg:px-10 xl:px-28 pb-10 text-primary mb-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-secondary ">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-secondary shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.role}</p>
              
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) =>
                  starIndex < item.rating ? (
                    <FaStar key={starIndex} className="text-yellow-400 text-lg" />
                  ) : (
                    <FaRegStar key={starIndex} className="text-yellow-400 text-lg" />
                  )
                )}
              </div>

              <p className="text-gray-600 italic text-white">"{item.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
