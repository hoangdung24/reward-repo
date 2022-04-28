import React, { useState } from "react";
import "../component/SignUp.css";
import validator from "validator";
function SignUp() {
  const [person, setPerson] = useState({
    store_name_require: "",
    presentator_require: "",
    email_require: "",
    bank_number: "",
    bank: "",
    owner: "",
    branch_require: "",
    phone_require: "",
    files: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    // console.log(person);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let checkInfo = true;

    // check email và số điện thoại.
    if (
      validator.isEmail(person.email_require) &&
      validator.isMobilePhone(person.phone_require)
    ) {
      // check những trường yêu cầu cânf nhập value
      var arr = [];
      for (var k in person) {
        if (k.includes("require")) {
          arr.push(k);
        }
      }
      var person_keys = Object.keys(person);
      var person_value = Object.values(person);
      for (let index = 0; index < arr.length; index++) {
        arr[index] = person_keys.indexOf(arr[index]);
        if (person_value[arr[index]] == "") {
          alert("Vui lòng nhập đầy đủ thông tin ở các trường yêu cầu");
          checkInfo = false;
          break;
        }
      }
      if (checkInfo) {
        alert("Đã lưu thông tin thành công");
      }
    } else {
      alert("Email hoặc số điện thoại không hợp lệ !");
    }
  };
  return (
    <div
      id="SignUp"
      class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2"
    >
      <div class="MuiGrid-root MuiGrid-container css-1cn3yto">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8 css-efwuvd">
          <div class="MuiBox-root css-1939klg">
            <h4 class="MuiTypography-root MuiTypography-h4 css-pdsntx">
              Đăng ký quán thành viên
            </h4>
            <div class="css-ovnx7g">
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder=" Tên quán / Thương hiệu*"
                    aria-invalid="false"
                    name="store_name_require"
                    required=""
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-3"
                    value={person.store_name_require}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Tên quán / Thương hiệu&nbsp;*</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Người đại diện*"
                    aria-invalid="false"
                    name="presentator_require"
                    required=""
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-4"
                    value={person.presentator_require}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Người đại diện&nbsp;*</span>
                    </legend>
                  </fieldset>
                </div>
              </div>

              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Email*"
                    aria-invalid="false"
                    id="3"
                    name="email_require"
                    required=""
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    value={person.email_require}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Email&nbsp;*</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div
                class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6"
                inputmode="numeric"
              >
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Số tài khoản ngân hàng"
                    aria-invalid="false"
                    name="bank_number"
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-5"
                    value={person.bank_number}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Số tài khoản ngân hàng</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Bank"
                    aria-invalid="false"
                    name="bank"
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-6"
                    value={person.bank}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Bank</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder=" Chủ tài khoản"
                    aria-invalid="false"
                    name="owner"
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-7"
                    value={person.owner}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Chủ tài khoản</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Chi nhánh*"
                    aria-invalid="false"
                    name="branch_require"
                    required=""
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-8"
                    value={person.branch_require}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Chi nhánh&nbsp;*</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-g9fphr">
                  <input
                    placeholder="Số điện thoại*"
                    aria-invalid="false"
                    name="phone_require"
                    required=""
                    type="text"
                    class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                    value=""
                    id="mui-9"
                    value={person.phone_require}
                    onChange={handleChange}
                  />
                  <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend class="css-1ftyaf0">
                      <span>Số điện thoại&nbsp;*</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
              <div class="css-1abzdwk">
                <div class="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                  <label for="files">
                    <input
                      id="files"
                      name="files"
                      accept=".doc, .docx, .pdf"
                      multiple=""
                      type="file"
                      autocomplete="off"
                      tabindex="-1"
                    />
                    <span
                      class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1w2ne40"
                      tabindex="0"
                      role="button"
                    >
                      <span class="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                        <i class="fa fa-paperclip"></i>
                      </span>
                      <span>File đính kèm</span>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </span>
                  </label>
                  <p class="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-8lw1e9">
                    Lưu ý: File đính kèm không vượt quá 20Mb
                  </p>
                </div>
              </div>
              <button
                class="MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1q261s4"
                tabindex="0"
                type="button"
                id="mui-10"
                onClick={handleSubmit}
              >
                Đăng ký<span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
