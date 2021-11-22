import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="app_wrapper">
        <ul className="nav-list">
          <div className="nav-list-left">
            <img className="nav-logo" src="./logo.png" alt="Karl Lagerfeld" />
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Корзина
              </Link>
            </li>
          </div>
          <div className="nav-list-right">
            <li className="nav-item">
              <Link className="nav-link" to="/log/login">
                Вход/Регистрация
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
