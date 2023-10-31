import React from 'react';
import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <>
            {/*banner-slider*/}
            <section className='w3l-banner-slider-main '>
                <div className='banner-content'>
                    <div id="owl-demo2" className="owl-carousel owl-theme owl-loaded owl-drag">
                        <div className='owl-stage-outer'>
                            <div className='owl-stage'>
                                <div className='owl-item active'>
                                    {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper"> */}
                                        {/* <SwiperSlide> */}
                                            <div className="item">
                                                <div className="top-bannerhny-content">
                                                    <div className="top-bannerhny-left">
                                                        <div className="banner-innf">
                                                            <h6 className="hny-sub">Mountain Holiday</h6>
                                                            <h3>
                                                                Explore your Travel <span>Destinations</span>
                                                            </h3>
                                                            <p>Enjoy the Best Destinations with Our Travel Agency</p>
                                                            <div className="button-6">
                                                                <div className="eff-6" />
                                                                <Link href="/about">Read More</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="top-bannerhny-right"></div>
                                                </div>
                                            </div>
                                        {/* </SwiperSlide> */}
                                    {/* </Swiper> */}
                                </div>
                            </div>
                        </div>
                        {/* Slide 1 */}
                        {/* <div className="item">
                            <div className="grid grid-cols-2 items-center bg-gray-100">
                                <div className="top-bannerhny-left">
                                    <div className="banner-innf">
                                        <h6 className="hny-sub">Mountain Holiday</h6>
                                        <h3>
                                            Explore your Travel <span>Destinations</span>
                                        </h3>
                                        <p>Enjoy the Best Destinations with Our Travel Agency</p>
                                        <div className="button-6">
                                            <div className="eff-6" />
                                            <Link href="/about">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-bannerhny-right"></div>
                            </div>
                        </div> */}
                        {/* Slide 2 */}
                        {/* <div className="item">
                            <div className="top-bannerhny-content">
                                <div className="top-bannerhny-left">
                                    <div className="banner-innf">
                                        <h6 className="hny-sub">Mountain Holiday</h6>
                                        <h3>
                                            Enjoy your Dream <span>Vacation</span>
                                        </h3>
                                        <p>Enjoy the Best Destinations with Our Travel Agency</p>
                                        <div className="button-6">
                                            <div className="eff-6" />
                                            <Link href="/about">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-bannerhny-right one"></div>
                            </div>
                        </div> */}
                        {/* Slide 3 */}
                        {/* <div className="item">
                            <div className="top-bannerhny-content">
                                <div className="top-bannerhny-left">
                                    <div className="banner-innf">
                                        <h6 className="hny-sub">Balloon Flights</h6>
                                        <h3>
                                            Enjoy your Dream <span>Vacation</span>
                                        </h3>
                                        <p>Let's Enjoy The Wonders of Nature</p>
                                        <div className="button-6">
                                            <div className="eff-6" />
                                            <Link href="/about">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-bannerhny-right two"></div>
                            </div>
                        </div> */}
                        {/* Slide 4 */}
                        {/* <div className="item">
                            <div className="top-bannerhny-content">
                                <div className="top-bannerhny-left">
                                    <div className="banner-innf">
                                        <h6 className="hny-sub">Mountain Holiday</h6>
                                        <h3>
                                            Explore your Travel <span>Destinations</span>
                                        </h3>
                                        <p>Let's Enjoy The Wonders of Nature</p>
                                        <div className="button-6">
                                            <div className="eff-6" />
                                            <Link href="/about">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-bannerhny-right three"></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="w3l-bottom-grids-6">
    <div className="bottom-grids-info py-5">
      <div className="container py-lg-5">
        <div className="row bottomnhy-grids">
          <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
            <div className="about-gd-inn">
              <span className="fa fa-globe icon-fea1" aria-hidden="true" />
              <h5>
                <a href="about.html">Voyages &amp; Cruises</a>
              </h5>
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
            <div className="about-gd-inn">
              <span className="fa fa-hotel icon-fea1" aria-hidden="true" />
              <h5>
                <a href="about.html">Hotel Bookings</a>
              </h5>
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere .</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
            <div className="about-gd-inn">
              <span className="fa fa-plane icon-fea1" aria-hidden="true" />
              <h5>
                <a href="about.html">Air Tickets</a>
              </h5>
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
            <div className="about-gd-inn">
              <span
                className="fa fa-file-text-o icon-fea1"
                aria-hidden="true"
              />
              <h5>
                <a href="about.html">Visas</a>
              </h5>
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            {/* //banner-slider*/}
        </>
    );
}

export default Banner;
