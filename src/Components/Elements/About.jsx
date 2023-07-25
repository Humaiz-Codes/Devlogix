import React from 'react'

function About() {
  return (
    <div className='about mt-5'>
        <h1>About Us</h1>
        <p>Empowering businesses through innovative software solutions that drive growth and efficiency.</p>
        <div className="container-fluid text-center">
  <div className="row">
    
    <div className="col-md-6 mission">
    <h1>Mission Statement</h1>
                <p>
                At Qubitars, our mission is to deliver innovative and high-quality software 
                 solutions that solve our client's business challenges and drive their success.
                 We strive to stay ahead of the curve by embracing emerging technologies and 
                 industry best practices while maintaining a focus on user-centric design and usability.
                 Our team of skilled and passionate developers works collaboratively with our clients
                 to understand their needs and goals, and to deliver customized solutions that 
                 exceed their expectations. We are committed to building long-term partnerships
                 with our clients based on transparency, integrity, and mutual respect. Our ultimate
                 goal is to empower our clients to thrive in a digital world through reliable, scalable,
                 and secure software solutions.
                </p>
                <br />
                <br />
    </div>
    <div className="col-md-6">
        <img src="Assets/about.png" alt="not found" />
    </div>
    
  </div>
</div>

         {/*       ......Vision Statement .........*/}


         <div className="container text-center">
  <div className="row">
    <div className="col-md-6 p-4 ">
        <img src="Assets/vision.gif" className='image-fluid growthe' width={'500px'}  alt="switch" loading='lazy' />
    </div>
    <div className="col-md-6 vision">
    <h1>Vision Statement</h1>
                <p>
                     Our vision is to be a leading provider of transformative software solutions
                     that enable our clients to achieve their full potential. We aim to push 
                     the boundaries of what's possible with technology, and to become a driving
                     force behind the digital transformation of businesses across industries. 
                     We aspire to be recognized for our ability to deliver game-changing 
                     solutions that are user-friendly, scalable, and secure, and that leverage
                     cutting-edge technologies such as artificial intelligence, machine learning,
                     blockchain, and the internet of things. We strive to foster a culture of 
                     innovation, creativity, and continuous improvement, and to attract and 
                     retain the best talent in the industry. We are committed to making a positive 
                     impact on the world by using technology to solve complex problems and to create 
                     a more sustainable, equitable, and prosperous future for all.
                </p>
    </div>
    
  </div>
</div>

         
    </div>

  )
}

export default About
