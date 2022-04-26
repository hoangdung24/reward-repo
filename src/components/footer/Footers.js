import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

export default function Footers() {
  const [dkTT, setdkTT] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Đây không phải là email")
        .required("Không được bỏ trống ký tự"),
    }),

    onSubmit: (value) => {
      setdkTT(value);
      const dk = value;
      console.log("objectvalue", dk);

      axios
        .post("https://member-intro.t-solution.vn/api/v2/subscribers/", dk, {
          headers: {
            Authorization: "Api-Key ubc9FYnH.brSNHwzFxNIZgehgQosDArgFe70dfigA",
          },
        })
        .then((rss) => {
          console.log(rss);
          const tc = "tc";
          box(tc);
        })
        .catch((err) => {
          const tb = "tb";
          console.log(err.response.data.message);
          box(tb);
        });
    },
  });

  const box = (value) => {
    if (value === "tc") {
      const ok = document.getElementById("idthongbao");
      const overley = document.getElementById("IDoverley");
      ok.style.display = "flex";
      overley.style.display = "block";
    } else if (value === "tb") {
      const ok = document.getElementById("idthongbao");
      const btn = document.getElementById("btn");
      const IDicon = document.getElementById("IDicon");
      const overley = document.getElementById("IDoverley");
      const idH3 = document.getElementById("idH3");
      const idp = document.getElementById("idp");
      overley.style.display = "block";
      btn.style.backgroundColor = "red";
      ok.style.display = "flex";
      IDicon.innerHTML = `<i className="fas fa-money-check" />`;
      idH3.innerText = `Thất Bại`;
      idp.innerText = `Đăng ký thất bại`;
      IDicon.style.color = "red";
    }
  };
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="logo">
          <img
            src="https://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.38.45-removebg-preview_uLptFJG.png"
            alt=""
          />
        </div>
        <div className="about">
          <div className="about_content">
            <div className="about_item">
              <h3>Về chúng tôi</h3>
              <p>Điều khoản và điều kiện</p>
              <p>Chính sách sử dụng</p>
            </div>
            <div className="about_item">
              <h3>Cơ hội chung vui</h3>
              <p>Trở thành đối tác</p>
            </div>
            <div className="about_item">
              <h3>Liên hệ hỗ trợ</h3>
              <div className="icon">
                <p>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=3840&q=75"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=3840&q=75"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=3840&q=75"
                    alt=""
                  />
                </p>
              </div>

              <p>1900 0019</p>
              <p>8 AM - 8.30 PM hằng ngày</p>
            </div>
            <div className="about_item_mobile">
              <div className="about_item_img">
                <img
                  src="https://reward-landing-page.vercel.app/apple.svg"
                  alt=""
                />
              </div>
              <div className="about_item_img">
                <img
                  src="https://reward-landing-page.vercel.app/google.svg"
                  alt=""
                />
              </div>
              <div className="about_item_img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="diachi">
          <div className="diachi_company">
            <h5>Công ty Đổi điểm</h5>
            <p>
              Địa chỉ: 10 Đường số 33, Phường An Khánh, Thành phố Thủ Đức, Thành
              phố Hồ Chí Minh, Việt Nam
            </p>
            <p>Mã số doanh nghiệp: 0000000xxxx</p>
            <p>Đại diện pháp lý: Trần Văn A – Chức vụ: Tổng Giám Đốc</p>
          </div>
          <div className="diachi_dangky">
            <h3>Đăng ký nhận thông tin</h3>
            <form onSubmit={formik.handleSubmit} className="diachi_dangky_2">
              <input
                placeholder="nadone@si.rw"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <button>ĐĂNG KÝ</button>
              {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
