import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in-down text-blue-900">
          Liên Hệ
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 transform transition-all duration-300 hover:w-32"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <FaPhone className="text-4xl text-blue-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Điện Thoại</h3>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">+84 123 456 789</p>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">+84 987 654 321</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Email</h3>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">info@mihavilla.com</p>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">booking@mihavilla.com</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Địa Chỉ</h3>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">123 Đường Miha</p>
            <p className="text-blue-800 hover:text-blue-600 transition-colors duration-300">Cần Thơ, Việt Nam</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12 mb-16">
          <a href="#" className="text-3xl text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-all duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl text-pink-600 hover:text-pink-800 transform hover:scale-125 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-3xl text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-all duration-300">
            <SiZalo />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4 text-blue-900 text-center">MIHA Villa 1</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.059154780456!2d105.74269477577856!3d10.011972672827055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089c67a47fedd%3A0xf25b848e39f1ea2f!2sMIHA%20Villa%201!5e0!3m2!1svi!2s!4v1729765493043!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4 text-blue-900 text-center">MIHA Villa 2</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.744684146955!2d105.77813977577866!3d10.037914972379617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089f06a213ed1%3A0xa742e9dfaae94fcc!2sMIHA%20VILLA%202!5e0!3m2!1svi!2s!4v1729765719489!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );};

export default Contact;