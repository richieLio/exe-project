
import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Trải nghiệm nghỉ dưỡng đẳng cấp tại Miha Villa',
      date: '15 Tháng 12, 2023',
      image: '/images/miha-1.jpg',
      excerpt: 'Khám phá không gian sang trọng và dịch vụ đẳng cấp 5 sao tại Miha Villa...'
    },
    {
      id: 2,
      title: 'Ẩm thực tinh tế tại nhà hàng Miha',
      date: '10 Tháng 12, 2023',
      image: '/images/miha-2.jpg',
      excerpt: 'Trải nghiệm ẩm thực độc đáo với các món ăn được chế biến bởi đầu bếp 5 sao...'
    },
    {
      id: 3,
      title: 'Top 5 tiện ích spa độc đáo tại Miha Villa',
      date: '5 Tháng 12, 2023',
      image: '/images/miha-3.jpg',
      excerpt: 'Thư giãn tuyệt đối với các liệu trình spa cao cấp được thiết kế riêng...'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          Tin tức & Trải nghiệm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-gold-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-gold-600 font-medium hover:text-gold-700 transition-colors">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
