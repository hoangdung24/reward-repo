import React from "react";
import "../../style/brand.style.scss";
import Slider from "react-slick";

export default function Brand() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="brand">
      <div className="brand_background">
        <img
          src="https://member-intro.t-solution.vn/media/original_images/01_qSR6fdH.png"
          alt=""
        />
      </div>
      <div className="brand_content">
        <h2>Thương hiệu liên kết</h2>
        <div className="brand_slick">
          <div className="brand_slick2">
            <Slider {...settings}>
              <div className="slick_box">
                <div>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/16341294_LOGO-DAIRY-QUEEN-500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="slick-content">
                  <h4>Tích điểm: 10</h4>
                  <p>Kem mỹ được yêu thích từ</p>
                  <h3>Swensen</h3>
                </div>
              </div>
              <div className="slick_box">
                <div>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/16341294_LOGO-DAIRY-QUEEN-500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="slick-content">
                  <h4>Tích điểm: 10</h4>
                  <p>Kem mỹ được yêu thích từ</p>
                  <h3>Swensen</h3>
                </div>
              </div>
              <div className="slick_box">
                <div>
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/16341294_LOGO-DAIRY-QUEEN-500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="slick-content">
                  <h4>Tích điểm: 10</h4>
                  <p>Kem mỹ được yêu thích từ</p>
                  <h3>Swensen</h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
