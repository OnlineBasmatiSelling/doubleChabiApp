import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return <div><Carousel fade slide activeIndex={index} onSelect={handleSelect} className='carousel container-fluid'>
    <Carousel.Item>
      <img
        src={home1}
        alt="First slide"
      />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={home2}
        alt="Second slide"
      />
  
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src={home2}
        alt="Third slide"
      />
    </Carousel.Item> */}
  </Carousel></div>
  };

export default Home;
