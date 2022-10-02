import {React,useState} from 'react'
import Warning from './Warning';

function Temp1(props) {
  const [text1,settext1]=useState('');
  const [text2,settext2]=useState('');
  const change1=(e)=>{
   settext1(e.target.value);
  }
  const change2=(e)=>{
   settext2(e.target.value);
  }
  const [danger,setdanger]=useState(0);
  const danger1=()=>{
    if(text1==''||text2=='')setdanger(1);
    else setdanger(0);
  }
  return (
    
       <div style={{width:'100%', marginTop:'150px' }} className=''>
     
     {/* <form> */}
       <div className='d-flex flex-column justify-content-center align-items-center '>
        {(danger==1 && (text1==''||text2==''))?<Warning message={"Invalid Credentials"}/>:''}
       <div> <h3 className='text-center'>Sign in to your Account</h3></div>
   <div className="form-group">
     
    <input onChange={change1} value={text1} style={{marginBottom:'15px',width:'250px', boxShadow:'0px 0px 2px grey', marginTop:'20px'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
   </div>
   <div className="form-group">
    
     <input onChange={change2} value={text2} style={{marginTop:'15px', width:'250px',boxShadow:'0px 0px 2px grey'}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
   </div>
   <div className="form-check">
   </div>
   <button onClick={()=>{props.togglef()}} style={{border:'none',   backgroundColor: '#f9f9f9', color:'blue'}} >Forgot Password?</button>
   <button type='submit' onClick={danger1} className="btn btn-primary text-center" style={{fontWeight:'600', borderRadius:'20px' ,width:'250px', marginTop:'20px'}}>Submit</button>
   </div>
 {/* </form> */}
 </div>
   
  )
}

export default Temp1
