import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-5 pb-4 mt-5 border-top" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-gradient">MovieDB</h5>
                        <p className="text-secondary">
                            Explore a vast collection of movies and series. Your gateway to entertainment starts here.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-primary">Products</h5>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Movies</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">TV Shows</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Documentaries</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">New Releases</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-primary">Useful links</h5>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Your Account</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Subscription Plans</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Watch History</a>
                        </p>
                        <p>
                            <a href="#" className="text-secondary text-decoration-none hover-primary">Help</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-primary">Contact</h5>
                        <p className="text-secondary">
                            <i className="fas fa-home mr-3 text-primary"></i> Hollywood, CA 90210, US
                        </p>
                        <p className="text-secondary">
                            <i className="fas fa-envelope mr-3 text-primary"></i> info@moviedb.com
                        </p>
                        <p className="text-secondary">
                            <i className="fas fa-phone mr-3 text-primary"></i> + 01 234 567 88
                        </p>
                    </div>
                </div>

                <hr className="mb-4" style={{ borderColor: 'var(--border-color)' }} />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-secondary">
                            Copyright ©2026 All rights reserved by:
                            <a href="#" className="text-decoration-none">
                                <strong className="text-primary mx-1">MovieDB</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
