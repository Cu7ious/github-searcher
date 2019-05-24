import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSearchQuery } from "reducers/searchControls";

import './SearchBox.scss';

const SearchBox = props => {
  function handleQuery (e) {
    if (e.target.value) {
      props.setSearchQuery(e.target.value);
      return;
    }

    props.setSearchQuery(null);
  }

  return (
    <div className='search-input'>
      <input
        autoFocus
        type='text'
        onChange={handleQuery}
        placeholder="Type the repo name..."
      />
    </div>
  )
};

SearchBox.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,  
}

export default connect(
  null,
  { setSearchQuery }
)(SearchBox);
