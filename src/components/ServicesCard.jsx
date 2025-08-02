const ServicesCard = ({ image, title, description, linkUrl = "#" }) => {
  return (
    <div className="bg-white hover:bg-secondary group rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      {/* Responsive Image with Aspect Ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="py-5 px-2 flex flex-col text-secondary group-hover:text-white flex-grow">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-white line-clamp-2 mb-2">
          {title} <span className="hidden sm:inline">|| SEO Expert</span>
        </h3>

        <p className="text-sm md:text-base text-gray-600  group-hover:text-white mb-4 line-clamp-2 flex-grow">
          {description} || I am an SEO Expert in Pakistan. Book me for details.
        </p>

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
