import { createSlice, createAction } from "@reduxjs/toolkit";
import history from "../utils/history";
import goodService from "../services/good.service";

const goodsSlice = createSlice({
    name: "goods",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        dataLoaded: false,
    },
    reducers: {
        goodsRequested: (state) => {
            state.isLoading = true;
        },
        goodsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        goodsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        goodCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        goodUpdated: (state, action) => {
            state.entities = [...state.entities, action.payload];
        },
        goodDeleted: (state, action) => {
            state.entities = state.entities.filter(
                (good) => good !== action.payload
            );
        },
    },
});

const { reducer: goodsReducer, actions } = goodsSlice;
const {
    goodsRequested,
    goodsReceived,
    goodsRequestFailed,
    goodCreated,
    goodUpdated,
    goodDeleted,
} = actions;

const goodCreateRequested = createAction("goods/goodCreateRequested");
const createGoodFailed = createAction("goods/createGoodFailed");
const goodUpdateRequested = createAction("goods/goodUpdateRequested");
const updateGoodFailed = createAction("goods/updateGoodFailed");
const goodDeleteRequested = createAction("goods/goodDeleteRequested");
const deleteGoodFailed = createAction("goods/deleteGoodFailed");

export const createGood = (payload) => async (dispatch) => {
    dispatch(goodCreateRequested());
    try {
        const { content } = await goodService.create(payload);
        dispatch(goodCreated(content));
        history.push("/control/goods");
    } catch (error) {
        dispatch(createGoodFailed(error.message));
    }
};

export const updateGood = (payload) => async (dispatch) => {
    dispatch(goodUpdateRequested());
    try {
        const { content } = await goodService.update(payload);
        dispatch(goodUpdated(content));
        dispatch(loadGoodsList());
        history.push("/control/goods");
    } catch (error) {
        dispatch(updateGoodFailed(error.message));
    }
};

export const deleteGood = (payload) => async (dispatch) => {
    dispatch(goodDeleteRequested());
    try {
        const { content } = await goodService.delete(payload);
        dispatch(goodDeleted(content));
        dispatch(loadGoodsList());
        history.push("/control/goods");
    } catch (error) {
        dispatch(deleteGoodFailed(error.message));
    }
};

export const loadGoodsList = () => async (dispatch) => {
    dispatch(goodsRequested());
    try {
        const { content } = await goodService.get();
        dispatch(goodsReceived(content));
    } catch (error) {
        dispatch(goodsRequestFailed(error.message));
    }
};

export const getGoods = () => (state) => state.goods.entities;
export const getGoodsLoadingStatus = () => (state) => state.goods.isLoading;
export const getGoodById = (id) => (state) => {
    if (state.goods.entities) {
        return state.goods.entities.find((good) => good._id === id);
    }
    return null;
};
export const getDataStatus = () => (state) => state.goods.dataLoaded;

export default goodsReducer;
