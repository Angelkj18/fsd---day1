import { Button,Typography } from '@mui/material';
import React, { useState } from 'react'


const Counter = () => {
    var [val,setval]=useState(0);
    const inc=()=>{
        setval(++val);
    };
    const dec=()=>{
        setval(--val);
    };
  return (
    <div>
      <Typography variant="h3">{val}</Typography>
      <Button variant='contained' color="success" onClick={inc}>+</Button>
      <Button variant='contained' color="sucess" onClick={dec}>-</Button>
    </div>
  )
}

export default Counter
