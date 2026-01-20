import React from 'react'
import Rating from './Rating'

const Category = ({ book }) => {
  
    return (
        <div className="col">
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

                    <div className="d-flex justify-content-center w-100">
                        <Rating maxStars={5} />
                    </div>

                    {
                        book.price ? (

                            <p className="card-text text-success fw-semibold mb-4">{book.price}</p>

                        ) : null
                    }
                    <button className="btn btn-premium mt-auto">Read Now</button>
                </div>
            </div>
        </div>
    )
}

export default Category
