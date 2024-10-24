import React from 'react';
import '../styles/_Appfeatures.scss';
import telefonmedvisa from '../assets/img/telefonmedvisa.svg';
import icon1 from '../assets/img/icon-1.svg';
import icon2 from '../assets/img/icon-2.svg';
import icon3 from '../assets/img/icon-3.svg';
import icon4 from '../assets/img/icon-4.svg';
import icon5 from '../assets/img/icon-5.svg';
import icon from '../assets/img/icon.svg';

const AppFeatures = () => {
  return (
    <section className="app-features">
      <div className="container">
        <div id="features" className="app-features-content">
          <img src={telefonmedvisa} className="app-image" alt="Telefonbild" />
          <div className="features-section">
            <div className="app-features-header">
              <h1>App Features</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="features-list">
              <div className="feature-item">
                <img src={icon5} className="feature-icon" alt="Enkla betalningar ikon" />
                <div className="feature-text">
                  <h5>Enkla betalningar</h5>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src={icon4} className="feature-icon" alt="Datasäkerhet ikon" />
                <div className="feature-text">
                  <h5>Datasäkerhet</h5>
                  <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src={icon3} className="feature-icon" alt="Kostnadsstatistik ikon" />
                <div className="feature-text">
                  <h5>Kostnadsstatistik</h5>
                  <p>Mattis urna ultricies non amet, purus in auctor non.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src={icon2} className="feature-icon" alt="Support 24/7 ikon" />
                <div className="feature-text">
                  <h5>Support 24/7</h5>
                  <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src={icon1} className="feature-icon" alt="Regelbunden cashback ikon" />
                <div className="feature-text">
                  <h5>Regelbunden cashback</h5>
                  <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
              </div>
              <div className="feature-item">
                <img src={icon} className="feature-icon" alt="Högsta standarder ikon" />
                <div className="feature-text">
                  <h5>Högsta standarder</h5>
                  <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
