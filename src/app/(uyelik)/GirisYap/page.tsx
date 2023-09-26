"use client";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Page() {
  const [loginMessage,setLoginMessage]=useState("");
  const [className, setClassName] = useState("");
  const [remember, setRemember] = useState(false);
  const handleChange = () => {
    setRemember(!remember);
  };
  const Login = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    axios.post("https://localhost:44321/api/account/login", {
        userNameOrEmailAddress: data.get("email"),
        password: data.get("password"),
        rememberMe: remember
      })
      .then((res) => {
        const result = res.data.result;
        if (result == 1) {
          setLoginMessage("Başarılı şekilde giriş yaptınız.");
          setClassName("text-success text-center")
          localStorage.setItem("login","success");
          window.location.reload();
        }
        else if(result == 2){
          setLoginMessage("Kullanıcı Adı veya Parola yanlış.")
          setClassName("text-danger text-center")

        }
        else if(result == 4){
          setLoginMessage("Hesap kilitlendi. Daha sonra tekrar deneyiniz.")
          setClassName("text-warning text-center")

        }
      })
      
  };
  return (
    <div className="loginContainer">
      <div className="loginDiv">
        <Box component="form" method="post" className="loginBox" onSubmit={Login}>
          <div className="brandContainer">
            <h1 className="brand">Giriş Yap</h1>
          </div>
          <div className="loginIputContainer">
            <TextField
              id="email"
              label="Email"
              name="email"
              className="loginInput"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="password"
              label="Parola"
              className="loginInput"
              fullWidth
              variant="outlined"
              type="password"
              name="password"
            />
          </div>
          <div className="rememberDiv">
            <FormControlLabel
              control={<Checkbox onClick={handleChange} />}
              label="Beni Hatırla"
            />
          </div>
          <div className="subTextContainer">
            <a href="/KayitOl" className="register">
              Kayıt olmak için tıklayın
            </a>
          </div>
          <div>
            <p className={className}>{loginMessage}</p>
          </div>
          <div className="btnContainer">
            <button className="loginBtn" >
              Giriş Yap
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
