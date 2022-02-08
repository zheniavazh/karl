import React, { useState } from "react";
import "./login.css";
import { useHistory, useParams } from "react-router";
import LoginForm from "../../components/ui/forms/loginForm";
import RegisterForm from "../../components/ui/forms/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const history = useHistory();

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
    history.push(`/${formType === "register" ? "log/login" : "log/register"}`);
  };

  return (
    <div className="app_wrapper">
      <div className="form">
        {formType === "register" ? (
          <>
            <h1 className="form_heading">Регистрация</h1>
            <RegisterForm />
            <p>
              Уже есть аккаунт?{" "}
              <span className="form_button" onClick={toggleFormType}>
                Войти
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="form_heading">Вход</h1>
            <LoginForm />
            <p>
              Нет аккаунта?{" "}
              <span className="form_button" onClick={toggleFormType}>
                Зарегистрироваться
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
