import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const slides = [
    {
        title: '💧 Smart Watering Reminders',
        text: 'Set custom watering schedules and receive alerts before your plants get thirsty.',
        align: 'center',
        bg: 'https://i.ibb.co/fV8PHGPQ/swiper-bg-1.webp',
        textColor: '#FFCA28',
        showButton: false,
    },
    {
        title: '🌿 Your Personal Plant Assistant',
        text: 'Add, manage, and monitor all your houseplants in one personalized dashboard.',
        align: 'end',
        bg: 'https://i.ibb.co/d0HpPTRV/swiper-bg-2.webp',
        textColor: '#263238',
        showButton: true,
        buttonText: 'Add Plants Now',
        buttonLink: '/dashboard/add-plant',
    },
    {
        title: '🌱 Nurture Your Green Family',
        text: 'Keep track of watering, feeding, and care schedules — never forget a plant again!',
        align: 'start',
        bg: 'https://i.ibb.co/ZRJgcd1T/swiper-bg-3.webp',
        textColor: '#FFCA28',
    },
    {
        title: '🌞 Healthy Plants, Happy Home',
        text: 'Track plant health and growth to create a lush, vibrant indoor garden.',
        align: 'end',
        bg: 'https://i.ibb.co/Zzz4fpn1/swiper-bg-4.webp',
        textColor: '#FFCA28',
    },
    {
        title: '🧠 Beginner? No Problem!',
        text: 'Our app makes plant care easy with clear categories and care level labels.',
        align: 'center',
        bg: 'https://i.ibb.co/tpKbh55M/swiper-bg-5.webp',
        textColor: '#263238',
    },
    {
        title: '📅 Stay Ahead of Schedule',
        text: 'Log past care tasks and get auto-updated suggestions for next steps.',
        align: 'start',
        bg: 'https://i.ibb.co/6c2HgM7x/swiper-bg-6.webp',
        textColor: '#FFCA28',
    },
    {
        title: '🛠️ Custom Care for Every Plant',
        text: 'From succulents to ferns — tailor care routines based on plant types and needs.',
        align: 'end',
        bg: 'https://i.ibb.co/BJtjwXq/swiper-bg-7.webp',
        textColor: '#263238',
    },
    {
        title: '🌙 Switch Between Light & Dark Mode',
        text: 'Enjoy a soothing interface that fits your style — day or night.',
        align: 'center',
        bg: 'https://i.ibb.co/7xfPY37Q/swiper-bg-8.webp',
        textColor: '#FFCA28',
    },
];

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
   }
`;

const Slider = () => {
    return (
        <div>
            <style>{customStyles}</style>
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`w-full h-[500px] rounded-2xl bg-overlay bg-cover bg-center bg-no-repeat text-[${slide.textColor}] flex items-center`}
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            <div
                                className={`p-8 sm:p-20 content-slide text-${slide.align} ${slide.align === 'center' ? 'w-full' : 'w-full sm:w-2/3 ml-auto mr-auto'
                                    }`}
                            >
                                <h2
                                    className={`text-4xl sm:text-5xl font-bold text-glow ${slide.align === 'center' ? 'text-center' : ''
                                        }`}
                                >
                                    {slide.title}
                                </h2>
                                <p className="text-lg mt-4">{slide.text}</p>
                                {slide.showButton && (
                                    <Link to={slide.buttonLink}>
                                        <button className="custom-btn mt-4">{slide.buttonText}</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
