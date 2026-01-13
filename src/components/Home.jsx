import React from 'react';
import { sliders, books } from '../data';

const Home = () => {
  return (
    <>
      <div id="libraryCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {sliders.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#libraryCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {sliders.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="5000">
              <div className="position-relative" style={{ height: '80vh' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" style={{ zIndex: 1 }}></div>
                <img
                  src={slide.src}
                  className="d-block w-100 h-100"
                  alt={slide.title}
                  style={{ objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-flex flex-column align-items-center justify-content-center h-100" style={{ zIndex: 2, top: 0, bottom: 0 }}>
                  <div className="glass-panel p-5 rounded-4 text-center" style={{ maxWidth: '800px' }}>
                    <h1 className="display-5 fw-bold mb-3 text-gradient">{index === 0 ? "Welcome to our Library" : slide.title}</h1>
                    <p className="lead text-white opacity-75">Explore our vast collection of digital and physical resources.</p>
                    <button className="btn btn-primary btn-lg mt-3">Start Exploring</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#libraryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#libraryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div className="container py-5 my-5">
        <div className="row g-4 text-center">
          {[
            { title: "24/7", subtitle: "Online Access" },
            { title: "50k+", subtitle: "Total Books" },
            { title: "12k", subtitle: "Happy Readers" },
            { title: "100%", subtitle: "Free Resources" }
          ].map((stat, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="glass-panel p-4 rounded-4 h-100 d-flex flex-column justify-content-center hover-lift transition">
                <h3 className="fw-bold text-primary mb-1">{stat.title}</h3>
                <p className="mb-0 text-white-50">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0"><span className="text-gradient">Featured Collections</span></h2>
          <button className="btn btn-outline-primary rounded-pill">View All</button>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="book-card h-100 d-flex flex-column">
                <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
                  <img
                    src={book.image}
                    className="card-img-top w-100 h-100"
                    alt={book.title}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-black to-transparent p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    {/* Gradient Overlay */}
                  </div>
                </div>
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <h5 className="card-title fw-bold mb-1">{book.title}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">{book.author}</h6>
                  <p className="card-text small opacity-75 mb-4 line-clamp-3">{book.desc}</p>
                  <button className="btn btn-premium w-100 mt-auto">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid py-5 my-5 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'var(--surface-color)', zIndex: -1, opacity: 0.5 }}></div>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Reading is the key to <span className="text-gradient">knowledge</span></h2>
              <p className="fs-5 opacity-75 mb-5">
                Our library provides a peaceful environment for students and researchers.
                Join our community today and get access to exclusive workshops and events.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-5">Register Now</button>
                <button className="btn btn-outline-primary btn-lg px-5">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="glass-panel p-2 rounded-4 rotate-3">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" alt="Library" className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;