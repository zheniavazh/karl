import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteGood } from "../../../store/goods";
import "./goodsList.css";

const ControlGoodsList = ({ goods }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        history.push(`goods/edit/${id}`);
    };
    const removeGood = (id) => {
        dispatch(deleteGood({ _id: id }));
    };

    return goods.map((good) => (
        <div key={good._id} className="main_goods_item">
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

                <button
                    className="button"
                    onClick={() => handleClick(good._id)}
                >
                    Редактировать
                </button>
                <button className="button" onClick={() => removeGood(good._id)}>
                    Удалить
                </button>
            </div>
        </div>
    ));
};

export default ControlGoodsList;
