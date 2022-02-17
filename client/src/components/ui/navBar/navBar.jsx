import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn, isAdmin, getCurrentUser } from "../../../store/users";
import logo from "../../../logo.png";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isAdminUser = useSelector(isAdmin());
    const email = useSelector(getCurrentUser());

    return (
        <div className="nav">
            <div className="app_wrapper">
                <ul className="nav-list">
                    <div className="nav-list-left">
                        <img
                            className="nav-logo"
                            src={logo}
                            alt="Karl Lagerfeld"
                        />
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
                        {isAdminUser && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/control/goods">
                                    Управление
                                </Link>
                            </li>
                        )}
                    </div>
                    <div className="nav-list-right">
                        {isLoggedIn ? (
                            <>
                                {email && <p className="nav-text">{email}</p>}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Выйти
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/log/login">
                                    Вход/Регистрация
                                </Link>
                            </li>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
