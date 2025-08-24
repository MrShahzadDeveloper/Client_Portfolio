import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import logo from "../assets/logo.png";
import Button from '../components/Button'; // Adjust path as needed

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "MyWork", path: "/my-work" },
    { label: "About Me", path: "/about" },
    { label: "Contact Me", path: "/contact" },
  ];

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <nav className="px-6 md:px-12 lg:px-10 xl:px-28 py-4 w-full z-50 relative shadow-sm">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 md:w-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Navigation (visible on lg+) */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-[#0B424E]">
          {navItems.map(({ label, path }) => (
            <li
              key={label}
              onClick={() => navigate(path)}
              className="relative cursor-pointer group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0B424E] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Button (visible on md+) */}
        <div className="hidden md:flex">
          <Button
            label="Book a Meeting"
            onClick={handleClick}
            classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          />
        </div>

        {/* Hamburger Icon (visible only on small devices) */}
        <div className="flex lg:hidden text-2xl text-[#0B424E]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Fixed Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-primary shadow-md px-6 py-4 md:mt-16 transition-all duration-300 ease-in-out overflow-hidden z-[9999] ${
          menuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="flex flex-col gap-4 text-[#0B424E] font-medium">
          {navItems.map(({ label, path }) => (
            <li
              key={label}
              onClick={() => {
                setMenuOpen(false);
                navigate(path);
              }}
              className="hover:underline cursor-pointer transition-opacity duration-200"
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 mt-4">
          <Button
            label="Book a Meeting"
            onClick={handleClick}
            classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
