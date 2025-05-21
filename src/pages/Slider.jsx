import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} pagination={{
                clickable: true,
            }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}>
                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-1.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] opacity-60'>
                        <div className='p-20'>
                            <h1 className='text-center text-5xl rancho-regular'>💧 Smart Watering Reminders</h1>
                            <p className='text-center'>Set custom watering schedules and receive alerts before your plants get thirsty.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-2.webp)] bg-cover object-cover rounded-2xl text-[#263238] opacity-60'>
                        <div className='pt-30 px-10 text-end space-y-3.5'>
                            <h2 className='text-5xl font-bold'>🌿 Your Personal Plant Assistant</h2>
                            <p>Add, manage, and monitor all your houseplants in one personalized dashboard.</p>
                            <Link to='/add_plants'>
                                <button className='btn btn-wide'>Add Plants</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-3.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] opacity-60'>
                        <div className='text-start rancho-regular px-10 pt-24'>
                            <h2 className='text-7xl'>🌱 Nurture Your Green Family</h2>
                            <p className='text-xl'>Keep track of watering, feeding, and care schedules — never forget a plant again!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-4.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] opacity-60'>
                        <div className='text-end p-16 space-y-4'>
                            <h2 className='text-6xl font-bold'>🌞 Healthy Plants, Happy Home</h2>
                            <p className='text-lg'>Track plant health and growth to create a lush, vibrant indoor garden.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-5.webp)] bg-cover object-cover rounded-2xl text-[#263238] opacity-60'>
                        <div className='text-center p-16 space-y-3'>
                            <h2 className='text-6xl font-bold'>🧠 Beginner? No Problem!</h2>
                            <p className='text-lg'>Our app makes plant care easy with clear categories and care level labels.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-6.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] opacity-60'>
                        <div className='text-start p-16 space-y-3'>
                            <h2 className='text-5xl rancho-regular'>📅 Stay Ahead of Schedule</h2>
                            <p className='text-lg'>Log past care tasks and get auto-updated suggestions for next steps.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-7.webp)] bg-cover object-cover rounded-2xl text-[#263238] opacity-60'>
                        <div className='text-end p-20'>
                            <h2 className='text-6xl font-bold'>🛠️ Custom Care for Every Plant</h2>
                            <p className='text-lg'>From succulents to ferns — tailor care routines based on plant types and needs.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-full h-[600px] bg-[url(/swiper-bg-8.webp)] bg-cover object-cover rounded-2xl text-[#FFCA28] opacity-60'>
                        <div className='text-center p-20 space-y-3'>
                            <h2 className='text-6xl font-bold'>🌙 Switch Between Light & Dark Mode</h2>
                            <p className='text-lg'>Enjoy a soothing interface that fits your style — day or night.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;