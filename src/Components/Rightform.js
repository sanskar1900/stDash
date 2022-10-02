import {React,useState} from 'react'
import Warning from './Warning';

function Rightform(props) {

  const [Plc,setPlc]=useState('Phone number')
  const[Inputtype,setInputtype]=useState('tel')
  const[myStyle1,setmyStyle1]=useState({color:'blue'});
  const[myStyle2,setmyStyle2]=useState({color:'black'});
  const toggleM=()=>{
    setText('');
       if(Plc=='Email')
       {
        setPlc('Phone number')
        setInputtype('tel')
       }
       if(myStyle1.color==='black'){setmyStyle1({color:'blue'});
       setmyStyle2({color:'black'});}
  }
  const toggleE=()=>{
    setText('');
    if(Plc=='Phone number')
       {
        setPlc('Email')
        setInputtype('email')
       }
       if(myStyle2.color==='black'){setmyStyle2({color:'blue'});
       setmyStyle1({color:'black'});}
  }
 const [Text, setText]=useState('');
 const [Danger,setDanger]=useState(0);
 const changeoccur=(e)=>{
    setText(e.target.value);
 }
 const check=()=>{
    if(Text=='')
    {
      setDanger(1);
    }
    else{
      setDanger(0);
    }
 }
 const openbookclass=()=>{
  window.open('https://relaxed-gumdrop-ec725a.netlify.app/','_top');
 }

  return (
    <div  className="rightform d-flex flex-column flex-wrap" style={{backgroundColor:'white', height:'fitContent', width:'100%'}}>
      
      {Danger===1 && Text==''? <Warning message={" Please enter valid Phone/Email."}/>:''}
      
      <div style={{height:'fitContent' , width:'fitContent', marginLeft:''}}>
       <h3 className='text-center'>Sign in to your Account</h3>
      </div>
      <span style={{marginTop:'10px', marginLeft:'10%'}} className="d-flex">
      <button type="button" className="btn " onClick={toggleM} style={myStyle1}>Mobile</button>
        <p  style={{margin:'2px',fontSize:'20px'}}>|</p>
      <button type="button" className="btn " onClick={toggleE} style={myStyle2}>Email</button>
      </span>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <input onChange={changeoccur} value={Text} style={{boxShadow:'0px 0px 2px grey' ,width:'80%',margin:'10px'}} type={Inputtype} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={Plc} required></input>
      <button style={{borderRadius:'25px' ,width:'80%', margin:'10px' ,boxShadow:'0px 0px 2px blue', fontWeight:'600'}}  type="submit" className="btn btn-primary text-center " onClick={check}>Login with OTP</button>
      <p style={{marginTop:'20px',color:'#4E3524'}} className='text-center'>If You Can’t Login With Otp, Try Login With Your <button onClick={()=>{props.clicked()}} style={{border:'none', backgroundColor:'white', color:'blue'}}>Password</button></p>
      <span style={{color:'#4E3524'}}><hr></hr>OR</span> 
       <h6 style={{color:'#4E3524'}}>Are You A New Student?</h6>
      <button onClick={openbookclass} type='submit' style={{ borderRadius:'25px', width:'80%', margin:'10px', backgroundColor:'#F0F8FF', color:'blue' , fontWeight:'600', border:'none', boxShadow:'0px 0px 5px blue',hight:'30px'}} className="btn btn-primary text-center">BOOK FREE TRIAL CLASS NOW</button>
       <div style={{backgroundColor:'#dbd7d2', height:'80%', width:'80%', borderRadius:'10px',marginTop:'20px' ,boxShadow:'0px 0px 5px grey'}} className="d-flex flex-column justify-content-center align-items-center">
        <h3 style={{margin:'10px'}} >Download Our Mobile App</h3>
        <p style={{padding:'10px' }} className='text-center'>Become a tech creator, not consumer. Build apps, games & 
          more</p>
          <div className="d-flex align-items-center justify-content-center">
          <button  style={{marginLeft:'10PX',marginRight:'10px', padding:'20px', border:'none'}} type = "submit" name = "learn" value = "myimage">
      <a href='https://apps.apple.com/in/app/brightchamps-learner/id1590092322'><img  style={{height:'30%', width:'60%', border:'3px solid white'}} src="logo2.png" /></a>
            </button>
            <button style={{marginRight:'10PX',marginLeft:'10px', padding:'20px', border:'none'}} type = "submit" name = "learn" value = "myimage">
      <a href='https://play.google.com/store/apps/details?id=com.brightchamps.learner'><img style={{height:'30%', width:'60%', border:'none'}} src="logo1.png" /></a>
            </button>
            </div>
            <div style={{height:'20px'}}></div>
       </div>
      </div>
      </div>
  )
}

export default Rightform
