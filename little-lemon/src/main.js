// Main.js

import React from 'react';
import Card from './card'; // Assuming you have a Card component for the first and second sections
import './Main.css';

function Main() {
  return (
    <main className="main">
      {/* First Section */}
      <section className="section">
        <div className="section-heading">
          <h2>First Section</h2>
          <button className="menu-button">Menu</button>
        </div>
        <div className="card-container">
          <Card imageSrc="image1.jpg" subHeading="Item 1" price="$10" description="Lorem ipsum" />
          <Card imageSrc="image2.jpg" subHeading="Item 2" price="$15" description="Lorem ipsum" />
          <Card imageSrc="image3.jpg" subHeading="Item 3" price="$20" description="Lorem ipsum" />
        </div>
      </section>

      {/* Second Section */}
      <section className="section">
        <div className="section-heading">
          <h2>Testimonials</h2>
        </div>
        <div className="card-container">
          {/* Repeat this for each testimonial */}
          <Card rating="5" imageSrc="testimonial1.jpg" name="John Doe" caption="Amazing experience!" />
          {/* Repeat this for each testimonial */}
        </div>
      </section>

      {/* Third Section */}
      <section className="section">
        <div className="section-heading">
          <h2>Third Section</h2>
          <h3>Subtitle</h3>
        </div>
        <div className="image-container">
          <img src="image1.jpg" alt="Image 1" className="image1" />
          <img src="image2.jpg" alt="Image 2" className="image2" />
        </div>
        <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </section>
    </main>
  );
}

export default Main;
