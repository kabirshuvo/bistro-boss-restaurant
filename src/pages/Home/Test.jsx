
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';
const Test = () => {
    return (
        <AwesomeSlider animation="cubeAnimation">
        <div data-src={img1}></div>
        <div data-src={img2}></div>
        <div data-src={img3}></div>
        <div data-src={img4}></div>
        <div data-src={img5}></div>
        <div data-src={img6}></div>
        
      </AwesomeSlider>
    );
};

export default Test;
