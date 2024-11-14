import '../styles/_Faq.scss';
import arrows from '../assets/img/arrows.svg';
import smallphone from '../assets/img/smallphone.svg';
import greenchat from '../assets/img/greenchat.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://win24-assignment.azurewebsites.net/api/faq') // Uppdaterad URL
      .then(response => {
        console.log('API response:', response.data); // Kontrollera API-datan
        setFaqData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching FAQ:', error);
        setLoading(false);
      });
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Any questions? <br /> Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
      </div>

      <div className="faq-contact-options">
        <div className="contact-option">
          <img src={smallphone} alt="Phone icon" />
          <p>Still have questions?</p>
          <a href="#">Contact us</a>
        </div>
        <div className="contact-option">
          <img src={greenchat} alt="Chat icon" />
          <p>Don't like phone calls?</p>
          <a href="#">Contact us</a>
        </div>
      </div>

      <div className="faq-body">
        {loading ? (
          <p className="loading">Loading FAQs...</p>
        ) : faqData.length === 0 ? (
          <p>No FAQs available.</p>
        ) : (
          <div className="faq-questions">
            {faqData.map((item, index) => (
              <div key={index}>
                <button
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  {item.title}
                  <img src={arrows} alt="Arrow icon" />
                </button>
                <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <a href="#" className="single-contact-btn">Contact us now</a>
    </section>
  );
};

export default Faq;
