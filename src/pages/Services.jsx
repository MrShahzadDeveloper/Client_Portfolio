import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import seoServices from "../../data/ServicesData";
import seo from "../assets/seo_about.png"
import FeedbackCarousel from "../components/FeedbackCarousel";

const Services = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-28 mb-24">
      <div className="flex justify-between mb-16">
        <div>
          <p className=" text-lg">WHAT WE DO</p>
          <h1 className="text-4xl font-bold leading-tight">OUR SERVICES</h1>
        </div>
        <div className="flex items-end">
          <Button
            label="See More Services"
            // onClick={handleClick}
            classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          />
        </div>
      </div>
      {/* <div className="mt-10">
        <h1>
          Outsource your link building, SEO & content marketing projects to our
          hands-on experience team. We do all painstaking tasks while you spend
          more time focusing on other business aspects.
        </h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {seoServices.slice(0, 3).map((item) => (
          <div key={item.id}>
            <ServicesCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-24">
        <img src={seo} alt="seo" className="w-[490px] md:w-[] " />
        <div>
          <div>
            <h3>What My Clients Say</h3>
            <h1 className="font-bold text-4xl">Our Clients Feedback</h1>
          </div>
          <div>
            <FeedbackCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;