import React from 'react'
import '../css/footerBottom.css'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function FooterBottom() {
  return (
    <div>
    <Container maxWidth={false}>
    <div className='footerBottom'>
    <Grid container spacing={2}>
    <Grid item xs={12} md={2}>
      <div className='footer-info'>
      <Link to="" className='footer-logo' ><img src="../img/sanskar-logo-white.webp"/></Link>

      <ul>
      <li><Link to=""><FacebookIcon className='footer-social-icon'/></Link></li>
      <li><Link to=""><InstagramIcon className='footer-social-icon'/></Link></li>
      <li><Link to=""><YouTubeIcon className='footer-social-icon'/></Link></li>
      <li><Link to=""><TwitterIcon className='footer-social-icon'/></Link></li>
      <li><Link to=""><LinkedInIcon className='footer-social-icon'/></Link></li>
      </ul>
      </div>

   


    </Grid>
    <Grid item xs={12} md={7}>
    <ul className='footer-quick-links'>
    <li><Link to="">Home</Link></li>
    <li><Link to="">Know us</Link></li>
    <li><Link to="">Admission</Link></li>
    <li><Link to="">Academic Program</Link></li>
    <li><Link to="">Newsletter</Link></li>
    <li><Link to="">Photo Gallery</Link></li>
    <li><Link to="">IBDP Update</Link></li>
    <li><Link to="">Achievement</Link></li>
    <li><Link to="">Placement</Link></li>
    <li><Link to="">Career-Counselling</Link></li>
    <li><Link to="">Pay Fess</Link></li>
    <li><Link to="">Contact Us</Link></li>
    </ul>
  

    </Grid>
      { /* <Grid item xs={12} md={3}>
        <h1>col3</h1>
  </Grid>*/}    
   <Grid item xs={12} md={3}>
    <ul className='footer-contact'>
    <li><span><PhoneIcon className='footer-icons'/></span> 0141-2246189 </li>
    <li><span></span> 0141-2357844 </li>
    <li><span></span> 0141-2246189 </li>
    <li><span><EmailIcon className='footer-icons'/></span> info@sanskarjaipur.com </li>
    <li><span><LocationOnIcon className='footer-icons'/></span> 117-121, Vishwamitra Marg, Hanuman Nagar Ext., Sirsi Road, Jaipur - 302012</li>
    </ul>
    </Grid>
    </Grid>
    
    </div>

    </Container>
      
    </div>
  )
}

export default FooterBottom
