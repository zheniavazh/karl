import React from "react";
import { useHistory } from "react-router";
import "./goodsList.css";

const GoodsList = ({ goods }) => {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`goods/${id}`);
    };

    return goods.map((good) => (
        <div
            key={good._id}
            className="main_goods_item"
            onClick={() => handleClick(good._id)}
        >
            <img
                className="main_goods_item_img"
                src={good.image}
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
