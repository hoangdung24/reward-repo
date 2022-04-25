import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

export default function DangKy() {
  const [vale, setVale] = useState("");

  const formik = useFormik({
    initialValues: {
      ten: "",
      nguoidaidien: "",
      quanan: "",
      mail: "",
      taikhoan: "",
      bank: "",
      chubank: "",
      chinhanh: "",
      sdt: "",
    },

    validationSchema: Yup.object({
      ten: Yup.string()
        .min(5, "Tên quá ngắn")
        .required("Không được bỏ trống ký tự"),
      mail: Yup.string()
        .email("Email không đúng")
        .required("Không được bỏ trống ký tự"),
      nguoidaidien: Yup.string().required("Không được bỏ trống ký tự"),
      sdt: Yup.string().required("Không được bỏ trống ký tự"),
      nguoidaidien: Yup.string().required("Không được bỏ trống ký tự"),
      taikhoan: Yup.string().required("Không được bỏ trống ký tự"),
      bank: Yup.string().required("Không được bỏ trống ký tự"),
      chubank: Yup.string().required("Không được bỏ trống ký tự"),
      chinhanh: Yup.string().required("Không được bỏ trống ký tự"),
    }),

    onSubmit: (value) => {
      console.log("objectvalue", value);
      setVale(value);
      axios({
        url: "https://member-intro.t-solution.vn/api/v2/subscribers/",
        method: "POST",
        data: { value },
      });
    },
  });
  console.log("vale", vale);
  return (
    <form onSubmit={formik.handleSubmit} className="dangky">
      <h1>Đăng ký quán thành viên</h1>
      <div className="dangky_input">
        <input
          type="text"
          placeholder="Tên quán / thương hiệu"
          name="ten"
          value={formik.values.ten}
          onChange={formik.handleChange}
        />
        {formik.errors.ten && formik.touched.ten && (
          <p style={{ color: "red" }}>{formik.errors.ten}</p>
        )}

        <input
          type="text"
          placeholder="Người đại diện"
          name="nguoidaidien"
          value={formik.values.nguoidaidien}
          onChange={formik.handleChange}
        />
        {formik.errors.nguoidaidien && formik.touched.nguoidaidien && (
          <p style={{ color: "red" }}>{formik.errors.nguoidaidien}</p>
        )}

        <select
          placeholder="Quán ăn"
          name="quanan"
          value={formik.values.quanan}
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
        </select>

        {/* <input
          type="text"
          placeholder="Quán ăn"
          name="quanan"
          value={formik.values.quanan}
          onChange={formik.handleChange}
        /> */}
        {formik.errors.quanan && formik.touched.quanan && (
          <p style={{ color: "red" }}>{formik.errors.quanan}</p>
        )}

        <input
          type="email"
          placeholder="mail"
          name="mail"
          value={formik.values.mail}
          onChange={formik.handleChange}
        />
        {formik.errors.mail && formik.touched.mail && (
          <p style={{ color: "red" }}>{formik.errors.mail}</p>
        )}

        <input
          type="text"
          placeholder="Số tài khoản ngân hàng"
          name="taikhoan"
          value={formik.values.taikhoan}
          onChange={formik.handleChange}
        />
        {formik.errors.taikhoan && formik.touched.taikhoan && (
          <p style={{ color: "red" }}>{formik.errors.taikhoan}</p>
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
          name="chubank"
          value={formik.values.chubank}
          onChange={formik.handleChange}
        />
        {formik.errors.chubank && formik.touched.chubank && (
          <p style={{ color: "red" }}>{formik.errors.chubank}</p>
        )}

        <input
          type="text"
          placeholder="Chi nhánh"
          name="chinhanh"
          value={formik.values.chinhanh}
          onChange={formik.handleChange}
        />
        {formik.errors.chinhanh && formik.touched.chinhanh && (
          <p style={{ color: "red" }}>{formik.errors.chinhanh}</p>
        )}

        <input
          type="text"
          placeholder="Số điện thoại"
          name="sdt"
          value={formik.values.sdt}
          onChange={formik.handleChange}
        />
        {formik.errors.sdt && formik.touched.sdt && (
          <p style={{ color: "red" }}>{formik.errors.sdt}</p>
        )}

        <button>File đính kèm</button>
        <p>Lưu ý: File đính kèm không vượt quá 20Mb</p>
        <button className="btnDangKy">ĐĂNG KÝ</button>
      </div>
    </form>
  );
}
