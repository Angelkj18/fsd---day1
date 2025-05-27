
import React from "react";
import {TextField, Button} from '@mui/material'


const Reg=()=>{
    return (
        <div>
            <TextField variant="outlined" label="Name"></TextField>
             <br />
            <TextField variant="outlined" label="Department"></TextField>
            <br />
            <TextField variant="outlined" label="Age"></TextField>
            <br />
            <TextField variant="outlined" label="Username"></TextField>
            <br />
            <TextField variant="outlined" label="Password"></TextField>
            <br />
            <br />
            <br />
            
            <Button variant="contained">submit</Button>
        </div>
        

    )
}

export default Reg

