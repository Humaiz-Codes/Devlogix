import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Team() {
  return (
    <div className='team'>
        <h1 className='text-center'>Meet Our Team</h1>
        <p className='text-center font-size={30px}'>Get to know our talented team of software developers, designers, and quality assurance engineers who are dedicated to delivering exceptional software solutions for our clients.</p>
        <Carousel className='py-5 crsl' responsive={responsive}>
  <div><img src="Assets/pic1.jpg" alt="img" /></div>
  <div><img src="Assets/pic2.jpg" alt="img" /></div>
  <div><img src="Assets/pic3.jpg" alt="img" /></div>
  <div><img src="Assets/pic4.jpg" alt="img" /></div>
  <div><img src="Assets/pic5.jpg" alt="img" /></div>
  <div><img src="Assets/pic6.jpg" alt="img" /></div>
  <div><img src="Assets/pic7.jpg" alt="img" /></div>
  <div><img src="Assets/pic.jpg" alt="img" /></div>
  
</Carousel>;
    </div>
  )
}

export default Team
