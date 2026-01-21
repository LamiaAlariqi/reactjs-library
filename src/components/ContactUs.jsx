
import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h2 className="display-6 fw-bold text-gradient " style={{ paddingTop: '100px' }}>Contact Us</h2>
                <p className="lead text-secondary">We're here to help and answer any question you might have.</p>
            </div>

            <div className="row g-4">
                <div className="col-md-6">
                    <div className="contact-card h-100 p-4">
                        <h4 className="card-title">Get in Touch</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-light">Name</label>
                                <input
                                    type="text"
                                    className="form-control contact-input"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-light">Email address</label>
                                <input
                                    type="email"
                                    className="form-control contact-input"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label text-light">Message</label>
                                <textarea
                                    className="form-control contact-input"
                                    id="message"
                                    rows="4"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-100 py-2 fw-bold">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="contact-card h-100 p-4">
                        <h4 className="card-title">Contact Information</h4>
                        <p className="text-secondary mb-4">
                            We'd love to hear from you. Reach out to us through any of the following channels.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-4 d-flex align-items-center">
                                <div className="contact-icon-wrapper">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div>
                                    <strong className="d-block text-white">Address</strong>
                                    <span className="text-secondary">123 Cinema Street, Hollywood, HW 90210</span>
                                </div>
                            </li>
                            <li className="mb-4 d-flex align-items-center">
                                <div className="contact-icon-wrapper">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div>
                                    <strong className="d-block text-white">Email</strong>
                                    <span className="text-secondary">contact@moviedb.com</span>
                                </div>
                            </li>
                            <li className="mb-4 d-flex align-items-center">
                                <div className="contact-icon-wrapper">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <div>
                                    <strong className="d-block text-white">Phone</strong>
                                    <span className="text-secondary">+1 (555) 123-4567</span>
                                </div>
                            </li>
                        </ul>

                        <hr className="border-secondary my-4" />

                        <div className="mb-4">
                            <h5 className="card-title mb-3">Business Hours</h5>
                            <div className="d-flex justify-content-between mb-2 text-secondary">
                                <span>Mon - Fri:</span>
                                <span>9:00 AM - 10:00 PM</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2 text-secondary">
                                <span>Saturday:</span>
                                <span>10:00 AM - 11:00 PM</span>
                            </div>
                            <div className="d-flex justify-content-between text-secondary">
                                <span>Sunday:</span>
                                <span>10:00 AM - 9:00 PM</span>
                            </div>
                        </div>

                        <div>
                            <h5 className="card-title mb-3">Follow Us</h5>
                            <div className="d-flex gap-3">
                                <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-facebook fs-5"></i>
                                </a>
                                <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-twitter-x fs-5"></i>
                                </a>
                                <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-instagram fs-5"></i>
                                </a>
                                <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-linkedin fs-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
