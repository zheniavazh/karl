import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllPriceInCart,
    getAmountGoodsInCart,
    getGoodsInCart,
    removeGoodInCart,
} from "../../store/cart";

const Cart = () => {
    const goods = useSelector(getGoodsInCart());
    const amount = useSelector(getAmountGoodsInCart());
    const allPrice = useSelector(getAllPriceInCart());

    const dispatch = useDispatch();

    const handleClick = (i) => {
        dispatch(removeGoodInCart(i));
    };

    return (
        <div className="app_wrapper">
            {goods.length > 0 ? (
                <div className="cart_wrapper">
                    <div className="goods_list">
                        {goods.map((good, i) => (
                            <div key={good._id + i} className="main_goods_item">
                                <img
                                    className="main_goods_item_img"
                                    src={good.image}
                                    alt="Karl Lagerfeld"
                                />
                                <div className="main_goods_item_info">
                                    <p className="main_goods_item_info_name">
                                        {good.name}
                                    </p>
                                    <p className="main_goods_item_info_price">
                                        <b>{good.price}</b> &#x20bd;
                                    </p>
                                    <button
                                        className="button"
                                        onClick={() => handleClick(i)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart_info">
                        <p className="cart_text">
                            Количество товаров в корзине - {amount}
                        </p>
                        <p className="cart_text">
                            Общая стоимость - <b>{allPrice}</b> &#x20bd;
                        </p>
                    </div>
                </div>
            ) : (
                <p className="cart_text">В корзине пока ничего нет =(</p>
            )}
        </div>
    );
};

export default Cart;
