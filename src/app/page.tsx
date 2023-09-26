"use client"
import { useEffect, useState } from "react";
import MainPage from "./Main/MainPage";
import Page from "./(uyelik)/GirisYap/page";

export default function Home() {
  const [isLogin,setLogin]=useState(false)
  useEffect(()=>{
  const login =localStorage.getItem("login")

    setLogin(login =="success"?true:false)

  })
  return (
    <>
   {
    isLogin?
    <div className="col-12">
     <MainPage/>
   </div>:
   <div className="col-12">
     <Page/>
   </div>
   }
     </>
  );
}
