import React, { Component } from "react";
import { bindSidebarToReactApp } from "utils";

import SearchControls from "./SearchControls";
import ReposList from "./ReposList";

import "./App.scss";

class App extends Component {
  componentWillMount() {
    bindSidebarToReactApp();
  }

  render() {
    return <div>
        <div className="panel">
          <h3>Search for a GitHub repository</h3>
        </div>
        <div className="app">
          <section className="dynamic-block">
            <SearchControls />
            <ReposList />
          </section>
        </div>
      </div>;
  }
}

export default App;
