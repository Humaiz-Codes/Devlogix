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

function HeroCarousel() {
  return (
    <div className='herocarousel mt-5'>
        <div className="container-fluid">
            <div className="row">
                <Carousel  responsive={responsive} infinite={true}
                autoPlay={true} autoPlaySpeed={1000}>
                    <div className='carousel d-flex justify-content-center pt-5 pb-3'>
                        <img src="Assets/mobile.png" alt="img" />
                        <p >Mobile Development</p>
                    </div>
                    <div className='carousel d-flex justify-content-center pt-5 pb-3'>
                        <img src="Assets/nft.png" alt="img" />
                        <p >NFT Development</p>
                    </div>
                    <div className='carousel d-flex justify-content-center pt-5 pb-3'>
                        <img src="Assets/UI.png" alt="img" />
                        <p >UI/UX Design</p>
                    </div>
                    <div className='carousel d-flex justify-content-center pt-5 pb-3'>
                        <img src="Assets/web.png" alt="img" />
                        <p >Web Development</p>
                    </div>
                    <div className='carousel d-flex justify-content-center pt-5 pb-3'>
                        <img src="Assets/digital.png" alt="img" />
                        <p >Digital Marketing</p>
                    </div>

  
                </Carousel>;
            </div>
        </div> 
      
    </div>
  )
}

export default HeroCarousel
