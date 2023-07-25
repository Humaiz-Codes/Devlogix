import React from 'react'

function Hero() {
  return (
    <div className='hero pt-5' id='heroo'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 ">
                    <img src="Assets/hero1.png" width={'300px'} height={'400px'} alt="img" />
                </div>
                <div className="col-md-8">
                    <h1>We Support</h1>
                    <h2>Growth</h2>
                    <h5>Your Partner in Digital Success</h5>
                    <button className='btn1 btn btn-primary'>Book an Appointment</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn2 btn btn-secodary'>let us talk</button>
                </div>
                <div className="col-md-2">
                    <img src="Assets/hero2.png" alt="img" width={'200px'} height={'380px'}/>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Hero
