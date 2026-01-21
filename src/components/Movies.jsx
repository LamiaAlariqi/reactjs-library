import React from 'react';
import { movieCategories } from '../data';
import Category from './category';

const Movies = () => {
    return (
        <div className="container mt-5 mb-5" style={{ paddingTop: '80px' }}>
            <h1 className="text-center mb-5 fw-bold display-4 text-dark">Explore Collections</h1>
            {movieCategories.map((category) => (
                <div key={category.id} className="mb-5">
                    <h3 className="category-title mb-4 text-dark border-bottom pb-2 border-2 d-inline-block border-primary">
                        {category.title}
                    </h3>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                        {category.books.map((movie) => (
                            <Category book={movie} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movies;
