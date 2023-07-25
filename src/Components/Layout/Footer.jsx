import React from 'react'
import{GrMail} from 'react-icons/gr'
import{BiSolidPhoneCall} from 'react-icons/bi'
import { MdLocationOn } from "react-icons/md"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"



function Footer() {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="container text-center">
            <div className="row ">
                <div className="col-md-3 col-6">
                 <div className="">
                    <img src="Assets/logo.png" alt="logo" />
                 </div>
                 
                 <p className='p1'>“Dot Devlogix delivers innovative and high-quality software solutions that solve your \
                    business challenges and drive your success. We strive to stay ahead of the curve by
                     embracing emerging technologies and industry best practices while maintaining 
                     a focus on user-centric design and usability. ”</p>
                </div>
                <div className="col-md-3 col-6">
                <div>
                    <h4>Services</h4>
                </div>
                
                <ul className='list-unstyled'>
                    <li>UI/UX Design</li>
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>NFT Development</li>
                    <li>Software Quality </li>
                </ul>
                </div>
                <div className="col-md-3 col-6">
                <div>
                    <h4>Quick Links</h4>
                </div>
                
                <ul className='list-unstyled'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Blogs</li>
                </ul>
                </div>
                <div className="col-md-3 col-6">
                <div>
                <h4>Contact Info</h4>
                </div>
                <br />
                <ul className='list-unstyled  '>
                    <li><BiSolidPhoneCall size={"30px"}/> &nbsp;<span>+92 332 0005121</span></li>
                    <li><GrMail size={"30px"} />&nbsp; &nbsp;<span>hello@devlogix.com.pk</span></li>
                    <li><MdLocationOn size={"30px"}/>&nbsp; &nbsp;43 Fatima Jinnah Chambers Sessions Court Gujranwala,PK</li>
                    
                </ul>
                </div>
               
            </div> &nbsp;&nbsp;
            <hr className='hr2' />
            <div class="row">
    <div class="col-md-3">
      <p>© CREATED BY HUMAIZ UR REHMAN for DOT DEVLOGIX.</p>
    </div>
    <div className="col-md-6">
      <div className='footer-icons d-flex justify-content-center'>
      <div><BsFacebook size={"35px"}/></div>&nbsp;&nbsp;&nbsp;
      <div><BsInstagram size={"35px"}/></div>&nbsp;&nbsp;&nbsp;
      <div><BsTwitter size={"35px"}/></div>&nbsp;&nbsp;&nbsp;
      <div><BsGithub size={"35px"}/></div>&nbsp;&nbsp;&nbsp;
      <div><BsLinkedin size={"35px"}/></div> 
      </div>
        
    </div>
    <div className="col-md-3">
    <p>Privacy Policy | Terms & Conditions
Quality Management Policy | ISMS</p>
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
