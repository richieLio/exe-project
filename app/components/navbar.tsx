import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/miha-villa-logo.png"
                alt="Miha Villa Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Trang chủ
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-600 transition">
              Giới thiệu
            </Link>
            <Link href="#combo" className="text-gray-700 hover:text-primary-600 transition">
              Combo
            </Link>
            <Link href="#room-types" className="text-gray-700 hover:text-primary-600 transition">
              Loại phòng
            </Link>
            <Link href="#facilities" className="text-gray-700 hover:text-primary-600 transition">
              Tiện ích
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-600 transition">
              Liên hệ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Trang chủ
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Giới thiệu
            </Link>
            <Link href="#rooms" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Combo
            </Link>
            <Link href="#room-types" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Loại phòng
            </Link>
            <Link href="#facilities" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Tiện ích
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;