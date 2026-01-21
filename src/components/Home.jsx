import React from 'react';
import { sliders, movies } from '../data';
import Rating from './Rating';
import { NavLink } from 'react-router-dom';

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
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" style={{ zIndex: 1 }}></div>
                <img
                  src={slide.src}
                  className="d-block w-100 h-100"
                  alt={slide.title}
                  style={{ objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-flex flex-column align-items-center justify-content-center h-100" style={{ zIndex: 2, top: 0, bottom: 0 }}>
                  <div className="bg-white bg-opacity-75 p-5 rounded-4 text-center shadow-lg" style={{ maxWidth: '800px', backdropFilter: 'blur(5px)' }}>
                    <h1 className="display-4 fw-bold mb-3 text-dark">{index === 0 ? "Welcome to MovieDB" : slide.title}</h1>
                    <p className="lead text-dark fw-medium opacity-75">Your ultimate destination for movies and series.</p>
                    <NavLink to="/movies" className="btn btn-primary btn-lg mt-3 fw-bold px-5 rounded-pill">Start Watching</NavLink>
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
            { title: "24/7", subtitle: "Online Streaming" },
            { title: "10k+", subtitle: "Total Movies" },
            { title: "5k", subtitle: "Happy Viewers" },
            { title: "100%", subtitle: "HD Quality" }
          ].map((stat, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="bg-white p-4 rounded-4 h-100 d-flex flex-column justify-content-center hover-lift transition shadow-sm border border-light">
                <h3 className="fw-bold text-primary mb-1">{stat.title}</h3>
                <p className="mb-0 text-secondary">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
          <h2 className="fw-bold m-0 text-dark">Featured Movies</h2>
          <NavLink to="/movies" className="btn btn-outline-primary rounded-pill px-4">View All</NavLink>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
                  <img
                    src={movie.image}
                    className="card-img-top w-100 h-100"
                    alt={movie.title}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
                  </div>
                </div>
                <div className="card-body p-4 d-flex flex-column flex-grow-1 bg-white">
                  <h5 className="card-title fw-bold mb-1 text-dark">{movie.title}</h5>
                  <h6 className="card-subtitle mb-3 text-secondary">{movie.author}</h6>
                  <Rating initialRating={movie.rating || 4} color="#ffc107" />
                  <p className="card-text small text-muted mb-4 line-clamp-3">{movie.desc}</p>
                  <button className="btn btn-light text-primary fw-bold w-100 mt-auto border">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid py-5 my-5 position-relative overflow-hidden bg-white">

        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4 text-dark">Cinema is the key to <span className="text-primary">imagination</span></h2>
              <p className="fs-5 text-secondary mb-5">
                Our database provides a comprehensive collection for movie lovers.
                Join our community today and get access to exclusive reviews and lists.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-5 shadow-lg">Sign Up Now</button>
                <button className="btn btn-outline-primary btn-lg px-5">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-2 rounded-4 rotate-3 bg-light border shadow-sm">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000&auto=format&fit=crop" alt="Cinema" className="img-fluid rounded-3 shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;