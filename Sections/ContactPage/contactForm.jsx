import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        w3lName: '',
        w3lSender: '',
        w3lSubject: '',
        w3lMessage: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Form data is valid, you can proceed with form submission
            // Add your form submission logic here
            alert('Form submitted successfully');
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.w3lName.trim()) {
            errors.w3lName = 'Name is required';
        }
        if (!data.w3lSender.trim() || !isValidEmail(data.w3lSender)) {
            errors.w3lSender = 'Valid Email is required';
        }
        if (!data.w3lSubject.trim()) {
            errors.w3lSubject = 'Subject is required';
        }
        if (!data.w3lMessage.trim()) {
            errors.w3lMessage = 'Message is required';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    return (
        <>
            <section className="w3l-contact-section-form">
                <div className="contact-sec-inner py-5">
                    <div className="container py-lg-5">
                        <div className="contact-form-mainv">
                            <span className="sub-title">Contact Us</span>
                            <h3 className="hny-title">Keep In Touch With Us.</h3>
                            <p className="para-contact mb-lg-5 mb-4">
                                Welcome to leave your contact info, and we will be in touch shortly.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-4 form-group">
                                        <label htmlFor="w3lName">Your Name</label>
                                        <input
                                            type="text"
                                            name="w3lName"
                                            id="w3lName"
                                            value={formData.w3lName}
                                            onChange={handleChange}
                                        />
                                        {errors.w3lName && (
                                            <span className="error-text">{errors.w3lName}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-4 form-group">
                                        <label htmlFor="w3lSender">Your Email ID</label>
                                        <input
                                            type="text"
                                            name="w3lSender"
                                            id="w3lSender"
                                            value={formData.w3lSender}
                                            onChange={handleChange}
                                        />
                                        {errors.w3lSender && (
                                            <span className="error-text">{errors.w3lSender}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-4 form-group">
                                        <label htmlFor="w3lSubject">Subject</label>
                                        <input
                                            type="text"
                                            name="w3lSubject"
                                            id="w3lSubject"
                                            value={formData.w3lSubject}
                                            onChange={handleChange}
                                        />
                                        {errors.w3lSubject && (
                                            <span className="error-text">{errors.w3lSubject}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="w3lMessage">Message</label>
                                    <textarea
                                        name="w3lMessage"
                                        placeholder=""
                                        value={formData.w3lMessage}
                                        onChange={handleChange}
                                    />
                                    {errors.w3lMessage && (
                                        <span className="error-text">{errors.w3lMessage}</span>
                                    )}
                                </div>
                                <div className="form-submit text-right mt-4">
                                    <button type="submit" className="btn submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ContactForm;
