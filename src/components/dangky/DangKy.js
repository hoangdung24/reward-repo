import React from "react";

export default function DangKy() {
  return (
    <div className="dangky">
      <h1>Đăng ký quán thành viên</h1>
      <div className="dangky_input">
        <input type="text" placeholder="Tên quán / thương hiệu" />
        <br />
        <input type="text" placeholder="Người đại diện" />
        <br />
        <input type="text" placeholder="Quán ăn" />
        <br />
        <input type="text" placeholder="mail" />
        <br />
        <input type="text" placeholder="Số tài khoản ngân hàng" />
        <br />
        <input type="text" placeholder="Bank" />
        <br />
        <input type="text" placeholder="Chủ tài khoản" />
        <br />
        <input type="text" placeholder="Chi nhánh" />
        <br />
        <input type="text" placeholder="Số điện thoại" />
        <br />
        <button>
          <p>File đính kèm</p>
        </button>
        <p>Lưu ý: File đính kèm không vượt quá 20Mb</p>
        <button className="btnDangKy">
          <p>ĐĂNG KÝ</p>
        </button>
      </div>
    </div>
  );
}
