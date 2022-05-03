import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { API_KEY } from "../../service/api-key/apiKey";

export default function DangKy() {
  const [vale, setVale] = useState("");
  // const API_KEY = "Api-Key ubc9FYnH.brSNHwzFxNIZgehgQosDArgFe70dfigA";

  const formik = useFormik({
    initialValues: {
      store_name: "",
      presentator: "",
      category: 2,
      email: "",
      bank_number: "",
      bank: "",
      owner: "",
      branch: "",
      phone: "",
      files: "CV Front-End-PhanAnhPhi.pdf",
      page: 6,
    },

    validationSchema: Yup.object({
      store_name: Yup.string()
        .min(5, "Tên quá ngắn")
        .required("Không được bỏ trống ký tự"),
      email: Yup.string()
        .email("Đây không phải là email")
        .required("Không được bỏ trống ký tự"),
      presentator: Yup.string().required("Không được bỏ trống ký tự"),
      phone: Yup.string().required("Không được bỏ trống ký tự"),
      bank_number: Yup.string().required("Không được bỏ trống ký tự"),
      bank: Yup.string().required("Không được bỏ trống ký tự"),
      owner: Yup.string().required("Không được bỏ trống ký tự"),
      branch: Yup.string().required("Không được bỏ trống ký tự"),
    }),

    onSubmit: (value) => {
      setVale(value);
      const vvv = value;
      // console.log("objectvalue", vvv);

      axios
        .post("https://member-intro.t-solution.vn/api/v2/submissions/", vvv, {
          headers: {
            Authorization: API_KEY,
          },
        })
        .then((rss) => {
          console.log(rss);
          const tc = "tc";
          box(tc);
        })
        .catch((err) => {
          const tb = "tb";
          // console.log(err.response.data.message);
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
  // console.log("vale", vale);
  return (
    <form onSubmit={formik.handleSubmit} className="dangky">
      <h1>Đăng ký quán thành viên</h1>
      <div className="dangky_input">
        <input
          type="text"
          placeholder="Tên quán / thương hiệu"
          name="store_name"
          value={formik.values.store_name}
          onChange={formik.handleChange}
        />
        {formik.errors.store_name && formik.touched.store_name && (
          <p style={{ color: "red" }}>{formik.errors.store_name}</p>
        )}

        <input
          type="text"
          placeholder="Người đại diện"
          name="presentator"
          value={formik.values.presentator}
          onChange={formik.handleChange}
        />
        {formik.errors.presentator && formik.touched.presentator && (
          <p style={{ color: "red" }}>{formik.errors.presentator}</p>
        )}

        {/* <select
          placeholder="Quán ăn"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          id="cars"
        >
          <option value="volvo">Quán ăn</option>
          <option value="volvo">Automative</option>
          <option value="saab">Baby & Toddler</option>
          <option value="opel">Giáo dục</option>
          <option value="audi">Giải trí</option>
          <option value="audi">Quán cafe</option>
          <option value="audi">Quán ăn</option>
        </select> */}

        <input
          type="text"
          placeholder="Quán ăn"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        />
        {formik.errors.category && formik.touched.category && (
          <p style={{ color: "red" }}>{formik.errors.category}</p>
        )}

        <input
          type="email"
          placeholder="mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}

        <input
          type="text"
          placeholder="Số tài khoản ngân hàng"
          name="bank_number"
          value={formik.values.bank_number}
          onChange={formik.handleChange}
        />
        {formik.errors.bank_number && formik.touched.bank_number && (
          <p style={{ color: "red" }}>{formik.errors.bank_number}</p>
        )}

        <input
          type="text"
          placeholder="Bank"
          name="bank"
          value={formik.values.bank}
          onChange={formik.handleChange}
        />
        {formik.errors.bank && formik.touched.bank && (
          <p style={{ color: "red" }}>{formik.errors.bank}</p>
        )}

        <input
          type="text"
          placeholder="Chủ tài khoản"
          name="owner"
          value={formik.values.owner}
          onChange={formik.handleChange}
        />
        {formik.errors.owner && formik.touched.owner && (
          <p style={{ color: "red" }}>{formik.errors.owner}</p>
        )}

        <input
          type="text"
          placeholder="Chi nhánh"
          name="branch"
          value={formik.values.branch}
          onChange={formik.handleChange}
        />
        {formik.errors.branch && formik.touched.branch && (
          <p style={{ color: "red" }}>{formik.errors.branch}</p>
        )}

        <input
          type="text"
          placeholder="Số điện thoại"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && formik.touched.phone && (
          <p style={{ color: "red" }}>{formik.errors.phone}</p>
        )}

        <button>File đính kèm</button>
        <p>Lưu ý: File đính kèm không vượt quá 20Mb</p>
        <button className="btnDangKy">ĐĂNG KÝ</button>
      </div>
    </form>
  );
}
