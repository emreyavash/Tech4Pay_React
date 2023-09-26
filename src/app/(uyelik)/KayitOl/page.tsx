"use client";
import { Box, TextField } from "@mui/material";
import "./register.css";

import { useState } from "react";
import axios from "axios";
export default function Page() {
  const [registerMessage, setRegisterMessage] = useState("");
  const [className, setClassName] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("https://localhost:44321/api/account/register", {
        name: data.get("firstName"),
        surname: data.get("lastName"),
        userName: data.get("userName"),
        emailAddress: data.get("email"),
        password: data.get("password"),
        appName: "string",
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          setRegisterMessage(
            "Başarılı bir şekilde kaydoldunuz. Giriş Yapabilirsiniz."
          );
          setClassName("text-success text-center");
        }
      })
      .catch((error) => {
        if (error.response) {
          setRegisterMessage(error.response.data.error.message);
          setClassName("text-danger text-start");
        }
      });
  };
  return (
    <div className="registerContainer ">
      <div className="registerDiv">
        <Box
          component="form"
          method="post"
          onSubmit={handleSubmit}
          className="row registerBox"
        >
          <div className="brandContainer">
            <h1 className="brand">Kayıt Ol</h1>
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="firstName"
              name="firstName"
              label="Ad"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="lastName"
              name="lastName"
              label="Soyad"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="userName"
              name="userName"
              label="Kullanıcı Adı"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="password"
              label="Parola"
              type="password"
              fullWidth
              variant="outlined"
              name="password"
            />
          </div>
          <div>
            <p className={className}>{registerMessage}</p>
          </div>
          <div className="col-7 btnDiv">
            <button className="addBtn">Kaydol</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
