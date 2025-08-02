import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 5, suffix: "+", label: "Years Of Experience" },
  { end: 100, suffix: "+", label: "Happy Clients" },
  { end: 12, suffix: "", label: "Programs & Trainings" },
];

const StatsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="bg-secondary text-primary px-4 sm:px-6 md:px-10 lg:mx-10 xl:mx-28 py-16 lg:rounded-2xl mb-20 sm:mb-24 "
    >
      {/* Header Text */}
      <div className="flex flex-col justify-center items-center mb-12 text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Success is the <span className="text-primary">vision</span>, Growth is the <span className="text-primary">mission</span>
        </h2>
        <p className="text-sm sm:text-base text-white max-w-4xl font-medium tracking-wide leading-relaxed">
          Awais provides top-notch SEO strategies to his clients, whether the website or business is new or old, and whether it's a service-based site, an eCommerce platform, or a blog. All Awais does is apply updated SEO techniques to make your website more visible and search engine friendly.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[280px] bg-primary text-secondary px-6 py-10 rounded-2xl shadow-lg text-center"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
              {inView ? (
                <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
              ) : (
                "0" + stat.suffix
              )}
            </div>
            <div className="text-sm sm:text-base md:text-lg font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
