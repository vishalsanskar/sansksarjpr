import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

import '../css/footermain.css'

function Footer() {
  return (
    <div>
    <FooterTop/>
    <div className='footer-bottom-main'>
    <FooterBottom/>
    </div>
    </div>
  )
}

export default Footer
