import React, { useState, useEffect } from "react";
import "./forms.css";
import { validator } from "../../../utils/validator";
import CheckboxField from "../../common/form/checkboxField";
import TextField from "../../common/form/textField";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/users";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        license: false,
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: { message: "Электронная почта введена не корректно" },
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число",
            },
            min: {
                message: "Пароль должен состоять минимум из восьми символов",
                value: 8,
            },
        },
        license: {
            isRequired: {
                message:
                    "Вы не можете использовать наш магазин без подтверждения пользовательского соглашения",
            },
        },
    };

    useEffect(() => {
        validate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckboxField
                name="license"
                value={data.license}
                onChange={handleChange}
                error={errors.license}
            >
                Подтвердить Пользовательское соглашение
            </CheckboxField>
            <button className="form_submit" disabled={!isValid}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegisterForm;
