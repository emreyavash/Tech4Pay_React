import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';




export default function MainTable() {
  const[customers,setCustomers]=useState([])
  useEffect(()=>{
    axios.get("https://localhost:44321/api/Customer/GetCustomers").then(res=>{
      setCustomers(res.data)
    })
    console.log(customers)
  },[])
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
          {customers.map((customer:any) => (
            <TableRow
              key={customer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {customer.firstName}
              </TableCell>
              <TableCell align="right">{customer.lastName}</TableCell>
              <TableCell align="right">{customer.customerEmails[0].email}</TableCell>
              <TableCell align="right">{customer.gender ? "Erkek":"Kadın"}</TableCell>
              <TableCell align="right">{customer.createDateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}