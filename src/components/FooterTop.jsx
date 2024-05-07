import React from 'react'
import Container from '@material-ui/core/Container';

import '../css/footerTop.css'

function FooterTop() {
  return (
    <div>
    <Container maxWidth={false}>
    <div className='Footer-top'>
    <div className='footop-img'>
    <div className='footer-img-box'>
      <img src='../img/british-council.webp'/>
    </div>
    <div className='footer-img-box'>
      <img src='../img/ib-logo-new.webp'/>
      </div>
    <div className='footer-img-box'>
    <img src='../img/pyp-programme-logo.webp'/>
      </div>
    <div className='footer-img-box'>
    <img src='../img/cambridge-2.webp'/>
      </div>
    
    </div>
    
    </div>
    </Container> 

    </div>
  )
}

export default FooterTop
