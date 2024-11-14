import React, { useState } from 'react';
import '../styles/_newsletter.scss';
import notification from '../assets/img/notification.svg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'There was an issue subscribing. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section id="newsletter">
      <div className="newsletter-left">
        <img src={notification} alt="Notification Icon" className="notification-icon" />
        <p>Subscribe to our newsletter to stay<br />informed about latest updates</p>
      </div>
      <div className="newsletter-right">
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
