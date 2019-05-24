import React from "react";
import { connect } from "react-redux";
import { dispatchSearchRepos } from "reducers/repositoriesLoad";

import SearchBox from "./SearchBox"
import LangsDropdown from "./LangsDropdown"

import "./SearchControls.scss";

const SearchControls = props => {
  function submitSearch () {
    props.dispatchSearchRepos(props.query, props.language);
  }

  return (
    <div className="input-group">
      <SearchBox />
      <span className="search-controls-divider"></span>
      <LangsDropdown />
      <span className="search-controls-divider-2"></span>
      <button onClick={submitSearch} type="submit">Search</button>
    </div>
  );
}

export default connect(
  state => ({
    query: state.search.query,
    language: state.search.language
  }),
  { dispatchSearchRepos }
)(SearchControls);
