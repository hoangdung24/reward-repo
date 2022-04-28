import React from "react";
import "../component/New.css";
function New({ item }) {
  // console.log(item);÷
  return (
    <div class="col-lg col-md-6 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb">
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-md-4 css-1y73h4u">
        <div class="MuiBox-root css-89t1vs">
          <div class="MuiBox-root css-us2o3w">
            <span>
              <img
                src={item.thumbnail}
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcset="http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=640&amp;q=75 640w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=750&amp;q=75 750w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=828&amp;q=75 828w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=1080&amp;q=75 1080w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=1200&amp;q=75 1200w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=1920&amp;q=75 1920w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=2048&amp;q=75 2048w, http://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=3840&amp;q=75 3840w"
              />
            </span>
          </div>
          <div class="MuiBox-root css-1ikkxn1">
            <div class="css-qkdobv">
              <div class="css-j7qwjs">
                <div class="MuiBox-root css-10qqcdv">
                  <span class="MuiTypography-root MuiTypography-category css-1cev0y9">
                    31/03/2022
                  </span>
                </div>
                <h5 class="MuiTypography-root MuiTypography-h5 css-3yngx9">
                  {item.title}
                </h5>
              </div>
              <div class="MuiBox-root css-0">
                <p class="MuiTypography-root MuiTypography-body2 css-19i487s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum a justo in felis iaculis volutpat quis euismod
                  lacus. Nulla sodales mauris vel dui ullamcorper, ultrices
                  porta est placerat. Ut metus nisi, fermentum vel mauris at,
                  congue egestas …
                </p>
              </div>
              <button
                class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-d24gok"
                tabindex="0"
                type="button"
              >
                Xem Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
