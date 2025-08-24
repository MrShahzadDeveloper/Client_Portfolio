import React, { useEffect, useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contact from "../assets/contact.png";
import { ToastContainer, toast } from 'react-toastify';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  // Refs for animation
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const mapRef = useRef(null);

  // Animation Effect
  useEffect(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });


    gsap.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
      },
    });

    gsap.from(mapRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/awaislinkbuilder333@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Email failed');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success') {
      toast.success('Message sent successfully!');
      setStatus('idle');
    } else if (status === 'error') {
      toast.error('Failed to send message. Try again later.');
      setStatus('idle');
    }
  }, [status]);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 bg-gray-50">
      {/* Heading */}
      <div
        
        className="flex justify-center bg-secondary text-primary py-7 md:py-14 rounded-xl items-center mb-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-gray-900" ref={headingRef}>Contact Me</h2>
      </div>

      {/* Main Content (Form + Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div
          ref={formRef}
          className="w-full max-w-xl mx-auto p-6 sm:p-8 text-secondary bg-white rounded-2xl border-2 border-secondary shadow-md space-y-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Fields */}
            {[{ label: 'Name', name: 'name', type: 'text', value: formData.name },
              { label: 'Email', name: 'email', type: 'email', value: formData.email },
              { label: 'Subject', name: 'subject', type: 'text', value: formData.subject },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  value={field.value}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>
            ))}

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
              ></textarea>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />

            <button
              type="submit"
              className="w-full py-2 bg-secondary text-white font-semibold rounded-lg shadow hover:bg-secondary/90 transition"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Extra Contact Info */}
          <div className="pt-4 border-t border-gray-200 space-y-3 text-gray-600 text-sm">
            <p className="flex items-center gap-2">
              <div className='bg-secondary p-2 rounded-full'>
                <FaPhoneAlt className="text-primary " size={10} />
              </div> +92 3365493220
            </p>
            <p className="flex items-center gap-2">
              <div className='bg-secondary p-2 rounded-full'>
                <FaEnvelope className="text-primary" size={10} />
              </div> awaislinkbuilder333@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <div className='bg-secondary p-2 rounded-full'>
                <FaMapMarkerAlt className="text-primary" size={10} />
              </div>
              House No 40 Building # 093, Sector 11, Islamabad
            </p>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="w-full flex justify-center">
          <img src={contact} alt="Contact Illustration" className="" />
        </div>
      </div>

      {/* Google Map */}
      <div ref={mapRef} className="w-full max-w-5xl mx-auto mt-14 flex flex-col items-center">
        <iframe
          title="Awais SEO Solutions Location"
          className="w-full h-80 rounded-xl shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1542816307783!2d73.0616594!3d33.549367600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedb5452f27a1%3A0xb24a8d71f3c3be48!2sAwais%20SEO%20Solutions!5e0!3m2!1sen!2s!4v1754058886475!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          gestureHandling="cooperative"
        ></iframe>

        <a
          href="https://maps.app.goo.gl/8bqqv4T3Y2P3rDnz8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-4 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90 transition"
        >
          Get Directions on Google Maps
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
