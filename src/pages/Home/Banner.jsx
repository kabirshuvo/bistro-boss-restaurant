import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import { default as img3, default as img5, default as img6 } from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img7 from '../../assets/home/banner3.jpg';

const Banner = () => {
    return (
        <Carousel>
        
        <div>
          <img src={img1} />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={img6} />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={img7} />
          <Link className="legend">Legend 1</Link>
        </div>
      </Carousel>
    );
};

export default Banner;
