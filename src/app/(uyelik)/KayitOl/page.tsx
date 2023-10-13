"use client";
import { Box, TextField } from "@mui/material";
import "./register.css";

import { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation";

type Input = {
  email: string;
  password: string;
  name:string;
  surname:string;
  userName:string
};
const schema = yup.object({
  email:yup.string().required("Zorunlu Alan").email("Email adresi `@` ve `.com` içermelidir."),
  password:yup.string().required("Zorunlu Alan").min(6,"Şifre 6 karakterden fazla olmalıdır"),
  name:yup.string().required("Zorunlu Alan"),
  surname:yup.string().required("Zorunlu Alan"),
  userName:yup.string().required("Zorunlu Alan").min(5,"Kullanıcı adı en az 5 karakter olabilir.").max(15,"Kullanıcı adı en fazla 15 karakter olabilir."),

})

export default function Page() {
  const {register,handleSubmit,formState:{errors}} = useForm<Input>({resolver:yupResolver(schema)});
  const [registerMessage, setRegisterMessage] = useState("");
  const [className, setClassName] = useState("");
  const router = useRouter();
  const Register = (event: any) => {
    axios.post("https://localhost:44321/api/account/register", {
        name: event.name,
        surname: event.surname,
        userName: event.userName,
        emailAddress: event.email,
        password: event.password,
        appName: "string",
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          setRegisterMessage(
            "Başarılı bir şekilde kaydoldunuz. Giriş Yapabilirsiniz."
          );
          setClassName("text-success text-center");
          router.push("/")
        }

      })
      .catch((error) => {
        console.log(error)
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
          onSubmit={handleSubmit(Register)}
          className="row registerBox"
        >
          <div className="brandContainer">
            <h1 className="brand">Kayıt Ol</h1>
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="firstName"
              {...register("name")}
              label="Ad"
              fullWidth
              variant="outlined"
            />
          {errors.name ?<p className="text-end text-danger">{errors.name?.message}</p>:null}
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="lastName"
              {...register("surname")}
              label="Soyad"
              fullWidth
              variant="outlined"
            />
          {errors.surname ?<p className="text-end text-danger">{errors.surname?.message}</p>:null}
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="userName"
              {...register("userName")}
              label="Kullanıcı Adı"
              fullWidth
              variant="outlined"
            />
          {errors.userName ?<p className="text-end text-danger">{errors.userName?.message}</p>:null}
          </div>

          <div className="col-7 mb-4">
            <TextField
              id="email"
              {...register("email")}
              label="Email"
              fullWidth
              variant="outlined"
            />
          {errors.email ?<p className="text-end text-danger">{errors.email?.message}</p>:null}
          </div>
          <div className="col-7 mb-4">
            <TextField
              id="password"
              label="Parola"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password")}
            />
          {errors.password ?<p className="text-end text-danger">{errors.password?.message}</p>:null}
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
