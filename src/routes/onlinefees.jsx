import React from 'react'
import { Link } from 'react-browser-router'
import '../css/onlinefees.css';



function onlinefees() {
  return (
    <div className='section-spacing'>
    <div className='tielt-head'>
        <h1>Online Fees Payment</h1>
      </div>
      <div className='payonline-box'>
        <div className='left-side-box'>
         <div className='inner-box'>
         <h3>Payment online with Login Credentials</h3>
         <Link to=""> Pay Now</Link>
         </div> 
         <div className='inner-box'>
         <h3>Payment online with Admission Number
         </h3>
         <Link to=""> Pay Now</Link>

         <div className='download-app'>
         <h5>Download app from</h5>
         <div className='download-link'>
         <span><Link to="">Google Play</Link></span>
         <span><Link to="">App Store</Link></span>
         <span></span> 
         </div> 

         </div>
         </div> 
        </div>
        <div className='right-side-box'>
        <dotlottie-player src="https://lottie.host/eb292a03-5da1-43f0-a927-1d17dc30fe86/h7EZjMeBS8.lottie" style = {{ background:"transparent", speed:"1", width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
        </div>

      
      
      
     
      </div>
     


    </div>
  )
}

export default onlinefees
