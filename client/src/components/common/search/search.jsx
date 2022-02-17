import React from "react";
import "./search.css";
import PropTypes from "prop-types";

const Search = ({ value, onChange }) => {
    return (
        <input
            className="search"
            type="text"
            placeholder="Найти..."
            value={value}
            onChange={onChange}
        ></input>
    );
};
Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Search;
