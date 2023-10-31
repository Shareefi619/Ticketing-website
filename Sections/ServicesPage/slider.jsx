import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

    const Slider = () => {
        return (
            <>
                <section className="w3l-grid-slider-vv">
                    <div className="grid-slider py-5">
                        <div className="container py-lg-5">
                            {/* /grids */}
                            <div id="owl-demo3" className="owl-carousel owl-theme owl-loaded owl-drag">
                                <div className="owl-stage">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={5}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"

                                >
                                    <SwiperSlide>
                                    <div className='owl-item active'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g1}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Paries</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$750</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item active'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g2}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Bankok</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        2Days, 3 Nights Start From <span>$650</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item active'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g3}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Maldives</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        2Days, 3 Nights Start From <span>$550</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item active'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g4}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Greece</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$950</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item active'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g5}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">London</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        2Days, 3 Nights Start From <span>$550</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g6}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Julian Alps</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$850</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g7}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Thailand</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$650</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g8}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Singapore</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$850</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g9}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Egypt</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$750</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='owl-item'>
                                        <div className="item">
                                            <div className="content-left-sec gal-slide-grid">
                                                <div className="gal-slide-img">
                                                    <a href="#">
                                                        <Image
                                                            src={g4}
                                                            className="img img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="gal-slide-info">
                                                    <a href="#">
                                                        <h4 className="mt-4 mb-0">Greece</h4>
                                                    </a>
                                                    <h6 className="mt-sm-2 mt-1">
                                                        3Days, 4 Nights Start From <span>$950</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        {/* /grids */}
                    </div>
                </section>

            </>
        )
    }

    export default Slider