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
        {showButton && (
          <button>
            Order a delivery
            {/* Bike Icon (Inline SVG) */}
            <svg
              className="bike-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18px"
              height="18px"
            >
              <path d="M19 15c-.28 0-.55.06-.8.16l-2.15-4.72.95-1.81h2V7h-3.44c-.34 0-.65.2-.79.51l-1.2 2.29L12.55 8h-.06c-.04 0-.09.01-.14.01-.2 0-.4-.06-.58-.17l-2.83-1.9a.983.983 0 0 0-1.11.03L3.69 8.43c-.45.3-.59.91-.28 1.36.3.45.91.58 1.36.28l3.12-2.07 1.49 1-.91 1.96L8.12 11H5c-.55 0-1 .45-1 1s.45 1 1 1h3.12l-.9 1.97c-.67.12-1.29.39-1.83.77l-1.93-.97c-.49-.25-1.09-.07-1.34.42-.25.49-.07 1.09.42 1.34l1.93.97c-.1.39-.16.8-.16 1.23 0 2.2 1.8 4 4 4s4-1.8 4-4c0-.34-.04-.68-.11-1H16c-.07.32-.11.66-.11 1 0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4zm-8.71 1.7c.06.31.11.63.11.96 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.53.01-.04.02-.09.03-.13l.1-.26.03-.06.01-.01.98-2.16 1.6 1.05-.93 2.14zm2.88-3.23 1.63 3.56c-.56.46-1.26.77-2.03.87l1.24-2.87c.09-.2.06-.43-.08-.6L11.3 10.5l.75-1.62 2.1 1.42-1.98 3.21zm5.83 5.53c-1.1 0-2-.9-2-2 0-.18.02-.36.07-.53l.98-.5 1.01.5c.06.18.1.38.1.58 0 1.1-.9 2-2 2zm-.5-3.86-.93-2.15H17l1.24 2.71-.04.02z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
