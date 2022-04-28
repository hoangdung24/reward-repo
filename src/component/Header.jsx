import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "../component/Header.css";
import "./test";

function Header() {
  // handel button collapse

  // const ref = useRef(null);
  // let width = window.screen.width;
  // if (width <= 768) {
  //   const span = ref.current; // corresponding DOM node
  //   span.className = "hidden";
  //   console.log(width);
  // }
  
  return (
    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-1cp35ef">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
        <div class="MuiToolbar-root MuiToolbar-regular css-1ev4ah9">
          <div class="hidden dropdown">
            <button class="dropbtn">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="dropdown-content">
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
                tabindex="0"
                type="button"
              >
                <a href="#">Giới thiệu</a>
              </button>
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
                tabindex="0"
                type="button"
              >
                Hướng dẫn tải app
              </button>
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
                tabindex="0"
                type="button"
              >
                Đối tác
              </button>
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
                tabindex="0"
                type="button"
              >
                <a href="#News">Tin tức</a>
              </button>
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
                tabindex="0"
                type="button"
              >
                <a href="#Footer">Liên hệ</a>
              </button>
              <a
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-l0li6c"
                tabindex="0"
                href="#SignUp"
              >
                Đăng ký<span class="MuiTouchRipple-root css-w0pj6f"></span>
              </a>
            </div>
          </div>

          <div class="MuiBox-root css-4g6ai3">
            <div class="MuiBox-root css-15t75f3">
              <span>
                <img
                  style={{ width: "90px" }}
                  sizes="100vw"
                  srcset="http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=640&amp;q=75 640w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=750&amp;q=75 750w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=828&amp;q=75 828w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=1080&amp;q=75 1080w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=1200&amp;q=75 1200w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=1920&amp;q=75 1920w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=2048&amp;q=75 2048w, http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=3840&amp;q=75 3840w"
                  src="http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.49.37-removebg-preview.png?w=3840&amp;q=75"
                  decoding="async"
                  data-nimg="fill"
                ></img>
              </span>
            </div>
          </div>

          <div class="navbar-full MuiBox-root css-19wv5ok">
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
              tabindex="0"
              type="button"
            >
              <a href="#">Giới thiệu</a>
            </button>
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
              tabindex="0"
              type="button"
            >
              Hướng dẫn tải app
            </button>
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
              tabindex="0"
              type="button"
            >
              Đối tác
            </button>
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
              tabindex="0"
              type="button"
            >
              <a href="#News">Tin tức</a>
            </button>
            <button
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-vg3jz3"
              tabindex="0"
              type="button"
            >
              <a href="#Footer">Liên hệ</a>
            </button>
            <a
              class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-l0li6c"
              tabindex="0"
              href="#SignUp"
            >
              Đăng ký<span class="MuiTouchRipple-root css-w0pj6f"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
