import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <>
            {/*pricing-16*/}
            <section className="w3l-pricing-16-main">
                <div className="pricing-content py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-lg-5 mb-4">
                            <span className="sub-title">Packages</span>
                            <h3 className="hny-title">Pricing Plans</h3>
                        </div>
                        <div className="row w3l-pricing-7-gd-top pt-4">
                            <div className="col-lg-4 col-md-6 w3l-pricing-7-gd-left">
                                <div className="w3l-pricing-7  pric-7-1">
                                    <div className="w3l-pricing-7-top">
                                        <h6>Basic</h6>
                                        <h3 className="title-sub">
                                            <label>$</label>100<span>/mo</span>
                                        </h3>
                                    </div>
                                    <div className="w3l-pricing-7-bottom">
                                        <div className="w3l-pricing-7-bottom-bottom">
                                            <ul className="links">
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Lorem ipsum dolor
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Sit amet, consectetu
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Unde omnis iste natus
                                                </li>
                                                <li className="tick-info disable">
                                                    <span className="fa fa-times" aria-hidden="true" />
                                                    Dolore magna aliqua
                                                </li>
                                                <li className="tick-info disable">
                                                    <span className="fa fa-times" aria-hidden="true" />
                                                    Integer et augue
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="buy-button text-center">
                                            <div className="button-6">
                                                <div className="eff-6" />
                                                <Link href="/contact">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 w3l-pricing-7-gd-left active">
                                <div className="w3l-pricing-7 pric-7">
                                    <div className="w3l-pricing-7-top">
                                        <h5>Popular</h5>
                                        <h6>Standard</h6>
                                        <h3 className="title-sub">
                                            <label>$</label>300<span>/mo</span>
                                        </h3>
                                    </div>
                                    <div className="w3l-pricing-7-bottom">
                                        <div className="w3l-pricing-7-bottom-bottom">
                                            <ul className="links">
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Lorem ipsum dolor
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Sit amet, consectetu
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Sed do eiusmod tempor
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Dolore magna aliqua
                                                </li>
                                                <li className="tick-info disable">
                                                    <span className="fa fa-times" aria-hidden="true" />
                                                    Integer et augue
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="buy-button text-center">
                                            <div className="button-6">
                                                <div className="eff-6" />
                                                <Link href="/contact">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 w3l-pricing-7-gd-left">
                                <div className="w3l-pricing-7 pric-7-2">
                                    <div className="w3l-pricing-7-top">
                                        <h6>Exclusive</h6>
                                        <h3 className="title-sub">
                                            <label>$</label>395<span>/mo</span>
                                        </h3>
                                    </div>
                                    <div className="w3l-pricing-7-bottom">
                                        <div className="w3l-pricing-7-bottom-bottom">
                                            <ul className="links">
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Ut enim ad minim
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Quis nostrud exerc
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Ullamco laboris nisi ut
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Dolore magna aliqua
                                                </li>
                                                <li className="tick-info">
                                                    <span className="fa fa-check" aria-hidden="true" />
                                                    Integer et augue
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="buy-button text-center">
                                            <div className="button-6">
                                                <div className="eff-6" />
                                                <Link href="/contact">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //pricing-16 */}
        </>

    )
}

export default Pricing