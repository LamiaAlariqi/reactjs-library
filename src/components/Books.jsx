import React from 'react';
import { bookCategories } from '../data';
import Category from './category';

const Books = () => {
    return (
        <div className="container mt-5 mb-5" style={{ paddingTop: '80px' }}>
            <h1 className="text-center mb-5 fw-bold display-6 "><span className="text-gradient">Our Library Collection</span></h1>
            {bookCategories.map((category) => (
                <div key={category.id} className="mb-5">
                    <h3 className="category-title mb-4">
                        {category.title}
                    </h3>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                      
                        {category.books.map((book) => (
                            <Category  book={book} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Books;
