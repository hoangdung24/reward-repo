import React from "react";
import Brand from "../components/brand/Brand";
import DangKy from "../components/dangky/DangKy";
import Footers from "../components/footer/Footers";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import New from "../components/new/New";
import User from "../components/User/User";
import "../style/gobal.style.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <User />
      <Brand />
      <New />
      <DangKy />
      <Footers />
    </div>
  );
}
