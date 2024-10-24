import React from 'react';
import '../styles/_transaction.scss';
import inner from '../assets/img/inner.svg';
import contactsvisa from '../assets/img/contactsvisa.svg';
import icon1 from '../assets/img/icon-1.svg';
import icon5 from '../assets/img/icon-5.svg';

const Transaction = () => {
  return (
    <section className="transaction-section">
      <div className="transaction-item transaction-left">
        <h2>Make your money transfer simple and clear</h2>
        <ul>
          <li>Banking transactions are free for you</li>
          <li>No monthly cash commission</li>
          <li>Manage payments and transactions online</li>
        </ul>
        <a href="#" className="btn">Learn more</a>
      </div>
      <div className="transaction-item transaction-right">
        <img src={inner} alt="Transaction graph" />
      </div>

      <div className="transaction-item transaction-left">
        <img src={contactsvisa} alt="Contact list with card" />
      </div>
      <div className="transaction-item transaction-right">
        <h2>Receive payment from international bank details</h2>
        <div className="payment-details">
          <div className="payment-feature">
            <img src={icon5} alt="Icon 1" />
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>
          <div className="payment-feature">
            <img src={icon1} alt="Icon 2" />
            <p>A elementum et imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>
        </div>
        <a href="#" className="btn">Learn more</a>
      </div>
    </section>
  );
};

export default Transaction;
