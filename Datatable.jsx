import React from "react";
import { Table,TableHead,TableRow,TableCell,TableBody, TableContainer} from '@mui/material'

const Datatable =()=>{
    return (
        <div>
            
            <TableContainer sx={{border:'1px solid black'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Place</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Tiya</TableCell>
                            <TableCell>18</TableCell>
                            <TableCell>Thrissur</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Datatable