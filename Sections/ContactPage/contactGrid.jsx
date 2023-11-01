import React from 'react'

const ContactGrid = () => {
    return (
        <>
            <section className="w3l-contact-section-main">
                <div className="contact-sec-inner">
                    <div className="contacts-5-grid">
                        <div className="contacts-sub-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                            />
                        </div>
                        <div className="container">
                            <div className="map-content-5">
                                <input id="tab1" type="radio" name="tabs" defaultChecked="tabs" />
                                <label className="tabtle" htmlFor="tab1">
                                    Paris
                                </label>
                                <input id="tab2" type="radio" name="tabs" />
                                <label className="tabtle" htmlFor="tab2">
                                    Bankok
                                </label>
                                <input id="tab3" type="radio" name="tabs" />
                                <label className="tabtle" htmlFor="tab3">
                                    Maldives
                                </label>
                                <input id="tab4" type="radio" name="tabs" />
                                <label className="tabtle" htmlFor="tab4">
                                    Greece
                                </label>
                                <section id="content1" className="tab-content">
                                    <div className="d-grid grid-col-4">
                                        <div className="service-col-4 contact">
                                            <div className="icon-contact">
                                                <span className="fa fa-home" aria-hidden="true" />
                                            </div>
                                            <h6>Address</h6>
                                            <p>#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.</p>
                                        </div>
                                        <div className="service-col-4 contact">
                                            <div className="icon-contact">
                                                <span className="fa fa-envelope-o" aria-hidden="true" />
                                            </div>
                                            <h6>Email</h6>
                                            <a href="mailto:stroll1@example.com" className="link1">
                                                stroll1@example.com
                                            </a>
                                            <a href="mailto:stroll2@example.com" className="link1">
                                                stroll2@example.com
                                            </a>
                                        </div>
                                        <div className="service-col-4 contact">
                                            <div className="icon-contact">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <h6>Phone</h6>
                                            <a href="tel:+1(21) 224-016-8765" className="link1">
                                                1(21) 224-016-8765
                                            </a>
                                            <a href="tel:+1(21) 224-016-8764" className="link1">
                                                1(21) 224-016-8764
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section id="content2" className="tab-content">
                                    <div className="d-grid grid-col-4">
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-home" aria-hidden="true" />
                                            </div>
                                            <h6>Address</h6>
                                            <p>
                                                #302, 5th Floor, ALHK-2247 ek, Al Sharafi building, Dubai.
                                            </p>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-envelope-o" aria-hidden="true" />
                                            </div>
                                            <h6>Email</h6>
                                            <a href="mailto:stroll1@example.com" className="link1">
                                                stroll1@example.com
                                            </a>
                                            <a href="mailto:stroll2@example.com" className="link1">
                                                stroll2@example.com
                                            </a>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <h6>Phone</h6>
                                            <a href="tel:+1(21) 224-016-8764" className="link1">
                                                1(12) 422-610-4678
                                            </a>
                                            <a href="tel:+1(21) 224-016-8765" className="link1">
                                                1(21) 224-016-8765
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section id="content3" className="tab-content">
                                    <div className="d-grid grid-col-4">
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-home" aria-hidden="true" />
                                            </div>
                                            <h6>Address</h6>
                                            <p>
                                                #411, 3rd Floor, SALK-2247 ek, Al Sharafi building, Saudi
                                                Arabia.
                                            </p>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-envelope-o" aria-hidden="true" />
                                            </div>
                                            <h6>Email</h6>
                                            <a href="mailto:stroll1@example.com" className="link1">
                                                stroll1@example.com
                                            </a>
                                            <a href="mailto:stroll2@example.com" className="link1">
                                                stroll2@example.com
                                            </a>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <h6>Phone</h6>
                                            <a href="tel:+1(21) 224-016-8765" className="link1">
                                                1(21) 224-016-8765
                                            </a>
                                            <a href="tel:+1(21) 224-016-8764" className="link1">
                                                1(21) 224-016-8764
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section id="content4" className="tab-content">
                                    <div className="d-grid grid-col-4">
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-home" aria-hidden="true" />
                                            </div>
                                            <h6>Address</h6>
                                            <p>
                                                #248, 2nd Floor, RSSLK-2247 ek, Al Sharafi building, Russia.
                                            </p>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-envelope-o" aria-hidden="true" />
                                            </div>
                                            <h6>Email</h6>
                                            <a href="mailto:stroll1@example.com" className="link1">
                                                stroll1@example.com
                                            </a>
                                            <a href="mailto:stroll2@example.com" className="link1">
                                                stroll2@example.com
                                            </a>
                                        </div>
                                        <div className="service-col-4">
                                            <div className="icon-contact">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <h6>Phone</h6>
                                            <a href="tel:+1(21) 224-016-8764" className="link1">
                                                1(12) 422-610-4678
                                            </a>
                                            <a href="tel:+1(21) 224-016-8765" className="link1">
                                                1(21) 224-016-8765
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //contact-grid1 */}
            </section>

        </>
    )
}

export default ContactGrid