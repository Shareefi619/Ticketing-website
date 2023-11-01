import React, { useState } from 'react';

const faqData = [
    {
        question: 'Tour Guide',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
    {
        question: 'General Manager',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
    {
        question: 'Online Bookings',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
    {
        question: 'What should I bring on the trip',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
    {
        question: 'What do I need to know beforehand ?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
    {
        question: 'Online Bookings',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis ipsam culpa, qui voluptates eveniet, incidunt officiis eaque iste minima autem.',
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="w3l-faq-6">
            <div className="faqhny-content py-5">
                <div className="container py-lg-5">
                    <div className="far-grids-top">
                        <div className="faq-left">
                            <span className="sub-title-1">FaQs</span>
                            <h3 className="hny-title two">
                                We listen and work together to create a truly <br /> unique and
                                unforgettable experience.
                            </h3>
                        </div>
                        <div className="faq-pagev">
                            <ul>
                                {faqData.map((faq, index) => (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            checked={activeIndex === index}
                                            onChange={() => handleToggle(index)}
                                        />
                                        <i />
                                        <h4>{faq.question}</h4>
                                        {activeIndex === index && <p>{faq.answer}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
