import React, { useState } from 'react';
import Star from './Star';

const Feedback = ({ numberOfStars }) => {
  const stars = new Array(numberOfStars).fill(true);
  const [hoverRating, setHoverRating] = useState(1);
  const [ratings, setRatings] = useState(0);

  return (
    <div className="container">
      {stars.map((star, idx) => (
        <Star
          onMouseLeave={() => setHoverRating(0)}
          onMouseEnter={() => setHoverRating(idx + 1)}
          onClick={() => setRatings(idx + 1)}
          starId={idx + 1}
          ratings={hoverRating || ratings}
          styleClass={{ color: 'white' }}
        />
      ))}
    </div>
  );
};

export default Feedback;
