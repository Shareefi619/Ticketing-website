import { useState } from "react";

const VideoSection = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [nameError, setNameError] = useState('');
    const [dateError, setDateError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        if (event.target.value.trim() === '') {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
        if (event.target.value.trim() === '') {
            setDateError('Date is required');
        } else {
            setDateError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === '') {
            setNameError('Name is required');
        }

        if (date.trim() === '') {
            setDateError('Date is required');
        }

        if (name.trim() !== '' && date.trim() !== '') {
            // Handle form submission here
            // You can submit the form to the server or perform any other action.
        }
    };
    return (
        <section className="w3l-content-with-photo-6">
            <div className="contente-photo-hny-info py-5">
                <div className="container py-lg-5">
                    <div className="content-photo">
                        {/*popup*/}
                        <a
                            href="https://player.vimeo.com/video/92605278"
                            className="popup-with-zoom-anim play-view text-center position-absolute"
                        >
                            <span className="video-play-icon">
                                <span className="fa fa-play" />
                            </span>
                        </a>
                        {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            <iframe
                                src="https://player.vimeo.com/video/92605278"
                                allow="autoplay; fullscreen"
                                allowFullScreen=""
                            />
                            <button title="Close (Esc)" type="button" className="mfp-close">x</button>
                        </div>
                        {/*//popup*/}
                    </div>
                    <div className="content-photo-content">
                        <div className="content-photo-content-left">
                            <span className="sub-title">Short Video</span>
                            <h3 className="hny-title">Find Your Perfect Vacation</h3>
                        </div>
                        <div className="content-photo-content-right">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                                voluptatem tenetur consequatur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="booking-form-content">
                        <span className="sub-title">10-30% Off</span>
                        <h3 className="hny-title">Book Now</h3>
                        <form
                            action="search-results.html"
                            method="post"
                            className="booking-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="row book-form">
                                <div className="form-input col-md-4 mt-3">
                                    <label>Name</label>
                                    <input  type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} required="" />
                                    {nameError && <p className="error text-red-800">{nameError}</p>}
                                </div>
                                <div className="form-input col-md-4 mt-3">
                                    <label>Destination</label>
                                    <select name="selectpicker" className="selectpicker">
                                        <option value="">Any</option>
                                        <option value="africa">Africa</option>
                                        <option value="america">America</option>
                                        <option value="asia">Asia</option>
                                        <option value="eastern-europe">Eastern Europe</option>
                                        <option value="europe">Europe</option>
                                        <option value="south-america">South America</option>
                                    </select>
                                </div>
                                <div className="form-input col-md-4  mt-3">
                                    <label>Activity</label>
                                    <select name="activity" className="selectpicker">
                                        <option value="">Any</option>
                                        <option value="city-tours">City Tours</option>
                                        <option value="cultural-thematic-tours">
                                            Cultural &amp; Thematic Tours
                                        </option>
                                        <option value="family-friendly-tours">
                                            Family Friendly Tours
                                        </option>
                                        <option value="holiday-seasonal-tours">
                                            Holiday &amp; Seasonal Tours
                                        </option>
                                        <option value="indulgence-luxury-tours">
                                            Indulgence &amp; Luxury Tours
                                        </option>
                                        <option value="outdoor-activites">Outdoor Activites</option>
                                        <option value="relaxation-tours">Relaxation Tours</option>
                                        <option value="wild-adventure-tours">
                                            Wild &amp; Adventure Tours
                                        </option>
                                    </select>
                                </div>
                                <div className="form-input col-md-4 mt-3">
                                    <label>Duration</label>
                                    <select name="duration" className="selectpicker">
                                        <option value="">Any</option>
                                        <option value={1}>1 Day Tour</option>
                                        <option value={2}>2-4 Days Tour</option>
                                        <option value={5}>5-7 Days Tour</option>
                                        <option value={7}>7+ Days Tour</option>
                                    </select>
                                </div>
                                <div className="form-input col-md-4 mt-3 ">
                                    <label>Date</label>
                                    <input type="date" name="date" placeholder="Date" value={date} onChange={handleDateChange} required=""/>
                                    {dateError && <p className="error" >{dateError}</p>}
                                </div>
                                <div className="bottom-btn col-md-4 mt-3">
                                    <label>Submit</label>
                                    <button className="btn btn-style btn-primary w-100" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default VideoSection