import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name:any, calories:any, fat:any, carbs:any, protein:any) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Emre', 'Yavaş', 'emreyavas@gmail.com', 'Erkek', '08/09/2023'),
  createData('Ahmet', 'Tek', 'ahmettek@gmail.com', 'Erkek', '08/09/2023'),
  createData('Ayşe', 'Türk', 'ayseturk@gmail.com', 'Kadın', '08/09/2023'),
  createData('Fatma', 'Sıra', 'fatmasira@gmail.com', 'Kadın', '08/09/2023'),

];

export default function MainTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Müşteri Adı</TableCell>
            <TableCell align="right">Müşteri Soyadı</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Cinsiyet</TableCell>
            <TableCell align="right">Hesap Oluşturma Tarihi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}