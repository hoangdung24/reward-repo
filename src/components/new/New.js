import React from "react";
import "../../style/new.style.scss";

export default function New() {
  return (
    <div className="new">
      <div className="new_title">
        <h1>Tin Tức</h1>
        <p>Bài viết liên quan</p>
      </div>
      <dic className="new_item_content">
        <div className="new_item">
          <div className="new_box">
            <div className="new_box_img">
              <img
                src="https://member-intro.t-solution.vn/media/original_images/bg-slider.jpg?w=3840&q=75"
                alt=""
              />
              <div className="new_box_date">31/03/2022</div>
            </div>

            <div className="new_box_text">
              <h3>Grow up your business successfully</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a justo in felis iaculis volutpat quis euismod lacus.
                Nulla sodales mauris vel dui ullamcorper, ultrices porta est
                placerat. Ut metus nisi, fermentum vel mauris at, congue egestas
                …
              </p>
              <h4>XEM THÊM</h4>
            </div>
          </div>
          <div className="new_box">
            <div className="new_box_img">
              <img
                src="https://member-intro.t-solution.vn/media/original_images/banner-privacy-policy-V2_jNRommR.jpg?w=3840&q=75"
                alt=""
              />
              <div className="new_box_date">31/03/2022</div>
            </div>

            <div className="new_box_text">
              <h3>Meet the business magnet of the year</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a justo in felis iaculis volutpat quis euismod lacus.
                Nulla sodales mauris vel dui ullamcorper, ultrices porta est
                placerat. Ut metus nisi, fermentum vel mauris at, congue egestas
                …
              </p>
              <h4>XEM THÊM</h4>
            </div>
          </div>

          <div className="new_box">
            <div className="new_box_img">
              <img
                src="https://member-intro.t-solution.vn/media/original_images/blog-1.jpg?w=3840&q=75"
                alt=""
              />
              <div className="new_box_date">31/03/2022</div>
            </div>

            <div className="new_box_text">
              <h3>Promote Your Apps With sApp</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a justo in felis iaculis volutpat quis euismod lacus.
                Nulla sodales mauris vel dui ullamcorper, ultrices porta est
                placerat. Ut metus nisi, fermentum vel mauris at, congue egestas
                …
              </p>
              <h4>XEM THÊM</h4>
            </div>
          </div>
        </div>
      </dic>
    </div>
  );
}
