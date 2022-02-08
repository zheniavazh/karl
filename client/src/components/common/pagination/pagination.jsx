import React from "react";
import "./pagination.css";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <div className="pagination">
        {pages.map((page) => {
          return (
            <span
              key={page}
              onClick={() => onPageChange(page)}
              className={
                "page_item " + (page === currentPage ? "page_item-active" : "")
              }
            >
              {page}
            </span>
          );
        })}
      </div>
    </>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
