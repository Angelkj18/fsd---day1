import React from 'react'
import {TextField, Typography, Button} from '@mui/material'

const First = () => {
  return (
    <div>
      <h1>Welcome to Login page</h1>
      <input type="text" placeholder='username' />
      <br />
      <br />
      <input type="text" placeholder='Password' />
      <br />
      <br />
      <button>Login</button>
      <br />
      <br />
      <br />

      <div>
        <Typography variant="h1">Welcome to Login page</Typography>
      </div>
      <TextField variant="outlined" label="username"/><br />
      <br />
      <TextField variant="filled" label="Email address"/><br />
      <br />
      <TextField variant="standard" label="Password"/>
      <button variant="text"/>

      </div>

  )
}

export default First
