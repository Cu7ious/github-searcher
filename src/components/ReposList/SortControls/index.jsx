import React from 'react';
import PropTypes from "prop-types";
import "./SortControls.scss";

const SortControls = props => {
  function renderDownArrow(isActive) {
    const color = isActive ? "#000000" : "#3d425570";
    return <svg width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M0.516,0.548 C0.952,0.102 1.559,0.067 2.092,0.548 L6,4.295 L9.908,0.548 C10.441,0.067 11.049,0.102 11.482,0.548 C11.918,0.993 11.89,1.745 11.482,2.163 C11.076,2.581 6.787,6.665 6.787,6.665 C6.57,6.888 6.285,7 6,7 C5.715,7 5.43,6.888 5.211,6.665 C5.211,6.665 0.924,2.581 0.516,2.163 C0.108,1.745 0.08,0.993 0.516,0.548 Z" id="Shape" fill={color} fillRule="nonzero" />
      </g>
    </svg>;
  }

  let name, date;
  const { sortBy } = props;

  name = sortBy === "name" ? "active-sorter-control" : null;
  date = sortBy === "date" ? "active-sorter-control" : null;
  
  name = (
    <h6
      onClick={event => props.changeSortOrder(event)}
      className={name}>
        Name <span>{renderDownArrow(name)}</span>
    </h6>
  );

  date = (
    <h6
      onClick={event => props.changeSortOrder(event)}
      className={date}>
      Date <span>{renderDownArrow(date)}</span>
    </h6>
  );

  return (
    <div className="sorter">
      {name}
      {date}
    </div>
  );
};

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  changeSortOrder: PropTypes.func.isRequired
};

export default SortControls;
