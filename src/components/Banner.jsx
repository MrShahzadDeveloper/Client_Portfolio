import Marquee from "react-fast-marquee";

// Sample logos (import your own)
import logo1 from "../assets/b1.svg";
import logo2 from "../assets/b2.svg";
import logo3 from "../assets/b3.svg";
import logo4 from "../assets/b4.svg";
import logo5 from "../assets/b5.svg";
import logo6 from "../assets/b6.svg";
import logo7 from "../assets/b7.svg";
import logo8 from "../assets/b8.svg";
import logo9 from "../assets/b9.svg";
import logo10 from "../assets/b10.svg";

const Banner = () => {
  return (
    <div className="bg-secondary py-4 overflow-hidden mb-32">
      <h1 className="text-5xl text-primary font-extrabold text-center py-10  ">LINKS I’VE LANDED</h1>
      <Marquee
        gradient={false}
        speed={130}
        direction="left"
        pauseOnHover={true}
        className="py-10 "
      >
        {[logo1, logo2, logo3, logo4, logo5,logo6 ,logo7, logo8 , logo9 , logo10 , logo1, logo2].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="h-24 mx-8 bg-primary p-5 rounded-xl "
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;
