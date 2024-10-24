
import '../styles/_howdoesitwork.scss';
import vänstertel from '../assets/img/vänstertel.svg';
import mitttel from '../assets/img/mitttel.svg';
import högertel from '../assets/img/högertel.svg';

const HowDoesItWork = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How Does It Work?</h2>
        <div className="steps">
          <div className="step-images">
            <picture className="desktop-image">
              <source media="(min-width: 1024px)" srcSet={vänstertel} />
              <img src={vänstertel} alt="Vänster mobilvy på desktop" />
            </picture>
            <picture className="desktop-image">
              <source media="(min-width: 1024px)" srcSet={mitttel} />
              <img src={mitttel} alt="Mitten mobilvy på desktop" />
            </picture>
            <picture className="desktop-image">
              <source media="(min-width: 1024px)" srcSet={högertel} />
              <img src={högertel} alt="Höger mobilvy på desktop" />
            </picture>
          </div>
          <div className="step-description desktop-text">
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.</p>
          </div>
          <div className="step-description tablet-text">
            <h3>Step 3. Transfers to people from your contact list</h3>
            <p>In volutpat mollis egestas. Ut facilisis ultrices. Pellentesque ligula est.</p>
          </div>
          <div className="step-description mobile-text">
            <h3>Transfers to people from your contact list</h3>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
