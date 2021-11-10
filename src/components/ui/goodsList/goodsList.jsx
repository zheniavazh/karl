import React from "react";
import "./goodsList.css";

const GoodsList = ({ goods }) => {
  return goods.map((good) => (
    <div className="main_goods_item">
      <img
        className="main_goods_item_img"
        src={`./goods/${good.id}.png`}
        alt="Karl Lagerfeld"
      />
      <div className="main_goods_item_info">
        <p className="main_goods_item_info_name">{good.name}</p>
        <p className="main_goods_item_info_price">
          <b>{good.price}</b> &#x20bd;
        </p>
      </div>
    </div>
  ));
};

export default GoodsList;
