import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sortByName, sortByDate } from "utils";
import { changeSortOrder } from "reducers/repositoriesView";

import Modal from "./Modal";
import SortControls from "./SortControls";
import RepositoryCard from "./RepositoryCard";

import "./ReposList.scss";

class ReposList extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      modalContent: { name: "", link: "", content: "" }
    };

    this.setContentRef = this.setContentRef.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeSortOrder = this.handleChangeSortOrder.bind(this);
  }

  handleOpenModal(name, link, content) {
    this.setState({ showModal: true, modalContent: { name, link, content } });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
      modalContent: { name: "", link: "", content: "" }
    });
  }

  setContentRef(node) {
    if (node) {
      const { name, link, content } = this.state.modalContent;
      node.children[0].children[0].innerHTML = `
        <a href="${link}" target="_blank">${name}</a>`;
      node.children[1].innerHTML = content;
    }
  }

  getSortedData(sortBy, data) {
    switch (sortBy) {
      case "name":
        return sortByName(data);
      case "date":
        return sortByDate(data);
      default:
        return data;
    }
  }

  handleChangeSortOrder(e) {
    this.props.changeSortOrder(e.target.innerText.trim().toLowerCase());
  }

  renderItems(repos) {
    return repos.map((el, idx) => (
      <RepositoryCard
        key={idx}
        link={el.html_url}
        lang={el.language}
        name={el.full_name}
        date={el.created_at}
        description={el.description}
        onClick={this.handleOpenModal}
      />
    ));
  }

  renderPreloader() {
    return (
      <div className="preloader">
        <div className="loader-circle" />
        <div className="loader-line-mask">
          <div className="loader-line" />
        </div>
      </div>
    );
  }

  renderError(err) {
    return (
      <div>
        <h2>Error while loading the data:</h2>
        <pre>{err}</pre>
      </div>
    );
  }

  render() {
    if (this.props.isLoadingError) {
      return <section className="repos-list">{
        this.renderError(this.props.isLoadingError)}
      </section>;
    }

    if (this.props.isLoading === true) {
      return <section className="repos-list">
        {this.renderPreloader()}
      </section>;
    }

    if (!this.props.repos) {
      return null;
    }

    return <section className="repos-list">
        <ul className="list-items">
          <SortControls
            sortBy={this.props.sortBy}
            changeSortOrder={this.handleChangeSortOrder}
          />
          {this.renderItems(this.getSortedData(this.props.sortBy, this.props.repos))}
        </ul>

        <Modal
          show={this.state.showModal}
          setContentRef={this.setContentRef}
          onClose={this.handleCloseModal}
        />
      </section>;
  }
}

ReposList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.string,
  repos: PropTypes.array,
  sortBy: PropTypes.string.isRequired
};

export default connect(
  state => ({
    isLoading: state.repositories.isLoading,
    isLoadingError: state.repositories.isLoadingError,
    repos: state.repositories.data,
    sortBy: state.sort.sortBy
  }),
  { changeSortOrder }
)(ReposList);