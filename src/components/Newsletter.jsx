import React from 'react';
import '../styles/_newsletter.scss';
import notification from '../assets/img/notification.svg';

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="newsletter-left">
        <img src={notification} alt="Notification Icon" className="notification-icon" />
        <p>Subscribe to our newsletter to stay<br />informed about latest updates</p>
      </div>
      <div className="newsletter-right">
        <form action="#" method="post" className="newsletter-form">
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
