import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const SlideShow = () => {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                modules={[Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide>
                    <div className="slide">
                        <img className="w-full max-h-135" src="./src/assets/nathana.jpg" alt="Slide 1" />
                        <div className="content absolute bottom-5 left-5 text-black text-left ml-30 mb-15">
                            <h2 className="text-3xl font-extrabold tracking-tight text-black">CONTEMPORARY DESIGN.</h2>
                            <p className="text-lg font-light leading-relaxed text-gray-700">A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img className="w-full max-h-135" src="./src/assets/shoper.jpg" alt="Slide 2" />
                        <div className="content absolute bottom-5 left-5 text-black text-left ml-30 mb-15">
                            <h2 className="text-3xl font-extrabold tracking-tight text-black">MODERN LAYOUTS.</h2>
                            <p className="text-lg font-light leading-relaxed text-gray-700">Create stunning pages with ease and flexibility.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <img className="w-full max-h-135" src="./src/assets/bench.jpg" alt="Slide 3" />
                        <div className="content absolute bottom-5 left-5 text-myblack text-left ml-30 mb-15">
                            <h2 className="text-3xl font-extrabold tracking-tight text-black">MODERN LAYOUTS.</h2>
                            <p className="text-lg font-light leading-relaxed text-gray-700">Create stunning pages with ease and flexibility.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Custom navigation buttons */}
            <button className="custom-prev absolute top-1/2 left-4 z-10 bg-black text-white p-2 rounded-full">
                ❮
            </button>
            <button className="custom-next absolute top-1/2 right-4 z-10 bg-black text-white p-2 rounded-full">
                ❯
            </button>
        </div>
    );
};

export default SlideShow;
