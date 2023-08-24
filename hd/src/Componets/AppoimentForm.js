import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function AppoimentForm(props){

console.log(props ,"kkkkk")
    
     const[hold , setHold] = useState({
     title : "",
     description : "",
     id : ""
     });

     const formHandler = (e)=>{
         setHold({...hold , [e.target.name] : e.target.value})
     };

     useEffect(()=>{
            
            if(props.id !== -1){
              fetch(`https://itchy-plum-caridea.cyclic.app/api/tutorials/${props.id}`)
              .then(y=>y.json())
              .then(y=>{
                setHold(y);
              })
            }
         
     },[props.id])

     const saveData = ()=>{

        let url = "https://itchy-plum-caridea.cyclic.app/api/tutorials";
        let method = "post";

        if (props.id != -1) {
      url = `https://itchy-plum-caridea.cyclic.app/api/tutorials/${props.id}`;
      method = "PUT"

    }

   

    fetch(url,{
        method: method,
      body: JSON.stringify(hold),
      headers: {
        'Content-Type': "application/json"
      }
    }).then(y=>y.json())
    .then(y=>{
      props.setId(-1);
      props.handalClickclose()
      setHold("")
    })
        
     }

 
  return (
    
    <Dialog open = {props.open} onClose = {props.handalClickclose}>
    <DialogTitle>Subscribe</DialogTitle>

    <DialogContent>

    <TextField
          autoFocus
          margin="dense"
          id="title"
          name='title'
          label="title"
          type="text"
          fullWidth
          variant="standard"
          onChange={formHandler}
          value={hold.title}

    />

    <TextField
          autoFocus
          margin="dense"
          id="description"
          name='description'
          label="description"
          type="text"
          fullWidth
          variant="standard"
          onChange={formHandler}
          value={hold.description}

    />

    </DialogContent>

    <DialogActions>
    <button className='saveBtn' onClick={saveData}>save</button>
    <button className='cancelBtn' onClick={props.handalClickclose}>cancel</button>
    </DialogActions>


    </Dialog>
      
    
  )
}
