import React from "react";
import "../../style/brand.style.scss";
import Slider from "react-slick";

export default function Brand() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="doitacBacktoTOp" className="brand">
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
              <div className="item">
                <div className="brand_logo">
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/131bc383068153.5d30a552e1fa0.jpg"
                    alt=""
                  />
                </div>
                <div className="brand_title">
                  <h4>Tích điểm: 10</h4>
                  <p>Kem Mỹ được yêu thích từ 1948</p>
                  <h5>Swensens</h5>
                </div>
              </div>
              <div className="item">
                <div className="brand_logo">
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/download_3.png"
                    alt=""
                  />
                </div>
                <div className="brand_title">
                  <h4>Chưa tích điểm</h4>
                  <p>Kem Mỹ được yêu thích từ 1948</p>
                  <h5>Swensens</h5>
                </div>
              </div>
              <div className="item">
                <div className="brand_logo">
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/131bc383068153.5d30a552e1fa0.jpg"
                    alt=""
                  />
                </div>
                <div className="brand_title">
                  <h4>Tích điểm: 20</h4>
                  <p>Kem Mỹ được yêu thích từ 1948</p>
                  <h5>Swensens</h5>
                </div>
              </div>
              <div className="item">
                <div className="brand_logo">
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/TPC_logo-02.jpg"
                    alt=""
                  />
                </div>
                <div className="brand_title">
                  <h4>Tích điểm: 15</h4>
                  <p>Kem Mỹ được yêu thích từ 1948</p>
                  <h5>Swensens</h5>
                </div>
              </div>
              <div className="item">
                <div className="brand_logo">
                  <img
                    src="https://member-intro.t-solution.vn/media/original_images/seo-title.jpg"
                    alt=""
                  />
                </div>
                <div className="brand_title">
                  <h4>Tích điểm: 10</h4>
                  <p>Kem Mỹ được yêu thích từ 1948</p>
                  <h5>Swensens</h5>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
