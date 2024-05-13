// Main.js

import React from 'react';
import Card from './card';
import './Main.css';

function Main() {
  return (
    <main className="main">
      {/* First Section */}
      <section className="section-1">
        <div className="section-heading-1">
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="reserve-button">Reserve a table</button>
        </div>
        <div className="card-container-1">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/2a/33/db/6b/food-at-little-lemon.jpg" alt='Little lemon logo'></img>
        </div>
      </section>

      {/* Second Section */}
      <section className="section-2">
        <div className="section-heading-2">
          <h2>This week's specials!</h2>
          <button className="menu-button">Online menu</button>
        </div>
        <div className="row">
          <div className="card-container-2">
            <Card imageSrc="image1.jpg" subHeading="Item 1" price="$10" description="Lorem ipsum" />
            <Card imageSrc="image2.jpg" subHeading="Item 2" price="$15" description="Lorem ipsum" />
            <Card imageSrc="image3.jpg" subHeading="Item 3" price="$20" description="Lorem ipsum" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="section-3">
        <div className="section-heading-3">
          <h2>Testimonials</h2>
        </div>
        <div className="card-container-3">
          {/* Repeat this for each testimonial */}
          <Card rating="5" imageSrc="testimonial1.jpg" name="John Doe" caption="Amazing experience!" />
          <Card rating="5" imageSrc="testimonial1.jpg" name="John Doe" caption="Amazing experience!" />
          <Card rating="5" imageSrc="testimonial1.jpg" name="John Doe" caption="Amazing experience!" />
          <Card rating="5" imageSrc="testimonial1.jpg" name="John Doe" caption="Amazing experience!" />
          {/* Repeat this for each testimonial */}
        </div>
      </section>

      {/* Fourth Section */}
      <section className="section-4">
        <div className="section-heading-4">
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
