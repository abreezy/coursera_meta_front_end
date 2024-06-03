// Card.js

import React from 'react';

function Card({ imageSrc, subHeading, price, description, rating, name, caption, showButton = true }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={subHeading || name} />
      <div className="card-content">
        <h3>{subHeading}</h3>
        {price && <p>{price}</p>}
        {description && <p>{description}</p>}
        {rating && <p>Rating: {rating}</p>}
        {name && <p>{name}</p>}
        {caption && <p>{caption}</p>}
        {showButton && <button>Order a delivery</button>}
      </div>
    </div>
  );
}

export default Card;
