import { photo2 } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'

const ChooseSection = () => {
    return (
        <>
            <section className="w3l-content-4">
                {/* /content-6-section */}
                <div className="content-4-main py-5">
                    <div className="container py-lg-5">
                        <div className="content-info-in row">
                            <div className="content-left col-lg-6 text-lg-right pr-lg-3">
                                <h3 className="hny-title">Why Choose Us</h3>
                                <p>
                                    Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus
                                    lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida
                                    felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus
                                    lacinia
                                </p>
                                <Image src={photo2} className="img-fluid mt-3" alt="" />
                            </div>
                            <div className="content-right col-lg-6 pl-lg-4">
                                <div className="row content4-right-grids mb-lg-5 mb-4">
                                    <div className="col-md-2 content4-right-icon">
                                        <div className="content4-icon">
                                            <span className="fa fa-thumbs-o-up" />
                                        </div>
                                    </div>
                                    <div className="col-md-10 content4-right-info">
                                        <h6>
                                            <a href="#">Packages</a>
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                                            sequi optio consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="row content4-right-grids mb-lg-5 mb-4">
                                    <div className="col-md-2 content4-right-icon">
                                        <div className="content4-icon">
                                            <span className="fa fa-tags" />
                                        </div>
                                    </div>
                                    <div className="col-md-10 content4-right-info">
                                        <h6>
                                            <a href="#">Specials</a>
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                                            sequi optio consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="row content4-right-grids mb-lg-5 mb-4">
                                    <div className="col-md-2 content4-right-icon">
                                        <div className="content4-icon">
                                            <span className="fa fa-suitcase" />
                                        </div>
                                    </div>
                                    <div className="col-md-10 content4-right-info">
                                        <h6>
                                            <a href="#">Retreats</a>
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam
                                            sequi optio consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ChooseSection