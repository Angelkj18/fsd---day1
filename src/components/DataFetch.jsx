import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import { Table,TableHead,TableRow,TableCell,TableBody, TableContainer} from '@mui/material'

const DataFetch = () => {
    var[usres,setUsers]=useState([]);
    // useEffect(()=>{},[])
    useEffect(()=>{
        // axios.get("url").then((response)=>{}).catch()
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{console.log(res.data); setUsers(res.data)}).catch((err)=>console.log(err));
    },[])
  return (
    <div>
      <TableContainer sx={{border:'1px solid black'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usres.map((val,i)=>{
                            return(
                                <TableRow key={i}>
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.username}</TableCell>
                                    <TableCell>{val.email}</TableCell>
                                    <TableCell>{val.address.city}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default DataFetch
