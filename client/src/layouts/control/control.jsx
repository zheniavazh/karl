import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import EditGoodPage from "../../components/page/editGoodPage/editGoodPage";
import ControlGoodsListPage from "../../components/page/controlGoodsListPage/controlGoodsListPage";
import { useSelector } from "react-redux";
import { isAdmin } from "../../store/users";

const Control = () => {
    const params = useParams();
    const { add, goodId, edit } = params;
    const isAdminUser = useSelector(isAdmin());

    return isAdminUser ? (
        add || edit ? (
            <EditGoodPage id={goodId} />
        ) : (
            <ControlGoodsListPage />
        )
    ) : null;
};
Control.propTypes = {
    match: PropTypes.object,
};

export default Control;
