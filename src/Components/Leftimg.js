import React from 'react'
import Logo from './Logo'

function Leftimg() {
  return (
    <div  className='leftimg d-flex flex-column align-items-center justify-content-center'>
     <div className='mainimg'> <Logo></Logo></div>
      <img className="mainimg"  src="https://d31685n562suw1.cloudfront.net/web-assets/login.png" alt="" />
    </div>
  )
}

export default Leftimg
