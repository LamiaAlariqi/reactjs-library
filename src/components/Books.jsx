import React from 'react';
import { bookCategories } from '../data';

const Books = () => {
    return (
        <div className="container mt-5 mb-5" style={{ paddingTop: '80px' }}>
            <h1 className="text-center mb-5 fw-bold display-6 "><span className="text-gradient">Our Library Collection</span></h1>

            {/* First Map: Categories */}
            {bookCategories.map((category) => (
                <div key={category.id} className="mb-5">
                    <h3 className="category-title mb-4">
                        {category.title}
                    </h3>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {/* Second Map: Books within Category */}
                        {category.books.map((book) => (
                            <div className="col" key={book.id}>
                                <div className="book-card h-100 d-flex flex-column">
                                    <div className="position-relative overflow-hidden" style={{ height: '350px' }}>
                                        <img
                                            src={book.image}
                                            className="card-img-top w-100 h-100"
                                            alt={book.title}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', height: '50%' }}></div>
                                    </div>
                                    <div className="card-body d-flex flex-column text-center p-4">
                                        <h5 className="card-title fw-bold mb-1">{book.title}</h5>
                                        <h6 className="card-subtitle mb-3 text-secondary">{book.author}</h6>
                                        <button className="btn btn-premium mt-auto stretched-link">Read Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Books;
