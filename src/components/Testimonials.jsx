import React from 'react';
import '../styles/_testimonials.scss';
import quotes from '../assets/img/quotes.svg';
import fannie from '../assets/img/fannie.svg';
import albert from '../assets/img/albert.svg';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <h2>Clients are Loving Our App</h2>
      </div>
      <div className="testimonials-reviews">
        <div className="testimonial">
          <div className="testimonial-header">
            <img src={quotes} alt="Quote Icon" className="quote-icon" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.</p>
          <div className="testimonial-author">
            <img src={fannie} alt="Fannie Summers" />
            <div className="author-info">
              <h4>Fannie Summers</h4>
              <p>Designer</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="testimonial-header">
            <img src={quotes} alt="Quote Icon" className="quote-icon" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor.</p>
          <div className="testimonial-author">
            <img src={albert} alt="Albert Flores" />
            <div className="author-info">
              <h4>Albert Flores</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
