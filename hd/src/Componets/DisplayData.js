import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayData(props){
      
      const[data , setData] = useState([]);

      const getData = ()=>{
           
           fetch("https://itchy-plum-caridea.cyclic.app/api/tutorials")
           .then(y=>y.json())
           .then(y=>{
              setData(y);
              console.log(y)
           })

      }

      useEffect(()=>{
                 getData();
      },[]);

      const columns = [
      {
      field: 'id' , headerName: 'ID' , width : 300
      },
      {
      field : 'title', headerName : 'title', width : 130
      },
      {
      field : 'description' , headerName : 'description' , width :330
      },
      {
       field : 'delete',
       headerName : 'Delete',
       width : 90,
       renderCell : (params)=>{

       return(
       <button onClick={()=>{
         
         fetch(`https://itchy-plum-caridea.cyclic.app/api/tutorials/${params.row.id}`,{
         method : 'delete',
         }).then(y=>y.json())
         .then(y=>{
         getData()
         })

       }} className='dltBtn'>Delete</button>
       )
             
       }

      },

      {
       field:'Edit',
       headerName : 'Edit',
       width : 90,
       renderCell : (params)=>{
           
           return(
           <button onClick={()=>{props.setId(params.row.id)}} className='editBtn'>Edit</button>
           )
       }
      }
      ]

  return (
    <div style={{ height: 400, width: '100%' }}>

    <DataGrid
    rows = {data}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 5} },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
    />

    


      
    </div>
  )
}
