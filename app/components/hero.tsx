import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/miha1/deluxe.jpg"
          alt="Miha Villa Hero"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75 hover:scale-105 transition-transform duration-[2s]"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] font-playfair"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MIHA VILLA
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center mb-8 max-w-3xl backdrop-blur-sm bg-white/10 p-4 rounded-lg font-light text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] font-cormorant"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Trải nghiệm cuộc sống xa hoa tại khu nghỉ dưỡng biệt thự độc quyền của chúng tôi trong vòng tay của thiên nhiên
        </motion.p>
        <motion.div 
          className="space-x-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={scrollToNextSection}
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30 backdrop-blur-sm font-cormorant"
          >
            Tham Quan Ngay
          </button>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-6 h-6 text-amber-700 hover:text-amber-800 transition-colors duration-300"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;