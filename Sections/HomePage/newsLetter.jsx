import { useState } from "react";
const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValid(emailRegex.test(email));
    };

    return (
        <section className="w3l-newsletter">
            {/* /form-25-section */}
            <div className="form-25-mian py-5">
                <div className="container py-lg-5">
                    <div className="forms-25-info">
                        <span className="sub-title-1">Lets Stay In Touch</span>
                        <h3 className="hny-title two">Sign Up for 25% Discount</h3>
                        <p>
                            Want to get an instant discount for your next tour? Leave your email
                            and sign up for our newsletter with 25% off all our offers.
                        </p>
                        <form action="#" method="post" className="signin-form mt-4 mb-2">
                            <div className="forms-gds">
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <button className="btn" onClick={validateEmail}>Submit</button>
                                {isValid &&
                                    <p className="">Email is not valid</p>}
                            </div>
                            <p className="action-link">
                                Subscribe to our free weekly newsletter for new update releases (no
                                spam)
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NewsLetter