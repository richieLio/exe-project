import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'Hồ bơi vô cực',
      description: 'Tận hưởng không gian thư giãn với hồ bơi vô cực view toàn cảnh',
      icon: '🏊‍♂️'
    },
    {
      id: 2,
      title: 'Nhà hàng & Bar',
      description: 'Thưởng thức ẩm thực đặc sắc và đồ uống cao cấp',
      icon: '🍽️'
    },
    {
      id: 3,
      title: 'Spa & Massage',
      description: 'Dịch vụ spa cao cấp giúp thư giãn và chăm sóc sức khỏe',
      icon: '💆‍♀️'
    },
    {
      id: 4,
      title: 'Phòng Gym',
      description: 'Trang thiết bị hiện đại phục vụ tập luyện thể thao',
      icon: '💪'
    },
    {
      id: 5,
      title: 'Sân Vườn',
      description: 'Không gian xanh mát với cây cối và hoa tươi',
      icon: '🌳'
    },
    {
      id: 6,
      title: 'Dịch vụ đưa đón',
      description: 'Xe sang trọng đưa đón khách từ sân bay và tham quan',
      icon: '🚗'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="facilities-container py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="facilities-title text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tiện Ích Tại Miha Villa
      </motion.h2>
      <div className="facilities-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <motion.div
            key={facility.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="facility-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{facility.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Facilities;