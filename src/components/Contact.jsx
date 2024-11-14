import React, { useState } from 'react';
import '../styles/_contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Your request has been sent successfully!');
        setErrorMessage('');
        setFormData({ fullName: '', email: '', specialist: '' }); // Rensa formuläret
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      setErrorMessage('There was an error sending your request. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <section className="contact-page">
      <div className="upper-section">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          {/* Kontaktalternativ till vänster */}
          <div className="contact-options">
            <div className="option">
              <i className="fas fa-envelope"></i>
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message</a>
            </div>

            <div className="option">
              <i className="fas fa-briefcase"></i>
              <h3>Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <a href="#">Send an application</a>
            </div>
          </div>

          {/* Kontaktformulär till höger */}
          <div className="contact-form">
            <h2>Get Online Consultation</h2>
            <form onSubmit={handleSubmit}>
              <label>Full name</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Your name" 
                value={formData.fullName} 
                onChange={handleInputChange} 
                required
              />

              <label>Email address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required
              />

              <label>Specialist</label>
              <select 
                name="specialist" 
                value={formData.specialist} 
                onChange={handleInputChange} 
                required
              >
                <option value="">Select specialist</option>
                <option value="Specialist 1">Specialist 1</option>
                <option value="Specialist 2">Specialist 2</option>
              </select>

              <button type="submit">Make an appointment</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>

      {/* Nedre sektionen med karta och centerinformation */}
      <div className="location-section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.215527731813!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb5c819d%3A0x16e6c28f8248d244!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1614646895568!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map showing locations"
          ></iframe>
        </div>

        <div className="center-info">
          <div className="center">
            <h3>Medical Center 1</h3>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="info">
              <i className="fas fa-phone-alt"></i>
              <p>(406) 555-0120</p>
            </div>
            <div className="info">
              <i className="fas fa-clock"></i>
              <p>
                <strong>Mon – Fri:</strong> 9:00 am - 22:00 pm<br />
                <strong>Sat – Sun:</strong> 9:00 am - 20:00 pm
              </p>
            </div>
          </div>

          <div className="center">
            <h3>Medical Center 2</h3>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
            <div className="info">
              <i className="fas fa-phone-alt"></i>
              <p>(406) 544-0123</p>
            </div>
            <div className="info">
              <i className="fas fa-clock"></i>
              <p>
                <strong>Mon – Fri:</strong> 9:00 am - 22:00 pm<br />
                <strong>Sat – Sun:</strong> 9:00 am - 20:00 pm
              </p>
            </div>
          </div>

          {/* Sociala medier */}
          <div className="social-media">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-youtube-square"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
