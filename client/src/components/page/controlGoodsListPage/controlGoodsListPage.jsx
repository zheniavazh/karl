import React from "react";
import "./controlGoodsListPage.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getGoods } from "../../../store/goods";
import ControlGoodsList from "../../ui/goodsList/controlGoodsList";

const ControlGoodsListPage = () => {
    const history = useHistory();

    const goods = useSelector(getGoods());

    const addGood = () => {
        history.push("/control/goods/add");
    };

    return (
        <div className="main">
            <div className="app_wrapper">
                <div className="button" onClick={addGood}>
                    Добавить товар
                </div>
                <div className="control_goods">
                    <ControlGoodsList goods={goods} />
                </div>
            </div>
        </div>
    );
};

export default ControlGoodsListPage;
