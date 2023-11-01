import Image from 'next/image';
const Destination = ({ destinations }) => {
    return (
        <>
            {/* destinations */}
            <section className="w3l-destinations-1">
                <div className="destionation-innf py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-5">
                            <span className="sub-title">Find Your</span>
                            <h3 className="hny-title mb-0">Destinations</h3>
                            <p>You are now free to move about the country.</p>
                        </div>
                        {/* destinations-grids */}
                        <ul className="gallery_agile">
                            {destinations.map((destination, index) => (
                                <li key={index}>
                                    <div className="w3_agile_portfolio_grid">
                                        <Image src={destination.imageUrl} alt={destination.name} className="img-fluid" />
                                        <div className="w3layouts_news_grid_pos">
                                            <div className="wthree_text">
                                                <h3>{destination.name}</h3>
                                            </div>
                                        </div>

                                        <div className="wthree_text2">
                                            <h4>{destination.name}</h4>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* //destinations-grids */}
                    </div>
                </div>
            </section>
            {/* //destinations */}
        </>
    );
};
export default Destination;