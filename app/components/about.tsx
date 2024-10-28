import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent"
      >
        Về Miha Villa
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            Miha Villa là điểm đến nghỉ dưỡng sang trọng, nơi hội tụ giữa thiên nhiên và đẳng cấp.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            Với kiến trúc độc đáo và dịch vụ 5 sao, chúng tôi mang đến cho quý khách trải nghiệm nghỉ dưỡng hoàn hảo.
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] group"
        >
          <Image
            src="/images/about.jpg"
            alt="Miha Villa Overview"
            fill
            className="object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  )
}