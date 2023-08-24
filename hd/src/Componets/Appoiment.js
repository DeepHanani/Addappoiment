import React, { useState } from 'react'
import DisplayData from './DisplayData';
import AppoimentForm from './AppoimentForm';
import  './Appoiment.css'
import { Button } from '@mui/material';

export default function Appoiment(){

const[open ,setOpen] = useState(false);

const[id , setId] = useState(-1);

const handalClickopen = ()=>{
      setOpen(true);
}

const handalClickclose = ()=>{
   setOpen(false)
   setId(-1);
}

const myId = (id)=>{
       setId(id);
       handalClickopen();
}


  return (
    <div className='mainContainer'>

    <Button variant="contained" onClick={handalClickopen} className='AddBtn'>Add Appoiment</Button>

    <DisplayData setId = {myId}/>

    <AppoimentForm
    handalClickopen = {handalClickopen}
    handalClickclose = {handalClickclose}
    id = {id}
    setId = {setId}
    open = {open}
    />
      
    </div>
  )
}
