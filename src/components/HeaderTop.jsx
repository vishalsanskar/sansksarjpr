import React from 'react'
import { Link } from 'react-router-dom'
import '../css/headertop.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PhoneIcon from '@material-ui/icons/Phone';
import { Facebook } from '@material-ui/icons';
// import EmailIcon from '@material-ui/icons/Email';

// import FacebookIcon from '@material-ui/icons/Facebook';


function HeaderTop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    <Container maxWidth={false}>
    <div className='header-top-row'>
    <Grid container spacing={2}>
    <Grid item xs={12} md={5}>
      <ul className='header-contact'>
      <li> <PhoneIcon className='header-icons'/> <Link to="">0140-2246189 </Link> </li>
      <li> <Link to="">0140-2357844</Link></li>
      <li> <Link to="">0140-2245602</Link></li>
      <li> <EmailIcon className='header-icons'/>  <Link to="">info@sanskarjaipur.com</Link></li>
      </ul> 
    
    </Grid>
    <Grid item xs={12} md={4}>
      <div to="" className='admission-now'><h3><Link to=""> Admission Open 2024-25 </Link></h3></div>
    </Grid>
    <Grid item xs={12} md={3}>
      <ul className='header-socila-icons'>
      <li>Connect with us</li>
     <li><Link to=""><FacebookIcon className='header-icons' /></Link> </li>
     <li><Link to=""><InstagramIcon className='header-icons' /></Link></li>
     <li><Link to=""><YouTubeIcon className='header-icons' /></Link></li>
     <li><Link to=""><TwitterIcon className='header-icons' /></Link></li>
     <li><Link to=""><LinkedInIcon className='header-icons' /></Link></li>
      </ul>
    </Grid>
  </Grid>
  </div>
  </Container>

    </div>
  )
}

export default HeaderTop
