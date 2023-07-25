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
    items: 4
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

function Services() {
  return (
    <div className='services mt-5 pb-5 pt-5 ' id='ser'>
      <div>
      <h1 className='text-center text-white'>Our Services</h1>
      <p className='text-center text-white'>We offer innovative and customized software solutions tailored to meet your business needs and drive growth.</p>
      </div>
      <Carousel className='' responsive={responsive}
      infinite={true}
      autoPlay={true}>
        <div className="card ">
        <div class="card-body">
            <img src="Assets/nft.png" alt="img" />
        <h4 className="card-title text-start mt-2">NFT Development</h4>
        <p className="card-text text-start">NFT development is the process of creating unique, non-fungible digital assets using blockchain technology. Our service provides expertise in creating and deploying NFTs for various industries and applications.</p>  
        <a href="#" class="card-link">more details</a><br />
        <img src="Assets/arrow.png" alt="img" />
  </div>
        </div>
        <div className="card">
        <div class="card-body">
            <img src="Assets/web.png" alt="img" />
        <h4 className="card-title text-start mt-2">Web Development</h4>
        <p className="card-text text-start">We design, develop, and maintain websites, providing customized solutions to meet your specific needs. From coding and programming to web server configuration, we handle it all.
        </p>  
        <a href="#" class="card-link">more details</a><br />
        <img src="Assets/arrow.png" alt="img" />
  </div>
        </div>
        <div className="card">
        <div class="card-body">
            <img src="Assets/UI.png" alt="img" />
        <h4 className="card-title text-start mt-2">UI/UX Design</h4>
        <p className="card-text text-start">UI/UX design is the process of creating visually appealing and intuitive interfaces for websites and apps. It involves research, prototyping, and testing to ensure a seamless user experience.</p>  
        <a href="#" class="card-link">more details</a><br />
        <img src="Assets/arrow.png" alt="img" />
  </div>
        </div>
        <div className="card">
        <div class="card-body">
            <img src="Assets/digital.png" alt="img" />
        <h4 className="card-title text-start mt-2">Digital Marketing</h4>
        <p className="card-text text-start">Our digital marketing service utilizes online channels to promote brands, products or services, including SEO, social media, and other advertising strategies to help businesses achieve their marketing goals.</p>  
        <a href="#" class="card-link">more details</a><br />
        <img src="Assets/arrow.png" alt="img" />
  </div>
        </div>
        <div className="card">
        <div class="card-body">
            <img src="Assets/mobile.png" alt="img" />
        <h4 className="card-title text-start mt-2">Mobile Development</h4>
        <p className="card-text text-start">Our mobile development service creates and 
        maintains applications for iOS and Android devices, with expertise in design, 
        coding, and testing.
        </p>  <br />
        <a href="#" class="card-link">more details</a><br />
        <img src="Assets/arrow.png" alt="img" />
  </div>
        </div>
        
</Carousel>
    </div>
  )
}

export default Services
