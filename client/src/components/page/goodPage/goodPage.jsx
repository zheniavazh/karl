import React, { useState, useEffect } from "react";
import "./goodPage.css";
import PropTypes from "prop-types";
import API from "../../../api";

const GoodPage = ({ id }) => {
  const [good, setGood] = useState();
  useEffect(() => {
    API.goods.getById(id).then((data) => setGood(data));
  });

  const handleClick = () => {
    console.log(good);
  };

  if (good) {
    return (
      <div className="app_wrapper">
        <div className="good">
          <img
            className="good_img"
            src={`./${good.id}.png`}
            alt="Karl Lagerfeld"
          />
          <div className="good_info">
            <p className="good_info_name">{good.name}</p>
            <p className="good_info_price">
              <b>{good.price}</b> &#x20bd;
            </p>
            <div className="good_button" onClick={handleClick}>
              Купить
            </div>
          </div>
        </div>
      </div>
    );
  } else return <h1>Загрузка...</h1>;
};
GoodPage.propTypes = {
  id: PropTypes.string,
};

export default GoodPage;
