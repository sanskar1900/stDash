import React from 'react'
import Logo from './Logo'

function Topdiv() {
  return (
    <div className='topdiv align-items-center'>
    <div style={{height:'400px',backgroundSize:'cover',backgroundRepeat:'no-repeat' ,backgroundImage:'url(https://d31685n562suw1.cloudfront.net/web-assets/login.png)'}} className='d-flex flex-column align-items-center justify content center'>
      <Logo></Logo>
     
    </div>
    </div>
  )
}

export default Topdiv
