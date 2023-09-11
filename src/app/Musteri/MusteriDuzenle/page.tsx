"use client";
import { Box, TextField } from "@mui/material";
import "./customerUpdate.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
export default function Page() {
  const [gender, setGender] = useState("");
  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
  return (
    <div className="customerAddContainer ">
      <div className="row customerAddDiv">
        <Box component="form" method='post'>
          <div className="col-5 mb-4">
            <TextField id="firstName" label="Ad" fullWidth variant="outlined" />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="Soyad"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="Email"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="İş Emaili"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField id="tcNo" label="Tc No" fullWidth variant="outlined" />
          </div>
          <div className="col-5 mb-4">
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
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="Telefon Numarası"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="İş Telefon Numarası"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="Adres"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-5 mb-4">
            <TextField
              id="lastName"
              label="İş Adresi"
              fullWidth
              variant="outlined"
            />
          </div>

          <div className="col-10 btnDiv">
            <button className="resetBtn">Temizle</button>

            <button className="addBtn">Düzenle</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
