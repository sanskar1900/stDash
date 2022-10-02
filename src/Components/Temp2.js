import {React,useState} from 'react'
import Warning from './Warning';

function Temp2() {
  const [text,settext]=useState('');
  const [Danger,setDanger]=useState(0);
 const change = (e)=>{
  settext(e.target.value);

 }
 const call=()=>{
  if(text=='')setDanger(1);
  else setDanger(0);
 }
  return (
    <div style={{width:'100%', marginTop:'200px' }} className="d-flex flex-column align-items-center ">
      {(Danger==1&&text=='')?<Warning message={"Enter Email"}/>:''}
      <div> <h3 className='text-center'>Forgot Password?</h3></div>
      <input onChange={change} value={text} style={{marginBottom:'15px',width:'250px', boxShadow:'0px 0px 2px grey', marginTop:'20px'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
      <button onClick={call} type='submit'  className="btn btn-primary text-center" style={{fontWeight:'600', borderRadius:'20px' ,width:'250px', marginTop:'20px'}}>Reset Password</button>
    </div>
  )
}

export default Temp2
