import React from "react";
import "../component/Banner.css";
function Banner() {
  return (
    <div id="Banner" class="MuiBox-root-banner css-6exlxe">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1t2logc">
        <div class="css-58bxwj">
          <h3 class="MuiTypography-root MuiTypography-h3 css-1r6k3wc">
            Text hiển thị trên trang chủ
          </h3>
          <button
            class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root  css-1802f4o"
            tabindex="0"
            type="button"
          >
            Send App To Your Phone
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
