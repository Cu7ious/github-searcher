import React from "react";
import PropTypes from "prop-types";
import { handleOpenModal } from "services/reposServices";
import { prefixDay, createMonthsList } from "utils";
import OctoCat from "./github-svg";
import "./RepositoryCard.scss";

const RepositoryCard = props => {
  function handleClick(e, name, link, saveModalContent) {
    e.preventDefault();
    handleOpenModal(name, link, saveModalContent);
  }

  const { name, date, lang, description, link } = props;

  let theDate = new Date(date);
  const months = createMonthsList();

  const mo = months[theDate.getMonth()];
  const day = prefixDay(theDate.getDate());
  const year = theDate.getFullYear();

  return (
    <li className="repository-card">
      <div>
        <h5>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={event => handleClick(event, name, link, props.onClick)}
          >
            {name}
          </a>
        </h5>
        <p>{description}</p>
      </div>
      <ul>
        <li>{`${mo} ${day}, ${year}`}</li>
        <li>
          <OctoCat />
          {lang}
        </li>
      </ul>
    </li>
  );
};

RepositoryCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  lang: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default RepositoryCard;
