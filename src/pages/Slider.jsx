import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Slider = () => {

    const customStyles = `
      .swiper-slide {
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      }
      .swiper-slide-active {
          transform: scale(1.02);
          opacity: 1 !important;
      }
      .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
      }
      .content-slide {
          transition: all 0.5s ease-in-out;
          transform: translateY(20px);
          opacity: 0;
      }
      .swiper-slide-active .content-slide {
          transform: translateY(0);
          opacity: 1;
      }
      .custom-btn {
          background: linear-gradient(45deg, #10B981, #34D399);
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .custom-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
      .text-glow {
          text-shadow: 0 0 10px rgba(255, 202, 40, 0.7);
      }
      .bg-overlay {
          position: relative;
          z-index: 1;
      }
      .bg-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          z-index: -1;
       }`;
    return (
        <div>
            <style>{customStyles}</style>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-1.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] bg-overlay">
                        <div className="p-20 content-slide">
                            <h1 className="text-center text-5xl rancho-regular text-glow">💧 Smart Watering Reminders</h1>
                            <p className="text-center mt-4 text-lg">Set custom watering schedules and receive alerts before your plants get thirsty.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-2.webp)] bg-cover object-cover rounded-2xl text-[#263238] bg-overlay">
                        <div className="pt-30 px-10 text-end space-y-3.5 content-slide">
                            <h2 className="text-5xl font-bold text-glow">🌿 Your Personal Plant Assistant</h2>
                            <p className="text-lg">Add, manage, and monitor all your houseplants in one personalized dashboard.</p>
                            <Link to="/add_plants">
                                <button className="custom-btn">Add Plants Now</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-3.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] bg-overlay">
                        <div className="text-start rancho-regular px-10 pt-24 content-slide">
                            <h2 className="text-7xl text-glow">🌱 Nurture Your Green Family</h2>
                            <p className="text-xl mt-4">Keep track of watering, feeding, and care schedules — never forget a plant again!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-4.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] bg-overlay">
                        <div className="text-end p-16 space-y-4 content-slide">
                            <h2 className="text-6xl font-bold text-glow">🌞 Healthy Plants, Happy Home</h2>
                            <p className="text-lg">Track plant health and growth to create a lush, vibrant indoor garden.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-5.webp)] bg-cover object-cover rounded-2xl text-[#263238] bg-overlay">
                        <div className="text-center p-16 space-y-3 content-slide">
                            <h2 className="text-6xl font-bold text-glow">🧠 Beginner? No Problem!</h2>
                            <p className="text-lg">Our app makes plant care easy with clear categories and care level labels.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-6.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] bg-overlay">
                        <div className="text-start p-16 space-y-3 content-slide">
                            <h2 className="text-5xl rancho-regular text-glow">📅 Stay Ahead of Schedule</h2>
                            <p className="text-lg">Log past care tasks and get auto-updated suggestions for next steps.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-7.webp)] bg-cover object-cover rounded-2xl text-[#263238] bg-overlay">
                        <div className="text-end p-20 content-slide">
                            <h2 className="text-6xl font-bold text-glow">🛠️ Custom Care for Every Plant</h2>
                            <p className="text-lg">From succulents to ferns — tailor care routines based on plant types and needs.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[600px] bg-[url(/swiper-bg-8.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] bg-overlay">
                        <div className="text-center p-20 space-y-3 content-slide">
                            <h2 className="text-6xl font-bold text-glow">🌙 Switch Between Light & Dark Mode</h2>
                            <p className="text-lg">Enjoy a soothing interface that fits your style — day or night.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;