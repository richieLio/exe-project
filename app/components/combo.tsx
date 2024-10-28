import { motion } from 'framer-motion'
import { useState } from 'react'

interface RoomProps {
  title: string
  price: string
  activity: string
  total: string
  advantage: string
}

const RoomCard = ({ title, price, activity, total, advantage }: RoomProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 p-8 rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex flex-col h-full relative z-10"
        animate={{ scale: isHovered ? 1.02 : 1 }}
      >
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{ scale: isHovered ? 1.2 : 1 }}
        />
        
        <motion.h3 
          className="text-3xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          animate={{ scale: isHovered ? 1.05 : 1 }}
        >
          {title}
        </motion.h3>
        
        <div className="space-y-6 flex-grow">
          <motion.div 
            className="backdrop-blur-xl bg-white/70 p-6 rounded-2xl border border-gray-100 shadow-inner"
            whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.9)", scale: 1.02 }}
          >
            <p className="text-gray-700 font-medium">{price}</p>
          </motion.div>
          
          <motion.div 
            className="backdrop-blur-xl bg-white/70 p-6 rounded-2xl border border-gray-100 shadow-inner"
            whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.9)", scale: 1.02 }}
          >
            <p className="text-gray-700 font-medium">{activity}</p>
          </motion.div>
          
          <motion.div 
            className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {total}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-600 leading-relaxed">{advantage}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Combo = () => {
  const rooms = [
    {
      title: "Combo Trải nghiệm đầy đủ",
      price: "Dịch vụ cho thuê biệt thự và ăn sáng: 1,7 triệu",
      activity: "Trải nghiệm hoạt động: Tổ chức tiệc tối với đặc sản địa phương: 800.000 đồng",
      total: "Tổng cộng: 2,5 triệu đồng",
      advantage: "Ưu điểm: Bạn không chỉ cung cấp dịch vụ cho thuê biệt thự và ăn sáng mà còn đi kèm với một trải nghiệm độc đáo là tổ chức tiệc tối đặc sản địa phương. Điều này đã tạo ra một trải nghiệm hoàn hảo cho khách hàng, giúp họ thưởng thức đồ ăn địa phương và tạo ra kỷ niệm đặc biệt trong chuyến du lịch của họ."
    },
    {
      title: "Combo Khám phá tự do",
      price: "Dịch vụ cho thuê biệt thự và xe đạp: 1,8 triệu",
      activity: "Trải nghiệm hoạt động: Tổ chức tiệc tối với đặc sản địa phương: 800.000 đồng",
      total: "Tổng cộng: 2,6 triệu đồng",
      advantage: "Ưu điểm: Bạn không chỉ cung cấp dịch vụ cho thuê biệt thự và xe đạp mà còn đưa ra lựa chọn cho khách hàng khám phá khu vực bằng cách tự lái xe đạp. Khi kết hợp trải nghiệm bữa tối với đặc sản địa phương, đây sẽ là một lựa chọn hấp dẫn dành cho những du khách muốn khám phá và trải nghiệm văn hóa địa phương một cách tự động."
    },
    {
      title: "Combo Trải nghiệm độc đáo",
      price: "Giá thuê villa và dịch vụ (ăn sáng + xe đạp): 2 triệu",
      activity: "Trải nghiệm hoạt động: Tổ chức tiệc tối với đặc sản địa phương: 800.000 đồng",
      total: "Tổng cộng: 2,8 triệu đồng",
      advantage: "Ưu điểm: Bạn cung cấp gói dịch vụ hoàn thiện bao gồm thuê villa, dịch vụ ăn sáng và xe đạp. Bằng cách bổ sung thêm trải nghiệm trải nghiệm bữa tối với đặc sản địa phương, bạn tạo ra một trải nghiệm độc và an toàn cho khách hàng, giúp họ tận hưởng chuyến du lịch của mình một cách đầy đủ và đáng nhớ."
    }
  ]

  return (
    <motion.div 
      className="max-w-7xl mx-auto py-24 px-8 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.h2 
        className="text-6xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative z-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Phòng nghỉ
      </motion.h2>
      
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <RoomCard {...room} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Combo