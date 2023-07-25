import React from 'react'

function Appointment() {
  return (
    <div className='appointment pt-5 pb-5 text-white' id='apont'>
        <div className="container-fluid">
            <div className="row p-5">
                <h1 className='text-center'>Book Appointment</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form className='contact-form'>
                         <h1 className='text-center pb-3 '>Contact Us</h1>
                            <div class="mb-3">
                                <input type="text" className="form-control p-3"  placeholder="Enter Name"/>
                            </div>
                            <div class="mb-3">
                                <input type="email" className="form-control p-3"  placeholder="Enter Email"/>
                            </div>
                            <div class="mb-3">
                                <input type="phone" className="form-control p-3"  placeholder="Your Phone"/>
                            </div>
                            <div class="mb-3">
                                <textarea className="form-control p-3"  placeholder='Your Message' rows="4"></textarea>
                            </div>
                            <div class="mb-3">
                                <input type="button" className="btn btn-warning" value={'Send'}  />
                            </div>
                    </form>

                </div>
                <div className="col-md-6 pt-4 mt-4 ">
                {/* <iframe width="100%" height="100%" frameborder="0" title="Calendly Scheduling Page"
                 src="https://calendly.com/qubitars?embed_type=Inline&amp;embed_domain=1">

                 </iframe> */}

                    <div className="card">
                    <div className="card-body text-center px-5">
                        <img className='image-fluid mb-4' width={'80px'} height={'80px'} src="Assets/logo2.png" alt="img" />
                        <h6 className="card-title mb-3">Dot Devlogix Technologies (Pvt) Ltd.</h6>
                        <p className="card-text mb-4">Welcome to our scheduling page. Please follow the
                         instructions to add an event to our calendar.</p>
                         <div className="row mt-5">
                            <h6 className=' mt-3'>Introductory Call - Dot Devlogix Technologies</h6>
                            <p className='text-start mt-4 mb-5'>If you have any Points in your Mind that you need to Discuss before the Meeting. Please Mention this in the Message Below.</p>
                         </div>
                         <a href="#" className="card-link">Cookies Setting</a>
                    </div>
                    </div>

                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Appointment
