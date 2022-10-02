import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Temp1 from './Temp1';
import Temp2 from './Temp2';
import {useState} from 'react';
export default function Temp() {
  const [Onl,setOnl]=useState(1);
  function toggle(){
    setOnl(0);
    console.log("yup")
  }
  return (
   <>

   {(Onl===1)?< Temp1 togglef={toggle}/>:<Temp2/>}
   
   </>
  );
}