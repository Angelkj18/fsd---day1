import { Button, TextField, Typography } from '@mui/material'
import {useState,React} from 'react'

const TextInput = () => {
    var[data,setdata]=useState();
    var[output,setoutput]=useState();
    const  getName=(e)=>{
        console.log(e.target.value)
        setdata(e.target.value);
    }
    const setname=()=>{
        setoutput(data);
    }
  return (
    <div>
      <Typography variant='h3'>Welcome {output}</Typography>
      <br />
      
      <TextField variant='outlined' label="username" onChange={getName}></TextField>

      <br />
      <br />
      <Button variant='contained' onClick={setname}>GetName</Button>
    </div>
  )
}

export default TextInput
