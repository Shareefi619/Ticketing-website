import { g1, g2, g3, g4, g5, g6 } from '@/public/assets/images'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check the scroll position and show/hide the button accordingly
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Add an event listener to the scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer className="w3l-footer-66">
                <section className="footer-inner-main">
                    <div className="footer-hny-grids py-5">
                        <div className="container py-lg-4">
                            <div className="text-txt">
                                <div className="right-side">
                                    <div className="row sub-columns">
                                        <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                                            <h2>
                                                <a className="navbar-brand" href="index.html">
                                                    Str
                                                    <span className="fa fa-globe" aria-hidden="true" />
                                                    ll
                                                </a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequuntur hic odio voluptatem tenetur consequatur.Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit.{" "}
                                            </p>
                                            <div className="columns-2">
                                                <ul className="social">
                                                    <li>
                                                        <a href="#facebook">
                                                            <span className="fa fa-facebook" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#linkedin">
                                                            <span className="fa fa-linkedin" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#twitter">
                                                            <span className="fa fa-twitter" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#google">
                                                            <span
                                                                className="fa fa-google-plus"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#github">
                                                            <span className="fa fa-github" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 sub-one-left mid-footer-gd">
                                            <div className="sub-two-right">
                                                <h6>Quick links</h6>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Home
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            About
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="services.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Destinations
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Contact
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sub-two-right">
                                                <h6>Help &amp; Support</h6>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Live Chart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Faq
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#support">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Support
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#terms">
                                                            <span className="fa fa-angle-double-right mr-2" />
                                                            Terms of Services
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 sub-one-left">
                                            <h6>Instagram Gallery </h6>
                                            <div className="column2 instagram-feeds">
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g1}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g2}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g3}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g4}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g5}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="b-img">
                                                    {" "}
                                                    <a href="#">
                                                        <Image
                                                            src={g6}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="below-section">
                        <div className="container">
                            <div className="copyright-footer">
                                <div className="columns text-lg-left">
                                    <p>
                                        © 2020 Stroll. All rights reserved. Design by{" "}
                                        <a href="https://w3layouts.com/" target="_blank">
                                            {" "}
                                            W3Layouts
                                        </a>
                                    </p>
                                </div>
                                <ul className="columns text-lg-right">
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                </section>

                <button
                    onClick={scrollToTop}
                    id="movetop"
                    title="Go to top"
                    style={{ display: isVisible ? 'block' : 'none' }}
                >
                    <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </button>

            </footer>

        </>
    )
}

export default Footer