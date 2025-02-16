import React from 'react'
import './Footer.css'
import { FaStumbleupon } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div>
        <footer>
        <div className="brand">
        <FaStumbleupon/> STUMBLE
        </div>

        <div className="support">
            <p className="p1">Support</p>
            <Link to={'/Contactus'}> <p className='sup'>contact us </p></Link>
            <p className='sup'>FAQ</p>
            <p className='sup'>Downloads</p>
            <p className='sup'>product registration</p>
            <p className='sup'>locate shipment</p>
        </div>
        <div className="stumble">
            <p className="p2">Stumble</p>
            <Link to={'/Aboutus'}> <p className='stumb'>about stumble</p></Link>
            <p className='stumb' >newsroom</p>
            <p className='stumb'>careers at stumble</p>
    
        </div>


        <div className="signup2">
            <p className="imp">Sign up to stay up to date from stumble</p>
            <input type="email" placeholder="enter your email address" className='input'/>
            <Link to={'/Signup'}><button className="signbut">
                Sign Up 
            </button>
            </Link> 
        </div>
    </footer>
    </div>
  )
}

export default Footer