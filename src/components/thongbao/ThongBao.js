import React, { Fragment } from "react";
import "../../style/thongbao.style.scss";

export default function ThongBao() {
  const offbox = () => {
    const off = document.getElementById("idthongbao");
    const overley = document.getElementById("IDoverley");
    overley.style.display = "none";
    off.style.display = "none";
  };

  return (
    <Fragment>
      <div id="IDoverley" className="overley"></div>
      <div id="idthongbao" className="thongBao">
        <div className="thongBao_content">
          <div className="thongBao_background">
            <div id="IDicon" className="icon">
              <i className="fa-solid fa-circle-check" />
            </div>
            <h3 id="idH3">Thành Công</h3>
            <p id="idp">Cảm ơn quý khách đã đăng ký</p>
            <button id="btn" onClick={() => offbox()}>
              OK
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
