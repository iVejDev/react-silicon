import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/_testimonials.scss';
import quotes from '../assets/img/quotes.svg';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Hämta testimonials-data från API:t
    axios.get('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => {
        console.log('Testimonials API response:', response.data);
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <h2>Clients are Loving Our App</h2>
      </div>
      <div className="testimonials-reviews">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-header">
              <img src={quotes} alt="Quote Icon" className="quote-icon" />
              <div className="stars">
                {[...Array(testimonial.starRating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            <p>{testimonial.comment}</p>
            <div className="testimonial-author">
              <img src={testimonial.avatarUrl || 'default-image-url'} alt={testimonial.author} />
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.jobRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
