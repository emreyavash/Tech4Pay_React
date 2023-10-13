"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./profil.css";
import { useEffect, useState } from "react";
export default function Page() {
  const [gender, setGender] = useState("");
  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  const email = localStorage.getItem("email")

  return (
    <div className="profileContainer">
      <div className="row profileDiv">
        <div className="col-4 userImageContainer">
          <div className="userImageDiv">
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/66.jpg"
              alt="Kullanıcı Resmi"
              className="userImageProfile"
            />
          </div>
          <div className="userImageBtnDiv">
            <button className="deleteBtn">Fotoğrafı Kaldır</button>
            <button className="imageBtn">Fotoğrafı Seç</button>
          </div>
        </div>
        <div className="col-8">
          <div className="row profileInfoDiv">
            <div className="col-8 mb-4">
              <TextField
                id="firstName"
                label="Ad"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label="Soyad"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label="Email"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField id="tcNo" label="Tc No" fullWidth variant="outlined" />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label="Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label=" İş Telefon Numarası"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label="Adres"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <TextField
                id="lastName"
                label="İş Adresi"
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="col-8 mb-4">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cinsiyet</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Cinsiyet"
                  onChange={handleChange}
                >
                  <MenuItem value={"true"}>Erkek</MenuItem>
                  <MenuItem value={"false"}>Kadın</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-10 btnDiv">
              <button className="updateBtn">Güncelle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
