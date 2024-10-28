
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị Hương",
      role: "Giám đốc Doanh nghiệp",
      image: "/testimonials/guest1.jpg",
      quote: "Miha Villa đã vượt xa mọi kỳ vọng của tôi. Tiện nghi sang trọng, dịch vụ chu đáo và tầm nhìn tuyệt đẹp đã tạo nên một kỳ nghỉ khó quên. Một trải nghiệm thực sự 5 sao.",
    },
    {
      name: "Trần Văn Nam",
      role: "Người Yêu Du Lịch",
      image: "/testimonials/guest2.jpg",
      quote: "Sự chú ý đến từng chi tiết tại Miha Villa thật đáng kinh ngạc. Từ thiết kế nội thất sang trọng đến dịch vụ quản gia cá nhân, mọi thứ đều hoàn hảo. Chắc chắn sẽ quay lại.",
    },
    {
      name: "Phạm Thu Hà",
      role: "Đầu Bếp Nổi Tiếng",
      image: "/testimonials/guest3.jpg",
      quote: "Là người đánh giá cao ẩm thực tinh tế, trải nghiệm ẩm thực tại Miha Villa thật xuất sắc. Không gian biệt thự riêng tư và kiến trúc tuyệt đẹp tạo nên bầu không khí sang trọng tuyệt đối.",
    }
  ];
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-neutral-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-16 transform hover:scale-105 transition-transform duration-300 text-green-600">
          Guest Experiences
        </h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            >
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 transform hover:scale-110 transition-transform duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-light">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic text-center relative">
                <span className="absolute -left-2 -top-2 text-4xl text-primary/20">"</span>
                <p className="leading-relaxed hover:text-primary transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <span className="absolute -right-2 bottom-0 text-4xl text-primary/20">"</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
