import { photo1 } from '@/public/assets/images'
import Image from 'next/image';

const FeaturePhoto = () => {
    return (
        <>
            <section className="w3l-feature-with-photo-1">
                <div className="feature-with-photo-hny py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-lg-5 mb-4">
                            <span className="sub-title">The Story</span>
                            <h3 className="hny-title"> About Us</h3>
                        </div>
                        <div className="feature-with-photo-content">
                            <div className="ab-in-flow row mb-lg-5 mb-3">
                                <div className="col-lg-6 ab-left">
                                    <Image src={photo1} className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 ab-right pl-lg-4">
                                    <h3 className="hny-title">Time to see the world</h3>
                                    <p className="my-4">
                                        Excepteur sint occaecat non proident, sunt in culpa quis.
                                        Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
                                        gravida felis vitae. Phasellus lacinia id, sunt in culpa quis.
                                        Phasellus lacinia
                                    </p>
                                    <p className="mb-4">
                                        Excepteur sint occaecat non proident, sunt in culpa quis.
                                        Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
                                    </p>
                                </div>
                            </div>
                            <div className="three-grids d-grid grid-columns-3 mt-lg-5">
                                <div className="grid">
                                    <h3 className="hny-title">What we Do ?.</h3>
                                </div>
                                <div className="grid">
                                    <h4>
                                        <a href="#">Diverse Destinations</a>
                                    </h4>
                                    <p>
                                        Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
                                    </p>
                                </div>
                                <div className="grid">
                                    <h4>
                                        <a href="#">Great Hotels</a>
                                    </h4>
                                    <p>
                                        Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
                                    </p>
                                </div>
                                <div className="grid">
                                    <h4>
                                        <a href="#">Fast Booking</a>
                                    </h4>
                                    <p>
                                        Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FeaturePhoto