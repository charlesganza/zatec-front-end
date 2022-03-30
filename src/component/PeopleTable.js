import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const PeopleTable = ({people, showHeader}) => {

  return (
    <div>
      {
        showHeader ? <Typography style={{ padding: 20 }} variant="h6" component="h6">
          Results for People
        </Typography> : null
      }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Eye color</TableCell>
              <TableCell align="right">Hair Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow
                key={person.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {person.name}
                </TableCell>
                <TableCell align="right">{person.gender}</TableCell>
                <TableCell align="right">{person.height}</TableCell>
                <TableCell align="right">{person.eye_color}</TableCell>
                <TableCell align="right">{person.hair_color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PeopleTable;
