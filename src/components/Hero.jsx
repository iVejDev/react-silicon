
import '../styles/_Hero.scss';
import heroImageBack from '../assets/img/iphone-mybudget_desktop.svg';
import heroImageFront from '../assets/img/iphone-yourcards_desktop.svg';
import appStoreImage from '../assets/img/appstore.svg';
import googlePlayImage from '../assets/img/googleplay.svg';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend &amp; manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-download-app" href="#">
              <img src={appStoreImage} alt="appstore" />
            </a>
            <a className="btn-download-app" href="#">
              <img src={googlePlayImage} alt="googleplay" />
            </a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>

        <div className="images">
          <img className="img-back" src={heroImageBack} alt="iphone my budget" />
          <img className="img-front" src={heroImageFront} alt="iphone your cards" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
