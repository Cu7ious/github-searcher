/**
 * This module contains HTTP services
 * Related to the GitHub API search
 * and to the repository preview
 */
import { loadingRepos } from "reducers/repositoriesLoad"
import marked from "marked";

const userAgent = process.env.REACT_APP_USER_AGENT

/**
 * remoteSearchRepos - initiate the search request and returns
 * promise with it's result
 * 
 * @term: [String] - a search term containing the name of the repository
 * @language: [String] - a programming language to scope the search
 * @dispatch: [String] - redux function that dispatches the `REPOS_ARE_LOADING` action
 * 
 * Returns: a promise containing the result of the fetch of false [Promise || false]
 */
export function remoteSearchRepos (term, language, dispatch) {
  if (term) {
    const baseUrl = "https://api.github.com"
    const searchEndpoint = "/search/repositories";
    const url = new URL(baseUrl + searchEndpoint);

    let query = `q=${term}+in:names`;

    if (language) {
      query += `+language:${language}`;
    }

    query = new URLSearchParams(query);
    query.append("order", "desc");
    url.search = query;

    dispatch(loadingRepos());

    return fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": userAgent
        }
      })
      .then(res => res.json())
      .then(data => {
        return data.items;
      });
  }

  return false;
}

/**
 * handleOpenModal - requests the content of a `README.MD` file of a given repo
 * 
 * @pathToRepository: [String], format: username/name_of_the_repo
 * @handleStateChange: [Function] - a callback that changes the state of the App
 *                     component, related to the modal
 */
export function handleOpenModal(pathToRepository, link, handleStateChange) {
  const baseUrl = "https://raw.githubusercontent.com/";
  const pathToREADME = "master/README.md";

  const url = `${baseUrl}${pathToRepository}/${pathToREADME}`;
  fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": userAgent
      }
    })
    .then(res => {
      if (res.status === 200) {
        return res.text();
      }

      return [
        "<h2 class='no-prevew'>",
        "Preview is not avaliable for this repository",
        "</h2>"
      ].join("");
    })
    .then(data => {
      handleStateChange(pathToRepository, link, marked(data));
    })
    .catch(err => {
      console.error(err);
    });
}