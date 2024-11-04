import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Miha Villa Logo"
                width={60}
                height={60}
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-emerald-200 transition">
              Trang chủ
            </Link>
            <Link href="#about" className="text-white hover:text-emerald-200 transition">
              Giới thiệu
            </Link>
            <Link href="#combo" className="text-white hover:text-emerald-200 transition">
              Combo
            </Link>
            <Link href="#room-types" className="text-white hover:text-emerald-200 transition">
              Loại phòng
            </Link>
            <Link href="#facilities" className="text-white hover:text-emerald-200 transition">
              Tiện ích
            </Link>
            <Link href="#contact" className="text-white hover:text-emerald-200 transition">
              Liên hệ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-500/50">
            <Link href="/" className="block px-3 py-2 text-white hover:text-emerald-200">
              Trang chủ
            </Link>
            <Link href="#about" className="block px-3 py-2 text-white hover:text-emerald-200">
              Giới thiệu
            </Link>
            <Link href="#rooms" className="block px-3 py-2 text-white hover:text-emerald-200">
              Combo
            </Link>
            <Link href="#room-types" className="block px-3 py-2 text-white hover:text-emerald-200">
              Loại phòng
            </Link>
            <Link href="#facilities" className="block px-3 py-2 text-white hover:text-emerald-200">
              Tiện ích
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-white hover:text-emerald-200">
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;