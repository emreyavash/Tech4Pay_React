"use client";
import { useEffect, useState } from "react";
import "./customer.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const url = "https://localhost:44321/api/Customer/GetCustomers";
  const [customers, setCustomers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios.get(url).then((res) => {
      setCustomers(res.data);
    });
  }, []);
  return (
    <div className="col-12">
      <div className="customerContainer">
        <div className="customerHeaderDiv">
          <div className="customerSearchBarDiv">
            <input
              type="text"
              className="customerSearchBar"
              placeholder="Müşteri Ara"
            />
            <button className="customerSearchBtn">Ara</button>
          </div>
          <div className="customerAddDiv">
            <a href="/Musteri/MusteriEkle" className="customerAdd">
              Müşteri Ekle
            </a>
          </div>
        </div>
        <table id="tableMain">
          <thead className="tableHead">
            <tr className="tableTr">
              <th className="tableHeadText">Ad</th>
              <th className="tableHeadText">Soyad</th>
              <th className="tableHeadText">Email</th>
              <th className="tableHeadText">Telefon Numarası</th>
              <th className="tableHeadText">Adres</th>
              <th className="tableHeadText">Cinsiyet</th>
              <th className="tableHeadText">Düzenle</th>
              <th className="tableHeadText">Sil</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer:any) => (
              <tr className="tableTr" key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.customerEmails.length != 0 ? customer.customerEmails[0].email :"Email Girilmemiş"}</td>
                <td>{customer.customerPhoneNumbers.length != 0 ? customer.customerPhoneNumbers[0].phoneNumber :"Telefon Numarası Girilmemiş"}</td>
                <td>{customer.customerAddresses.length !=0?customer.customerAddresses[0].address:"Adres Girilmemiş"}</td>
                {customer.gender?<td>Erkek</td>:<td>Kadın</td>}
                <td>
                  <button className="editBtn" onClick={()=>router.push("/Musteri/"+customer.id  )}>Düzenle</button>
                </td>
                <td>
                  <button className="deleteBtn">Sil</button>
                </td>
              </tr>
            ))}

            
          </tbody>
        </table>
      </div>
    </div>
  );
}
