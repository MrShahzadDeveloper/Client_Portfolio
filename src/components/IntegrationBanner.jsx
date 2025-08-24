import React from "react";
import ahrefsLogo from "../assets/ahrefs.webp";
import semrushLogo from "../assets/semrush.webp";
import mozLogo from "../assets/moz.webp";
import gscLogo from "../assets/google-search.webp";

const integrations = [
  { name: "ahrefs", logo: ahrefsLogo },
  { name: "semrush", logo: semrushLogo },
  { name: "moz", logo: mozLogo },
  { name: "Google Search Console", logo: gscLogo },
];

const IntegrationsBanner = () => {
  return (
    <section className="bg-secondary px-6 md:px-12 lg:px-20 xl:px-32 py-12 mb-16">
      <div className="flex flex-col gap-12">

        {/* Text Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded mb-3 inline-block">
              INTEGRATIONS
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Work with <br className="hidden md:block" /> industry leaders
            </h2>
          </div>
          <p className="bg-primary text-secondary text-sm p-4 rounded-lg font-medium shadow-md max-w-md">
            Effortlessly integrate with the industry's leading link building software.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map(({ name, logo }) => (
            <div
              key={name}
              className="bg-primary p-4 rounded-xl flex items-center justify-center shadow-md min-h-[100px] hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img src={logo} alt={name} className="max-h-14 md:max-h-20 object-contain" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegrationsBanner;
