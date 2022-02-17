import React, { useEffect, useState } from "react";
import "./editGoodPage.css";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    getCategories,
    getCategoriesLoadingStatus,
    loadCategoriesList,
} from "../../../store/categories";
import { createGood, getGoodById, updateGood } from "../../../store/goods";

const EditGoodPage = ({ id }) => {
    const history = useHistory();

    const currentGood = useSelector(getGoodById(id));
    const [data, setData] = useState(
        currentGood || {
            name: "",
            image: "",
            category: "",
            price: "",
        }
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoriesList());
    }, [dispatch]);

    const categories = useSelector(getCategories());
    const categoriesLoadingStatus = useSelector(getCategoriesLoadingStatus());
    const categoriesList = categories.map((category) => ({
        label: category.name,
        value: category._id,
    }));
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        id ? dispatch(updateGood(data)) : dispatch(createGood(data));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Название обязательно для заполнения",
            },
            min: {
                message: "Имя должно состоять минимум из трёх символов",
                value: 3,
            },
        },
        image: {
            isRequired: {
                message: "Ссылка на фотографию товара обязательна",
            },
        },
        category: {
            isRequired: {
                message: "Категория обязательна для заполнения",
            },
        },
        price: {
            isRequired: {
                message: "Цена товара обязательна для заполнения",
            },
        },
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="app_wrapper">
            {/* <BackButton /> */}
            {!categoriesLoadingStatus && Object.keys(categories).length > 0 ? (
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="form_heading">Создание товара</h1>
                    <TextField
                        label="Название"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <TextField
                        label="Фотография"
                        name="image"
                        value={data.image}
                        onChange={handleChange}
                        error={errors.image}
                    />
                    <SelectField
                        label="Категория"
                        name="category"
                        defaultOption="Выберите категорию товара..."
                        options={categoriesList}
                        onChange={handleChange}
                        value={data.category}
                        error={errors.category}
                    />
                    <TextField
                        label="Цена"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        error={errors.price}
                    />
                    <div className="form_controls">
                        <button
                            className="button"
                            onClick={() => history.push("/control/goods")}
                        >
                            Назад
                        </button>
                        {id ? (
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="button"
                            >
                                Обновить
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="button"
                            >
                                Создать
                            </button>
                        )}
                    </div>
                </form>
            ) : (
                "Загрузка..."
            )}
        </div>
    );
};

export default EditGoodPage;
