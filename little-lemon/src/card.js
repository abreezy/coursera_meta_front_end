// Card.js

import React from 'react';

function Card({ imageSrc, subHeading, price, description, rating, name, caption }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={subHeading} />
      <div className="card-content">
        <h3>{subHeading}</h3>
        {price && <p>{price}</p>}
        {description && <p>{description}</p>}
        {rating && <p>Rating: {rating}</p>}
        {name && <p>{name}</p>}
        {caption && <p>{caption}</p>}
        <button>Order</button>
      </div>
    </div>
  );
}

export default Card;
