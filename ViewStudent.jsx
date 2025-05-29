//Display a table of all added students
import React from 'react'
import { Table,TableHead,TableRow,TableCell,TableBody, TableContainer} from '@mui/material'
const ViewStudent = () => {
  return (
    <div>
     <TableContainer sx={{border:'1px solid black'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Place</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
    </div>
  )
}

export default ViewStudent

