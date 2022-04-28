import React, { useState } from "react";
import "../component/Footer.css";
import validator from "validator";
function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  let checkInfo = true;

    // check email và số điện thoại.
    if (validator.isEmail(email)) {
      alert("Đã gửi email");
    } else {
      alert("Email không hợp lệ!\nVui lòng kiểm tra lại");
    }
  };
  return (
    <div id="Footer" class="MuiBox-root css-zwdz1s">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
        <div class="row MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
          <div class="col-md-12 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiBox-root css-1c3km56">
              <img
                src="http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.38.45-removebg-preview_uLptFJG.png"
                height="auto"
                width="150px"
                alt="logo footer"
              />
            </div>
          </div>
          <div class="col-md-12 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiBox-root css-4uyc5o">
              <div class="row MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
                <div class="col-md-3 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3 css-4v9257">
                  <div class="css-1qijqes">
                    <h6 class="MuiTypography-root MuiTypography-h6 css-4z4rf0">
                      Về chúng tôi
                    </h6>
                    <div class="css-1f47o3f">
                      <div class="MuiBox-root css-4g6ai3">
                        <p class="MuiTypography-root MuiTypography-body1 css-688ser">
                          Điều khoản và điều kiện
                        </p>
                      </div>
                      <div class="MuiBox-root css-4g6ai3">
                        <p class="MuiTypography-root MuiTypography-body1 css-688ser">
                          Chính sách sử dụng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3 css-4v9257">
                  <div class="css-1qijqes">
                    <h6 class="MuiTypography-root MuiTypography-h6 css-4z4rf0">
                      Cơ hội chung vui
                    </h6>
                    <div class="css-1f47o3f">
                      <div class="MuiBox-root css-4g6ai3">
                        <p class="MuiTypography-root MuiTypography-body1 css-688ser">
                          Trở thành đối tác
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3 css-4v9257">
                  <div class="css-1qijqes">
                    <h6 class="MuiTypography-root MuiTypography-h6 css-4z4rf0">
                      Liên hệ hỗ trợ
                    </h6>
                    <div class="css-1f47o3f">
                      <div class="css-1t62lt9">
                        <a
                          class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1kmyh3h"
                          href="https://www.facebook.com"
                        >
                          <div class="MuiBox-root css-1adt33g">
                            <span>
                              <img
                                alt="icon"
                                src="http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=3840&amp;q=75"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcset="http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=640&amp;q=75 640w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=750&amp;q=75 750w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=828&amp;q=75 828w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=1080&amp;q=75 1080w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=1200&amp;q=75 1200w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=1920&amp;q=75 1920w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=2048&amp;q=75 2048w, http://member-intro.t-solution.vn/media/original_images/facebook-770688_640.png?w=3840&amp;q=75 3840w"
                              />
                            </span>
                          </div>
                        </a>
                        <a
                          class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1kmyh3h"
                          href="https://www.instagram.com"
                        >
                          <div class="MuiBox-root css-1adt33g">
                            <span>
                              <img
                                alt="icon"
                                src="http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=3840&amp;q=75"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcset="http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=640&amp;q=75 640w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=750&amp;q=75 750w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=828&amp;q=75 828w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=1080&amp;q=75 1080w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=1200&amp;q=75 1200w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=1920&amp;q=75 1920w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=2048&amp;q=75 2048w, http://member-intro.t-solution.vn/media/original_images/Instagram_icon.png.webp?w=3840&amp;q=75 3840w"
                              />
                            </span>
                          </div>
                        </a>
                        <a
                          class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1kmyh3h"
                          href="https://www.twitter.com"
                        >
                          <div class="MuiBox-root css-1adt33g">
                            <span>
                              <img
                                alt="icon"
                                src="http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=3840&amp;q=75"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcset="http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=640&amp;q=75 640w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=750&amp;q=75 750w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=828&amp;q=75 828w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=1080&amp;q=75 1080w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=1200&amp;q=75 1200w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=1920&amp;q=75 1920w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=2048&amp;q=75 2048w, http://member-intro.t-solution.vn/media/original_images/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png?w=3840&amp;q=75 3840w"
                              />
                            </span>
                          </div>
                        </a>
                      </div>
                      <div class="css-6ujyw6">
                        <p class="MuiTypography-root MuiTypography-body1 css-updvus">
                          doidiem@gmail.com
                        </p>
                        <p class="MuiTypography-root MuiTypography-body1 css-updvus">
                          1900 0019
                        </p>
                        <p class="MuiTypography-root MuiTypography-body1 css-updvus">
                          8 AM - 8.30 PM hằng ngày
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3 css-4v9257">
                  <div class="css-fizp0p">
                    <div class="MuiBox-root css-1oic231">
                      <span>
                        <img
                          alt="ICON APPLE"
                          src="/apple.svg"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          srcset="/apple.svg 640w, /apple.svg 750w, /apple.svg 828w, /apple.svg 1080w, /apple.svg 1200w, /apple.svg 1920w, /apple.svg 2048w, /apple.svg 3840w"
                        />
                      </span>
                    </div>
                    <div class="MuiBox-root css-1oic231">
                      <span>
                        <img
                          alt="ICON GOOGLE"
                          src="/google.svg"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          srcset="/google.svg 640w, /google.svg 750w, /google.svg 828w, /google.svg 1080w, /google.svg 1200w, /google.svg 1920w, /google.svg 2048w, /google.svg 3840w"
                        />
                      </span>
                    </div>
                    <div class="MuiBox-root css-1ixbp0l">
                      <img
                        src="data:image/png;base64,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"
                        width="120px"
                        height="120px"
                        alt="QRCode"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
            <div class="MuiBox-root css-16ufcvs">
              <div class="row MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
                <div class="col-lg-6 col-md-12 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-iol86l">
                  <div class="MuiBox-root css-130tl0o">
                    <p data-block-key="c7pox">
                      <b>Công ty Đổi điểm</b>
                      <br />
                      Địa chỉ: 10 Đường số 33, Phường An Khánh, Thành phố Thủ
                      Đức, Thành phố Hồ Chí Minh, Việt Nam
                      <br />
                      Mã số doanh nghiệp: 0000000xxxx
                      <br />
                      Đại diện pháp lý: Trần Văn A – Chức vụ: Tổng Giám Đốc
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-iol86l">
                  <div class="row css-1vcx6nw">
                    <h6 class=" MuiTypography-root MuiTypography-h6 css-isuwmo">
                      Đăng ký nhận thông tin
                    </h6>
                    <div class="row css-169bv6i">
                      <div class="col-6 MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root Input Form css-11q7czq">
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-nesan3">
                          <input
                            aria-invalid="false"
                            name="email"
                            placeholder="Your email address"
                            type="text"
                            class="MuiOutlinedInput-input MuiInputBase-input css-4f01wg"
                            value={email}
                            id="mui-1"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-hdw1oc">
                              <span class="notranslate">​</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                      <div class="col-6 MuiBox-root css-gmuwbf">
                        <button
                          class="MuiLoadingButton-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-14agc90"
                          tabindex="0"
                          type="button"
                          id="mui-2"
                          onClick={handleSubmit}
                        >
                          Đăng ký
                          <span class="MuiButton-endIcon MuiButton-iconSizeMedium css-1n4a93h">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="SendIcon"
                            >
                              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
