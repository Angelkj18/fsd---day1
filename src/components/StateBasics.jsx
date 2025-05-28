import React, { useState } from "react";
import  { Typography,Button } from '@mui/material'
const StateBasics=()=>{
    // var name="Tiya";
    var[name,setname] = useState("Luttapi");
    const namechange=()=>{
        setname("kuttusan");
    }
    return (
        <div>
            <Typography variant="h3">Welcome {name}</Typography>
            <Button variant="contained" onClick={namechange}>Change</Button>
            <Button variant="contaied" onClick={()=>{setname("Mayavi")}}>Change</Button>
        </div>
    );
};
export default StateBasics;