import Image from 'next/image';
import React from 'react'
import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from '@/public/assets/images';

const Destination = () => {
    return (
        <>
            {/*destinations */}
            <section className="w3l-destinations-1">
                <div className="destionation-innf py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-5">
                            <span className="sub-title">Find Your</span>
                            <h3 className="hny-title mb-0">Destinations</h3>
                            <p>You are now free to move about the country.</p>
                        </div>
                        {/*/destinations-grids*/}
                        <ul className="gallery_agile">
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g1.jpg">
                                        <Image src={g1} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Paris</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Paris</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g2.jpg">
                                        <Image src={g2} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Bankok</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Bankok</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g3.jpg">
                                        <Image src={g3} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Maldives</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Maldives</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g4.jpg">
                                        <Image src={g4} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Greece</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Greece</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g5.jpg">
                                        <Image src={g5} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>London</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>London</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g6.jpg">
                                        <Image src={g6} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Julian Alps</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Julian Alps</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g7.jpg">
                                        <Image src={g7} alt="" className="img-fluid"/>
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Thailand</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Thailand</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g8.jpg">
                                        <Image src={g8} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Singapore</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Singapore</h4>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="w3_agile_portfolio_grid">
                                    <a href="assets/images/g9.jpg">
                                        <Image src={g9} alt=" " className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>Egypt</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="wthree_text2">
                                        <h4>Egypt</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/*//destinations-grids*/}
                    </div>
                </div>
            </section>
            {/*//destinations */}
        </>

    )
}

export default Destination;