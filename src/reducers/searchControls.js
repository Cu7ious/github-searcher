/**
 * This module contains the main reducer and exports it.
 * Along with reduser, it exports all action creators.
 * 
 * Each reducer should follow the "Ducks Principles":
 *    MUST export default a function called reducer()
 *    MUST export its action creators as functions
 *    MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
 *    MAY export its action types as UPPER_SNAKE_CASE
 *
 * @link: https://github.com/erikras/ducks-modular-redux
 */
import state from "initialState";

/**
 * Actions Constants
 */
const SET_SEARCH_QUERY = "github-searcher/searchControls/SET_SEARCH_QUERY";
const SET_SEARCH_LANGUAGE = "github-searcher/searchControls/SET_SEARCH_LANGUAGE";

/**
 * setSearchQuery - action creator
 *
 * @query: [String] - a search query to set
 * @dispatches: SET_SEARCH_QUERY
 */
export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

/**
 * setSearchLanguage - action creator
 *
 * @lang: [String] - a programming language to set
 * @dispatches: SET_SEARCH_LANGUAGE
 */
export const setSearchLanguage = lang => ({
  type: SET_SEARCH_LANGUAGE,
  payload: lang
});

/**
 * Reducer - creates new state based on the value of the action
 * 
 * @state: [Object] - the current state of the app
 * @action: [Object] - the action being dispatched
 * 
 * Returns: [Object] - new state of the app
 */
const { query, language } = state;
const initialState = { query, language };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case SET_SEARCH_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

export default reducer;