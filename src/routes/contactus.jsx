import React from 'react'
import '../App.css';
import '../css/contactus.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline'; 
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';



function contactus() {
  return (
    <div className='contact-main-sec'>
      <div className='tielt-head'>
        <h1>contact us</h1>
      </div>
      <div className='contact-box'>
        <div className='contact-details'>
          <div className='text-box'>
            <div className='contact-from-box'>
              <ul>
                <li><MailOutlineIcon className='icon'/> <span>info@sanskarjaipur.com</span> </li>
                </ul>
            </div>
            <div className='contact-from-box'>
            <ul>
            <li><CallIcon className='icon'/> <span> 91-0141-2246189 / 91-0141-2357844 
           </span> </li>
            </ul>
            </div>
            <div className='contact-from-box'>
            <ul>
            <li> <LocationOnIcon className='icon'/>   <span> <b>Sanskar School - IBDP School</b>
            117-121, Vishwamitra Marg, Hanuman Nagar Ext.,
            Sirsi Road, Jaipur - 302012</span> </li>
            </ul>
            </div>
          </div>



        </div>
        <div className='contact-map'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3992974080347!2d75.73330047600155!3d26.922553159666617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35d15187661%3A0x62b29d09fa72ed4!2sSanskar%20School!5e0!3m2!1sen!2sin!4v1703214141055!5m2!1sen!2sin" style={{ width: "100%", height: "100%", allowFullScreen: "true", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", border: '0' }}></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}

export default contactus
