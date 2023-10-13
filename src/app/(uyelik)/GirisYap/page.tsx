"use client";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
type Input = {
  email: string;
  password: string;
};
const schema = yup.object({
  email:yup.string().required("Zorunlu Alan").email("Email adresi `@` ve `.com` içermelidir."),
  password:yup.string().required("Zorunlu Alan").min(6,"Şifre 6 karakterden fazla olmalıdır")
})
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({resolver:yupResolver(schema)});
  const [loginMessage, setLoginMessage] = useState("");
  const [className, setClassName] = useState("");
  const [remember, setRemember] = useState(false);
  const handleChange = () => {
    setRemember(!remember);
  };
  const Login = (event: any) => {

    axios
      .post("https://localhost:44321/api/account/login", {
        userNameOrEmailAddress: event.email,
        password: event.password,
        rememberMe: remember,
      })
      .then((res) => {
        const result = res.data.result;
        if (result == 1) {
          setLoginMessage("Başarılı şekilde giriş yaptınız.");
          setClassName("text-success text-center");
          localStorage.setItem("login", "success");
          localStorage.setItem("email",event.email);
          window.location.reload();
        } else if (result == 2) {
          setLoginMessage("Kullanıcı Adı veya Parola yanlış.");
          setClassName("text-danger text-center");
        } else if (result == 4) {
          setLoginMessage("Hesap kilitlendi. Daha sonra tekrar deneyiniz.");
          setClassName("text-warning text-center");
        }
      });
  };
  return (
    <div className="loginContainer">
      <div className="loginDiv">
        <Box
          component="form"
          method="post"
          className="loginBox"
          onSubmit={handleSubmit(Login)}
        >
          <div className="brandContainer">
            <h1 className="brand">Giriş Yap</h1>
          </div>
          <div className="loginIputContainer">
            <TextField
              id="email"
              label="Email"
              {...register("email", { required: "Zorunlu Alan" })}
              className="loginInput"
              fullWidth
              variant="outlined"
            />
            {errors.email ?<p className="text-end text-danger">{errors.email?.message}</p>:null}
            <TextField
              id="password"
              label="Parola"
              className="loginInput"
              fullWidth
              variant="outlined"
              type="password"
              {...register("password", { required: "Zorunlu Alan" })}
            />
            {errors.password ?<p className="text-end text-danger">{errors.password?.message}</p>:null}

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
          <div></div>
          <div className="btnContainer">
            <button className="loginBtn">Giriş Yap</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
