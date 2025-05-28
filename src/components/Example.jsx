import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Example = () => {
    var[val,setval]=useState()
    

  return (
    <div>
      <Typography variant='h3'>Welcome to {val}</Typography>
      <Button variant='contained' onClick={()=>{setval("Gallery")}}>Home Page</Button>&nbsp;
      <Button variant='contained' onClick={()=>{setval("Home")}}>Login</Button>&nbsp;
      <Button variant='contained' onClick={()=>{setval("Contact")}}>About</Button>&nbsp;
    </div>
  )
}

export default Example
