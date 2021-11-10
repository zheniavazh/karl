import React from "react";
import "./groupList.css";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="group_list">
      {Object.keys(Array.isArray(items) ? Object.assign({}, items) : items).map(
        (item) => (
          <li
            key={items[item][valueProperty]}
            className={
              "group_list_item" +
              (items[item] === selectedItem ? " group_list_item-active" : "")
            }
            onClick={() => onItemSelect(items[item])}
          >
            {items[item][contentProperty]}
          </li>
        )
      )}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: "id",
  contentProperty: "name",
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupList;
