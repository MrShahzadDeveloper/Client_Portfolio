import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { seoServices } from '../../data/ServicesData';
import { MdArrowCircleRight } from "react-icons/md";
import Button from '../components/Button';
import ReactMarkdown from "react-markdown";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = seoServices.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p>We couldn't find a service with ID: {id}</p>
        <button
          onClick={() => navigate('/services')}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          View All Services
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {service.title}
      </h1>

      {/* Service Image */}
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img 
            src={service.img} 
            alt={service.title} 
            className="w-full h-[400px] object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* Description (Markdown Rendering) */}
      <div className="prose prose-lg max-w-7xl  mx-auto mb-12">
        <ReactMarkdown>{service.description}</ReactMarkdown>
      </div>

      {/* Benefits List */}
      {service.benefits && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Key Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Why Choose Me */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-secondary">Why Choose Me?</h2>
        <p className="text-lg leading-relaxed">{service.whyChooseMe}</p>
      </div>

      {/* Call To Action */}
      <div className="flex justify-center">
        <Button
          label="Get this Service"
          classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

export default ServiceDetailPage;
