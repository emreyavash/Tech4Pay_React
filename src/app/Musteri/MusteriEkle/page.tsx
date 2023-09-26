"use client";
import { Box, TextField } from "@mui/material";
import "./customerAdd.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Page() {
  const [gender, setGender] = useState("");
  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  const router = useRouter()
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("https://localhost:44321/api/Customer/CreateCustomer", {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      tcNo: data.get("tcNo"),
      gender: data.get("gender"),

      customerAddresses: [
        {
          addressId: "95d28054-6e45-dbc8-887c-3a0c0c277219",
          address: data.get("address"),
        },
        {
          addressId: "3edb8d80-74d6-5919-e707-3a0c0911bba4",
          address: data.get("busiAddress"),
        },
      ],
      customerPhoneNumbers: [
        {
          phoneTypeId: "2bf796d4-2301-d978-b30b-3a0c0c2ff0fc",
          phoneNumber: data.get("phoneNumber"),
        },
        {
          phoneTypeId: "8215ef34-2e23-3b95-0045-3a0c0c20b6eb",
          phoneNumber: data.get("busiPhoneNumber"),
        },
      ],
      customerEmails: [
        {
          emailTypeId: "500acc74-e0f1-d252-a731-3a0c3c9ecc05",
          email: data.get("email"),
        },
        {
          emailTypeId: "432844ab-90a3-4f39-db1d-3a0c091240e3",
          email: data.get("busiEmail"),
        },
      ],
      customerPaymentInfos: [
        {
          
          "paymentId": "285245ef-3d84-052d-98a7-3a0c3c9d499a",
        }
      ],
    }).then(res=>{
      router.push("/Musteri")
    });
  };
  return (
    <div className="customerAddContainer ">
      <div className="customerAddDiv">
        <Box
          component="form"
          method="post"
          className="row"
          onSubmit={handleSubmit}
        >
          <div className="col-5 mb-4">
            <TextField
              id="firstName"
              label="Ad"
              fullWidth
              variant="outlined"
              name="firstName"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="Soyad"
              name="lastName"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="email"
              label="Email"
              fullWidth
              variant="outlined"
              name="email"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="busiEmail"
              name="busiEmail"
              label="İş Emaili"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="tcNo"
              label="Tc No"
              fullWidth
              variant="outlined"
              name="tcNo"
            />
          </div>
          <div className="col-5 mb-4">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cinsiyet</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={gender}
                label="Cinsiyet"
                onChange={handleChange}
              >
                <MenuItem value={"true"}>Erkek</MenuItem>
                <MenuItem value={"false"}>Kadın</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="phoneNumber"
              label="Telefon Numarası"
              name="phoneNumber"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="busiPhoneNumber"
              name="busiPhoneNumber"
              label="İş Telefon Numarası"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="address"
              label="Adres"
              fullWidth
              name="address"
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              name="busiAddress"
              id="busiAddress"
              label="İş Adresi"
              fullWidth
              variant="outlined"
            />
          </div>

          <div className="col-10 btnDiv">
            <button className="resetBtn">Temizle</button>

            <button className="addBtn">Ekle</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
