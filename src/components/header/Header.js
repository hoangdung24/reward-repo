import React from "react";
import "../../style/header.style.scss";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          <img
            src="https://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=3840&q=75"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Giới thiệu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hướng dẫn tải app
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#doitacBacktoTOp">
                Đối tác
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Tin tức</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Liên hệ</a>
            </li>
          </ul>
          <button>Đăng Ký</button>
        </div>
      </nav>
    </div>
  );
}
