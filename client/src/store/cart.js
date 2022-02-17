import { createSlice } from "@reduxjs/toolkit";

const goodsInCartSlice = createSlice({
    name: "goodsInCart",
    initialState: {
        entities: [],
    },

    reducers: {
        addGood: (state, action) => {
            state.entities.push(action.payload);
        },
        removeGood: (state, action) => {
            state.entities.splice(action.payload, 1);
        },
    },
});

const { reducer: goodsInCartReducer, actions } = goodsInCartSlice;
const { addGood, removeGood } = actions;

export const addGoodInCart = (payload) => (dispatch) => {
    dispatch(addGood(payload));
};

export const removeGoodInCart = (payload) => (dispatch) => {
    dispatch(removeGood(payload));
};

export const getGoodsInCart = () => (state) => state.goodsInCart.entities;
export const getAmountGoodsInCart = () => (state) =>
    state.goodsInCart.entities !== null ? state.goodsInCart.entities.length : 0;
export const getAllPriceInCart = () => (state) => {
    let allPrice = 0;
    state.goodsInCart.entities.forEach((el) => {
        allPrice = allPrice + el.price;
    });
    return allPrice;
};

export default goodsInCartReducer;
