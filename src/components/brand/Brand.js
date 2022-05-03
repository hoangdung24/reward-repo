import React from "react";
import "../../style/brand.style.scss";
import Slider from "react-slick";
import { brandData } from "../../data/BrandData/brandData";

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
  console.log("brandData", brandData);
  const renderBrand = () => {
    return (
      brandData.length > 0 &&
      brandData.map((item, index) => {
        return (
          <div key={index} className="item">
            <div className="brand_logo">
              <img src={item.img} />
            </div>
            <div className="brand_title">
              <h4>
                {typeof item.point === "number"
                  ? `Tích điểm: ${item.point}`
                  : "Chưa tích điểm"}
              </h4>
              <p>{item.text}</p>
              <h5>{item.name}</h5>
            </div>
          </div>
        );
      })
    );
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
            <Slider {...settings}>{renderBrand()}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
