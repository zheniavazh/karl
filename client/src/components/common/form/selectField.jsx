import React from "react";
import "./form.css";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    name,
    value,
    onChange,
    defaultOption,
    options,
    error,
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value });
    };

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                className="form_input"
                name={name}
                onChange={handleChange}
                value={value}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options &&
                    options.map((option) => (
                        <option
                            key={option.value + " " + option.label}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="form_feedback">{error}</div>}
        </>
    );
};
SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.string,
};

export default SelectField;
