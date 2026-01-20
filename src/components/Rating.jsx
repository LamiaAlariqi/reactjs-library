import React, { useState } from 'react';

const Rating = ({ maxStars = 5, initialRating = 0, onRate, color = "#ffc107" }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (starValue) => {
        setRating(starValue);
        if (onRate) {
            onRate(starValue);
        }
    };

    return (
        <div className="d-flex align-items-center gap-1 mb-3">
            {[...Array(maxStars)].map((_, index) => {
                const starValue = index + 1;
                const isActive = starValue <= (hover || rating);

                return (
                    <button
                        key={index}
                        type="button"
                        className="btn p-0 border-0 bg-transparent"
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                            transition: 'transform 0.2s',
                            transform: starValue <= hover ? 'scale(1.2)' : 'scale(1)'
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={isActive ? color : "none"}
                            stroke={isActive ? color : "#e4e5e9"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </button>
                );
            })}
            <span className="ms-2 text-muted small">
                {rating > 0 ? `${rating}/${maxStars}` : ''}
            </span>
        </div>
    );
};

export default Rating;
