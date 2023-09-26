"use client"
import {  useEffect, useState } from "react"
import "./payment.css"
import axios from "axios";
export default function Page(){
  const[payments,setPayments]=useState([]);
  useEffect(()=>{
    axios.get("https://localhost:44321/api/app/customer-payment-info").then((res)=>{
      setPayments(res.data)
    console.log(res.data.items)

    });
  },[])
    return(
        <div className="paymentContainer">
            <table id="tableMain">
          <thead className="tableHead">
            <tr className="tableTr">
              <th className="tableHeadText">Ad</th>
              <th className="tableHeadText">Soyad</th>
              <th className="tableHeadText">Email</th>
              <th className="tableHeadText">Harcama Türü</th>
             
              <th className="tableHeadText">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableTr">
              <td>Emre</td>
              <td>Yavaş</td>
              <td>emreyavas67@gmail.com</td>
              <td>Seyahat</td>
              
              <td><button className="deleteBtn">Sil</button></td>
            </tr>
            <tr className="tableTr" >
              <td>Emre</td>
              <td>Yavaş</td>
              <td>emreyavas67@gmail.com</td>
              <td>Alışveriş</td>
          
              <td><button className="deleteBtn">Sil</button></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}