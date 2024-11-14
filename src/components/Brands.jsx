
import '../styles/_brands.scss';
import brand1 from '../assets/img/brand-1.svg';
import brand2 from '../assets/img/brand-2.svg';
import brand3 from '../assets/img/brand-3.svg';
import brand4 from '../assets/img/brand-4.svg';
import brand5 from '../assets/img/brand-5.svg';
import brand6 from '../assets/img/brand-6.svg';

const Brands = () => {
  return (
    <section id="brands">
      <div className="container">
        <div id="brand-1" className="brand-box">
          <img src={brand1} alt="Brand 1" />
        </div>
        <div id="brand-2" className="brand-box">
          <img src={brand2} alt="Brand 2" />
        </div>
        <div id="brand-3" className="brand-box">
          <img src={brand3} alt="Brand 3" />
        </div>
        <div id="brand-4" className="brand-box">
          <img src={brand4} alt="Brand 4" />
        </div>
        <div id="brand-5" className="brand-box">
          <img src={brand5} alt="Brand 5" />
        </div>
        <div id="brand-6" className="brand-box">
          <img src={brand6} alt="Brand 6" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
