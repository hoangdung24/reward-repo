import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/new.style.scss";
import Loading from "../loading/Loading";

export default function New() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showData, setshowData] = useState([]);
  const soLuong = 3;
  // let tong = data.length / 2;
  // console.log("render lai giao dien");
  useEffect(() => {
    layAPI();
    // layAPI2();
  }, []);

  const layAPI = async () => {
    try {
      // const tongAPI = [];
      const API = await axios({
        method: "GET",
        url: "https://member-intro.t-solution.vn/api/v2/pages/?fields=%2A&is_on_homepage=true&limit=3&type=blog.BlogDetailPage",
      });
      const API2 = await axios({
        method: "GET",
        url: "https://member-intro.t-solution.vn/api/v2/pages/?fields=%2A&is_on_homepage=true&limit=3&offset=3&type=blog.BlogDetailPage",
      });
      const tongAPI = API.data.items.concat(API2.data.items);

      setData(tongAPI);
      setshowData(tongAPI.slice(0, 3));
      setLoading(false);
    } catch {
      console.log("lỗi không lấy được API Tin Tức");
    }
  };
  const layAPI2 = async () => {
    try {
      const API2 = await axios({
        method: "GET",
        url: "https://member-intro.t-solution.vn/api/v2/pages/?fields=%2A&is_on_homepage=true&limit=3&offset=3&type=blog.BlogDetailPage",
      });
      console.log("API2", API2.data.items[0]);
      // setData(data.push(API2.data.items[0]));
    } catch {
      console.log("lỗi không lấy được API Tin Tức");
    }
  };

  const renderAPINew = () => {
    return showData?.map((item, index) => {
      return (
        <div key={index} className="new_box">
          <div className="new_box_img">
            <img src={item.thumbnail} />
            <div className="new_box_date">31/03/2022</div>
          </div>

          <div className="new_box_text">
            <h3>{item.title}</h3>
            <p>{item.short_des}</p>
            <h4>XEM THÊM</h4>
          </div>
        </div>
      );
    });
  };
  const chuyenTrang = (ok) => {
    let arr = [];
    for (let i = 1; i <= ok; i++) {
      arr.push(i);
    }
    return arr.map((item, index) => {
      return (
        <button key={index} onClick={() => renderChuyenTrang(item)}>
          {item}
        </button>
      );
    });
  };

  const renderChuyenTrang = (nut) => {
    console.log("nut", nut);

    let end = nut * soLuong;
    console.log("end", end);
    setshowData(data.slice(end - 3, end));
  };

  return (
    <div id="NewBacktoTOp" className="new">
      <div className="new_title">
        <h1>Tin Tức</h1>
        <p>Bài viết liên quan</p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="new_item_content">
          <div className="new_item">{renderAPINew()}</div>
          {/* <img src="./gif/Spin-1.3s-201px.gif" alt="" /> */}
          <div className="new_chuyentrang">{chuyenTrang(2)}</div>
        </div>
      )}
    </div>
  );
}
