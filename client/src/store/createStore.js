import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import goodsReducer from "./goods";
import usersReducer from "./users";
import goodsInCartReducer from "./cart";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    goods: goodsReducer,
    users: usersReducer,
    goodsInCart: goodsInCartReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
