import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setStatus('idle');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [status]);

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

  return (
    <section className="px-6 md:px-12 lg:px-20 xl:px-28 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Me</h2>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>

          {/* Feedback Message */}
          {status === 'success' && showSuccess && (
            <p className="text-green-600 font-medium">✅ Message sent successfully!</p>
          )}

          {status === 'error' && (
            <p className="text-red-600 font-medium">❌ Failed to send message. Try again later.</p>
          )}

          <button
            type="submit"
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="pt-6 space-y-3 text-sm text-gray-600">
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-secondary" /> +92 300 1234567
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-secondary" /> awais@example.com
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-secondary" />
            House no 1, Street no 6, Adyala Rd, Bankers Colony, Rawalpindi
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full max-w-5xl mx-auto mt-16 flex flex-col items-center">
        <iframe
          title="Awais SEO Solutions Location"
          className="w-full h-[450px] rounded-xl shadow-md"
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
          className="mt-6 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition"
        >
          Get Directions on Google Maps
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
