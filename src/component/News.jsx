import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import New from "./New";
function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://member-intro.t-solution.vn/api/v2/pages/?type=blog.BlogDetailPage&fields=*&limit=3&is_on_homepage=true"
        );

        setNews(res.data.items); // get categories product.
      } catch (err) {}
    };
    getProducts();
  }, []);
  return (
    <div id="News" class="MuiBox-root css-1qiqbux" >
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
        <div class="css-qq3vln">
          <div class="css-89gbqn">
            <div class="MuiBox-root css-0"></div>
            <h4 class="MuiTypography-root MuiTypography-h4 css-1gj050f">
              Tin tức
            </h4>
            <div class="MuiBox-root css-0"></div>
            <div class="MuiBox-root css-1t54yf0"></div>
          </div>
          <span class="MuiTypography-root MuiTypography-subtitle css-1hgz8r4">
            Bài viết liên quan
          </span>
        </div>
        <div className="row">
          {news.map((item) => (
            <New item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
