import React from "react";
import "../../style/hero.style.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background">
        <img
          src="https://member-intro.t-solution.vn/media/original_images/01.png?w=3840&q=75"
          alt=""
        />
      </div>
      <div className="hero-text">
        <h2>
          Text hiển thị trên
          <br /> trang chủ
        </h2>
        <button>Send App To Your Phone</button>
      </div>
    </div>
  );
}
