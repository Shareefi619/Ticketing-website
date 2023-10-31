import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
            {/* Headers-4 block */}
            <section className="w3l-header-4">
                <div className="header-tophny">
                    <div className="container-fluid">
                        <header className="top-headerhny">
                            {/*/nav*/}
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link href="/" className="navbar-brand">
                                    Str
                                    <span className="fa fa-globe" aria-hidden="true" />
                                    ll
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link href="/" className="nav-link">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about" className="nav-link">
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/services" className="nav-link">
                                                Destinations
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact" className="nav-link">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/*//nav*/}
                        </header>
                    </div>
                </div>
            </section>
            {/* Headers-4 block */}
        </>
    );
};

export default Header;
