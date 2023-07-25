import React from 'react'
import{GrMail} from 'react-icons/gr'
import{BiSolidPhoneCall} from 'react-icons/bi'
import{FaLinkedinIn} from 'react-icons/fa'
import{FaFacebookF} from 'react-icons/fa'
import{BsInstagram} from 'react-icons/bs'
import{AiFillSkype} from  'react-icons/ai'
function Header() {
  return (
    <div className="header">
        <div className="social py-3 px-3">
            <div className="contact">
                <span><GrMail/>hello@devlogix.com.pk</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span> <BiSolidPhoneCall/> +92 332 0005121</span>
            </div>
            <div className="social-icon">
                <div className='icon'><FaLinkedinIn/></div>
                <div className='icon'><FaFacebookF/></div>
                <div className='icon'><BsInstagram/></div>
                <div className='icon'><AiFillSkype/></div>
            </div>
        </div>



        {/* ...........NavBar...............*/}

        
        <div className="main-header">
        <nav className="navbar stiky-top navbar-expand-lg ">
            <div className="container-fluid">
      <a className="navbar-brand" href="heroo"><img src="Assets/logo.png" alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="heroo">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="ser">Service</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Web 3.0
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active">Blogs</a>
          </li>
        </ul>
        <div className="btn btn-secondary">
            <span className='contact'>Contact</span>&nbsp;
            <span className='us'>Us</span>
        </div>
      </div>
            </div>
  </nav>
        </div>
        </div>
  )
}

export default Header
