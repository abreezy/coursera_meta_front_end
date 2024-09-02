// Main.js

import React from 'react';
import Card from './card';
import './Main.css';
import footerLogo from './img/Asset 20@4x.png'

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
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/2a/33/db/6b/food-at-little-lemon.jpg" alt='Little lemon logo' />
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
            <Card imageSrc="https://www.thehungrybites.com/wp-content/uploads/2017/07/Authentic-Greek-salad-horiatiki-featured.jpg" subHeading="Greek salad" price="$10" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card imageSrc="https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg" subHeading="Bruschetta" price="$15" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Card imageSrc="https://www.wellplated.com/wp-content/uploads/2023/05/old-fashioned-lemon-cake.jpg" subHeading="Lemon cake" price="$20" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
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
          <Card rating="5/5" imageSrc="https://www.shutterstock.com/image-photo/handsome-man-eating-restaurant-260nw-145197316.jpg" name="John Doe" caption="Amazing experience!"showButton={false} />
          <Card rating="5/5" imageSrc="https://media.gettyimages.com/id/1174700903/photo/portrait-of-happy-customer-at-restaurant.jpg?s=1024x1024&w=gi&k=20&c=yZJ09oa3fyAKwrX0_pIXtvyYqbN3iR0qeG7mTKNMt0M=" name="John Doe" caption="Amazing experience!" showButton={false} />
          <Card rating="5/5" imageSrc="https://www.touchdynamic.com/wp-content/uploads/2014/05/bigstock-Happy-Staff-At-Restaurant-51586420-2048x1024.jpg" name="John Doe" caption="Amazing experience!" showButton={false} />
          <Card rating="5/5" imageSrc="https://www.shutterstock.com/image-photo/happy-restaurant-customer-holding-water-260nw-2393097787.jpg" name="John Doe" caption="Amazing experience!" showButton={false} />
          {/* Repeat this for each testimonial */}
        </div>
      </section>

      {/* Fourth Section */}
      <section className="section-4">
        <div className="section-heading-4">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </div>
        <div className="image-container">
          <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src={footerLogo} alt="Image 1" className="image1" />
          <img src="https://www.remodelista.com/wp-content/uploads/2015/03/img/sub/uimg/02-2011/longman-1.jpg" alt="Image 2" className="image2" />
        </div>
      </section>
    </main>
  );
}

export default Main;
