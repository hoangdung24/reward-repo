import React from "react";
import "../../style/user.style.scss";

export default function User() {
  return (
    <div className="user">
      <div className="user_background">
        <img
          src="https://member-intro.t-solution.vn/media/original_images/bg.png?w=3840&q=75"
          alt=""
        />
      </div>
      <div className="user_text">
        <div className="user_text__title">
          <h4>Lợi ích khách hàng</h4>
          <p>Lợi ích của khách hàng khi tham gia Đổi điểm</p>
        </div>
        <div className="user_text__list">
          <div className="user_text__list__content">
            <div className="list__box">
              <p className="icon">
                <img
                  src="https://member-intro.t-solution.vn/media/original_images/pngtree-gift-box-vector-illustration-with-filled-line-design-isolated-on-w.png?w=3840&q=75"
                  alt=""
                />
              </p>
              <h4>Lợi ích 1</h4>
              <p>
                Nội dung lợi ích lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum 1 lorem ipsum lorem ipsum
                lorem ipsum l
              </p>
            </div>
            <div className="list__box">
              <p className="icon">
                <img
                  src="https://member-intro.t-solution.vn/media/original_images/pngtree-gift-box-vector-illustration-with-filled-line-design-isolated-on-w.png?w=3840&q=75"
                  alt=""
                />
              </p>
              <h4>Lợi ích 2</h4>
              <p>
                Nội dung lợi ích lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
            <div className="list__box">
              <p className="icon">
                <img
                  src="https://member-intro.t-solution.vn/media/original_images/benefits-1891898-1600231.webp?w=3840&q=75"
                  alt=""
                />
              </p>
              <h4>Lợi ích 3</h4>
              <p>
                Nội dung lợi ích lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
            <div className="list__box">
              <p className="icon">
                <img
                  src="https://member-intro.t-solution.vn/media/original_images/kisspng-computer-icons-employee-benefits-business-patient-estrategia-5b24a.png?w=3840&q=75"
                  alt=""
                />
              </p>
              <h4>Lợi ích 4</h4>
              <p>
                Nội dung lợi ích lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
            <div className="list__box">
              <p className="icon">
                <img
                  src="https://member-intro.t-solution.vn/media/original_images/icon-am-thuc.png?w=3840&q=75"
                  alt=""
                />
              </p>
              <h4>Lợi ích 5</h4>
              <p>
                Nội dung lợi ích lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
