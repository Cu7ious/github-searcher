import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { setSearchLanguage } from "reducers/searchControls";

import selectStyles from "./selectStyles";
import * as langs from "./langs.json";
import "./LangsDropdown.scss";

const LangsDropdown = props => {  
  function handleOnChange (selectData) {
    if (selectData) {
      props.setSearchLanguage(selectData.value);
      return;
    }
    
    props.setSearchLanguage(null);
  }
  
  const options = langs.default;

  return (
    <div className="search-select">
      <Select
        isClearable
        isSearchable
        options={options}
        styles={selectStyles}
        placeholder="Select language..."
        onChange={handleOnChange}
      />
    </div>
  );
};

LangsDropdown.propTypes = {
  setSearchLanguage: PropTypes.func.isRequired
};

export default connect(
  null,
  { setSearchLanguage }
)(LangsDropdown);
