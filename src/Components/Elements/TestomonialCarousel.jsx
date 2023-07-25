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
    items: 2
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

function TestomonialCrousal() {
  return (
    <div className="testomonial">
        <div className="container-fluid py-5">
        <div className="row">
            <div className="col-md-5">
            <h1 className='text-start pb-2 pt-1'>Testomonials</h1>
      <p className='text-start text'>At Dot Devlogix we take pride in providing high-quality solutions 
         that meet the unique needs of our clients. But don't just take our word for it –
         here's what some of our satisfied clients have to say:</p>
            </div>
            <div className="col-md-7">
            <div>
      <Carousel className='px-4' responsive={responsive}
      infinite={true}
      autoPlay={true}>
      <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;4.9 Rating</h4>
        <p className="card-text text-start">"We knew that NFTs were the future, but we weren't sure how to get started. Thankfully, Dot Devlogix was there to guide us through the process. They helped us develop a unique NFT collection that has been a huge hit with our customers."


            <br /><br /><br />- Andrew Flaw</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;5 Rating</h4>
        <p className="card-text text-start">"The team at Dot Devlogix was instrumental in helping us create our first NFT collection. Their expertise and guidance were invaluable, and they made the entire process seamless. We're thrilled with the end result and have received great feedback from our collectors."

Emily Bult
            <br /><br />- Emily Bult</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;4.7 Rating</h4>
        <p className="card-text text-start">"Our mobile app development project with Dot Devlogix was a huge success. They delivered the app on time and within our budget, and it has since become an important tool for our customers. We would highly recommend their services to anyone looking to develop a mobile app."
            <br /><br />- John Komb</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;4.8 Rating</h4>
        <p className="card-text text-start">"We couldn't be happier with the mobile app Dot Devlogix developed for our business. It has improved our workflow and efficiency tremendously. The team was great to work with and was always available to answer our questions and address any issues."


           <br /> <br /><br />- Alex Gold</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;5 Rating</h4>
        <p className="card-text text-start">"The team at Dot Devlogix did an amazing job on our website redesign. They took the time to understand our goals and vision, and brought it to life in a beautiful, user-friendly website. We've received nothing but positive feedback from our customers since launching the new site."

            <br /><br />- Mark Robert</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;4.9 Rating</h4>
        <p className="card-text text-start">"We were impressed with Dot Devlogix NFT development 
        expertise from the start. They helped us navigate the complex world of NFTs
         and created a collection that exceeded our expectations. We look forward to
          working with them again on future projects."
            <br /><br />- Michael G., CEO</p>  
  </div>
        </div>
        <div className="card">
        <div class="card-body">
        <h4 className="card-title text-start"><img className='mb-2' src="Assets/star.png" alt="icon" />&nbsp;5 Rating</h4>
        <p className="card-text text-start">Working with Dot Devlogix on our website development was a fantastic experience. Their team was professional, responsive, and delivered a final product that exceeded our expectations. We're thrilled with our new website and the increased traffic it has brought to our business!"


            <br /><br />-Sarah Emmet</p>  
  </div>
        </div>
</Carousel>
    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TestomonialCrousal
