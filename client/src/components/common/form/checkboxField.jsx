import React from "react";
import PropTypes, { arrayOf } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";

const CheckBoxField = ({ name, value, onChange, error, children }) => {
    const handleChange = () => onChange({ name: name, value: !value });

    return (
        <div className="form_checkbox">
            <span className="form_checkbox_icon">
                <FontAwesomeIcon
                    icon={value ? faCheckSquare : faSquare}
                    onClick={handleChange}
                />
            </span>
            <span className="form_checkbox_text">{children}</span>
            {error && <div className="form_feedback">{error}</div>}
        </div>
    );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    error: PropTypes.string,
    children: PropTypes.oneOfType([arrayOf(PropTypes.node), PropTypes.node]),
};

export default CheckBoxField;
