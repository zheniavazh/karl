import React, { useState } from "react";
import "./form.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleChange = ({ target }) => {
    onChange({ name: [target.name], value: target.value });
  };

  return (
    <>
      <label htmlFor={name}>
        {label}
        <span className="form_icon-show">
          {type === "password" && (
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={toggleShowPassword}
            />
          )}
        </span>
      </label>
      <input
        className="form_input"
        type={showPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="form_feedback">{error}</div>}
    </>
  );
};
TextField.default = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
