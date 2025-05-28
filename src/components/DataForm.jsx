import { TextField,Button } from '@mui/material'
import {React,useState} from 'react'

const DataForm = () => {
    var[input,setInput]=useState({});
    const inputHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    };
  return (
    <div>
      <TextField variant='outlined' label='Username' onChange={inputHandler} name='username'></TextField><br /><br />
      <TextField variant='outlined' label='Password' onChange={inputHandler} name='Password'></TextField><br /><br />
      <Button vaiant='filled'>Login</Button>
    </div>
  )
}

export default DataForm
