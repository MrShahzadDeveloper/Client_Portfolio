import React from 'react';

const ServicesCard = ({ image, title, description, linkUrl = "#" }) => {
  return (
    <div className="bg-white hover:bg-secondary group rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col text-secondary group-hover:text-white flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title} || SEO Expert</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{description} || I am an SEO Expert in Pakistan Book me For Details </p>
        <a 
          href={linkUrl} 
          className="inline-block text-sm font-medium text-primary group-hover:text-secondary bg-secondary group-hover:bg-primary transition-colors px-4 py-2 rounded-md self-start"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
