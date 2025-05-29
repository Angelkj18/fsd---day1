import { TextField,Button, Typography } from '@mui/material'
import {React,useState} from 'react'
import axios from 'axios'

const AddStudent = () => {
    var [input,setInputs] = useState({});
    const inputHandler = (e)=>{
        setInputs({...inputs,[e.tatget.name]:e.target.value});
        console.log(inputs)
        
    };
    const submitHandler = ()=>{
        console.log("Button clicked")
        axios
        .post("http://localhost:3000",inputs)
        .then((res)=>{
            console.log(res);
            alert(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    };
  return (
    <div>
        <Typography variant='h2'>Welcome to Student Portal Form</Typography>
      <TextField
       variant='outlined'
        label='name'
        onChange={inputHandler}
        name='Name'>
        </TextField><br /><br />

      <TextField 
      variant='outlined'
       label='place' 
       onChange={inputHandler}
       name='Place'>
        </TextField><br /><br />

      <TextField variant='outlined'
       label='age'
       onChange={inputHandler}
        name='Age'>
        </TextField><br /><br />

      <TextField 
      variant='outlined'
       label='Department'
       onChange={inputHandler}
        name='Department'>
        </TextField><br /><br />

      <Button vaiant='filled'
       onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default AddStudent;