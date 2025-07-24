import React from 'react';
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { IoMail, IoLogoFacebook } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "MyWork", path: "/my-work" },
    { label: "About Me", path: "/about" },
    { label: "Contact Me", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-white rounded-t-3xl ">
      <div className="flex flex-col px-6 md:px-12 lg:px-20 xl:px-28 py-10 space-y-12">

        {/* Contact Short */}
        <div className="hidden md:flex flex-col md:flex-row justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 border border-primary rounded-md py-6 px-8">
            <div className='bg-primary p-2 rounded-full'>
              <IoMdCall className="text-lg " color='#0B424E' />
            </div>
            <span>+923365493220</span>
          </div>
          <div className="flex items-center gap-2 border border-primary rounded-md py-6 px-8">
            <div className='bg-primary p-2 rounded-full'>
              <IoMail className="text-lg" color='#0B424E' />
            </div>
            <span>awaislinkbuilder333@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 border border-primary rounded-md py-6 px-8">
            <div className='bg-primary p-2 rounded-full'>
              <FaLocationDot className="text-lg" color='#0B424E' />
            </div>
            <span>House No 40 Building # 093, Sector 11, Islamabad</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
            <img
              src={logo}
              alt="Logo"
              className="w-20 mb-4 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <p className="text-sm leading-relaxed text-center md:text-left">
              Expert SEO Strategist | SEO Audits | Technical SEO - I Help You Fix Technical SEO Issues. and all-around doodler who enjoys developing accessible, usable and engaging websites & apps that bring your products to life.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://www.facebook.com/rajaawais.rajaawais.14661" target="_blank" rel="noopener noreferrer">
                <div className='bg-primary p-2 rounded-full'>
                  <IoLogoFacebook className="text-2xl" color='#0B424E' />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rajpoot-awais/" target="_blank" rel="noopener noreferrer">
                <div className='bg-primary p-2 rounded-full'>
                  <RiLinkedinBoxFill className="text-2xl" color='#0B424E' />
                </div>
              </a>
              <a href="https://www.instagram.com/awais._.sd?igsh=ajl4aGVnZzc1bHIy" target="_blank" rel="noopener noreferrer">
                <div className='bg-primary p-2 rounded-full'>
                  <AiFillInstagram className="text-2xl" color='#0B424E' />
                </div>
              </a>
              <a href="https://wa.me/923365493220" target="_blank" rel="noopener noreferrer">
                <div className='bg-primary p-2 rounded-full'>
                  <IoLogoWhatsapp className="text-2xl" color='#0B424E' />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex flex-col md:items-center'>
            <h2 className="text-2xl font-bold mb-4">My Services</h2>
            <ul className="flex flex-col gap-3 text-lg">
              {navItems.map(({ label, path }) => (
                <div key={label} className='flex items-center gap-3'>
                  <div className='bg-primary p-2 rounded-full'>
                    <FaAngleRight className="text-sm" color='#0B424E' />
                  </div>
                  <li
                    onClick={() => navigate(path)}
                    className="relative cursor-pointer w-fit group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className=''>
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className='bg-primary p-2 rounded-full'>
                  <IoMdCall className="text-lg" color='#0B424E' />
                </div>
                <span>+923365493220</span>
              </div>
              <div className="flex items-center gap-2">
                <div className='bg-primary p-2 rounded-full'>
                  <IoMail className="text-lg" color='#0B424E' />
                </div>
                <span>awaislinkbuilder333@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className='bg-primary p-2 rounded-full'>
                  <FaLocationDot className="text-lg" color='#0B424E' />
                </div>
                <span>House No ABC, Sector 11, Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 border-t border-white/20 text-center text-xs text-white/60">
        © 2025 <span className="text-primary">awaislinkbuilder</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
