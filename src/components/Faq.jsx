import React, { useState } from 'react';
import '../styles/_Faq.scss'; // Kontrollera att sökvägen är korrekt
import arrows from '../assets/img/arrows.svg';
import smallphone from '../assets/img/smallphone.svg';
import greenchat from '../assets/img/greenchat.svg';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        <div className="faq-questions">
          {[
            'Is any of my personal information stored in the App?',
            'What formats can I download my transaction history in?',
            'Can I schedule future transfers?',
            'When can I use Banking App services?',
            'Can I create my own password that is easy for me to remember?',
            'What happens if I forget or lose my password?',
          ].map((question, index) => (
            <div key={index}>
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                {question}
                <img src={arrows} alt="Arrow icon" />
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc duis id aenean gravida tincidunt.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#" className="single-contact-btn">Contact us now</a>
    </section>
  );
};

console.log('FAQ component is rendering');


export default Faq;
