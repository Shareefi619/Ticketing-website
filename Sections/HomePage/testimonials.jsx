import Image from "next/image"
import { t1, t2, t3, t4, t5, t6 } from "@/public/assets/images"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Testimonials = () => {

    const testimonialData = [
        {
            name: "Theo Hall",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t1,
        },
        {
            name: "Jenna Johnson",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t2,
        },
        {
            name: "Linda Carini",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t3,
        },
        {
            name: "Mike Johnson",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t4,
        },
        {
            name: "Theo Hall",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t5,
        },
        {
            name: "Jenna Johnson",
            role: "SEO Expert",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: t6,
        },

    ];


    return (
        <>
            {/*Testimonials*/}
            <section className="w3l-companies-hny-6">
                <div className="cusrtomer-layout py-5">
                    <div className="container pt-lg-5">
                        <div className="title-content mb-lg-5 mb-4">
                            <span className="sub-title">Testimonials</span>
                            <h3 className="hny-title">Feedback from our Customers</h3>
                        </div>
                        {/* /grids */}
                        <div id="owl-demo1" className="owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="owl-stage">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"

                                >
                                    {testimonialData.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item">
                                                <div className="testimonial-content">
                                                    <div className="testimonial">
                                                        <blockquote>
                                                            <div className="icon-quote">
                                                                <span className="fa fa-quote-left" aria-hidden="true" />
                                                            </div>
                                                            <p>{testimonial.quote}</p>
                                                        </blockquote>
                                                        <div className="testi-des">
                                                            <div className="test-img">
                                                                <Image
                                                                    src={testimonial.image}
                                                                    className="img-fluid"
                                                                    alt="/" />
                                                            </div>
                                                            <div className="peopl">
                                                                <h3>{testimonial.name}</h3>
                                                                <p className="indentity">{testimonial.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* /grids */}
                </div>
            </section>
            {/*Testimonials*/}
        </>

    )
}

export default Testimonials;