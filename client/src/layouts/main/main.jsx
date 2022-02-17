import React from "react";
import { useParams } from "react-router";
import GoodPage from "../../components/page/goodPage/goodPage";
import GoodsListPage from "../../components/page/goodsListPage/goodsListPage";

const Main = () => {
    const params = useParams();
    const { goodId } = params;

    return goodId ? <GoodPage id={goodId} /> : <GoodsListPage />;
};

export default Main;
