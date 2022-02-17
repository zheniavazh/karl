import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getDataStatus, loadGoodsList } from "../../../store/goods";
import { loadCategoriesList } from "../../../store/categories";

const Loader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getDataStatus());
    useEffect(() => {
        dispatch(loadGoodsList());
        dispatch(loadCategoriesList());
    }, [dispatch]);

    if (!dataStatus) return "Загрузка...";

    return children;
};
Loader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Loader;
