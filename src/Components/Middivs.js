import {React,useState,useEffect} from 'react'
import Leftimg from './Leftimg'
import Rightform from './Rightform'
import Temp from './Temp'

function Middivs() {
  const [Clicked,setClicked]=useState(0);

  function RouteChange(){
    setClicked(1);
  } 
  return (
    <>
    <div  className='d-flex justify-content-center  '>
        {/* Left Image */}
         <Leftimg></Leftimg>
        {/* Right form */}
        { (Clicked===0)?<Rightform clicked={RouteChange} />:<Temp/> }
    </div>
    </>
  )
}

export default Middivs
