import { team1, team2, team3, team4 } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <>
            <section className="w3l-teams26-main">
                <div className="teams-26 py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-lg-5 mb-4">
                            <span className="sub-title">Our</span>
                            <h3 className="hny-title">Great Team</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <Image src={team1} className="img-fluid" alt="" />
                                        <div className="social_media_team">
                                            <p className="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent in erat interdum, euismod mauris aliquam.
                                            </p>
                                            <ul className="team_social">
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-prof">
                                        <h3 className="post-title">
                                            <a href="#">Jane Mcallister</a>
                                        </h3>
                                        <span className="post">Executive Officer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <Image src={team2} className="img-fluid" alt="" />
                                        <div className="social_media_team">
                                            <p className="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent in erat interdum, euismod mauris aliquam.
                                            </p>
                                            <ul className="team_social">
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-prof">
                                        <h3 className="post-title">
                                            <a href="#">Mandy Johnson</a>
                                        </h3>
                                        <span className="post"> Financial Officer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <Image src={team3} className="img-fluid" alt="" />
                                        <div className="social_media_team">
                                            <p className="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent in erat interdum, euismod mauris aliquam.
                                            </p>
                                            <ul className="team_social">
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-prof">
                                        <h3 className="post-title">
                                            <a href="#">Elly Spitch</a>
                                        </h3>
                                        <span className="post">HR Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <Image src={team4} className="img-fluid" alt="" />
                                        <div className="social_media_team">
                                            <p className="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Praesent in erat interdum, euismod mauris aliquam.
                                            </p>
                                            <ul className="team_social">
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-prof">
                                        <h3 className="post-title">
                                            <a href="#">Hanna Zafron</a>
                                        </h3>
                                        <span className="post">Customer Care</span>
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

export default Team