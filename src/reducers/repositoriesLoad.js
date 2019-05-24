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
import { remoteSearchRepos } from 'services/reposServices';

/**
 * Actions Constants
 */
const REPOS_LOAD_FALED = 'github-searcher/repositories/REPOS_LOAD_FALED';
const REPOS_ARE_LOADING = 'github-searcher/repositories/REPOS_ARE_LOADING';
const REPOS_LOAD_SUCCESS = 'github-searcher/repositories/REPOS_LOAD_SUCCESS';


/**
 * loadingRepos - action creator
 *
 * @dispatches: REPOS_ARE_LOADING
 */
export const loadingRepos = () => ({
  type: REPOS_ARE_LOADING
});

/**
 * loadReposSucceded - action creator
 *
 * @data: [Array] - a list of repositories
 * @dispatches: REPOS_LOAD_SUCCESS
 */
export const loadReposSucceded = data => ({
  type: REPOS_LOAD_SUCCESS,
  payload: data
});

/**
 * loadReposFailed - action creator
 *
 * @err: [Error] - an error object
 * @dispatches: REPOS_LOAD_FALED
 */
export const loadReposFailed = err => ({
  type: REPOS_LOAD_FALED,
  payload: err
});

/**
 * dispatchSearchRepos - resolves the result of the search
 * 
 * @term: [string] - a serach term
 * @language: [string] - a programming language to scope the search with
 * 
 * @triggers: loadReposSucceded || loadReposFailed
 */
export const dispatchSearchRepos = (term, language) => {
  return dispatch => {
    const request = remoteSearchRepos(term, language, dispatch);

    if (request) {
      request
        .then(data => {
          dispatch(loadReposSucceded(data));
        })
        .catch(err => {
          dispatch(loadReposFailed(err));
        });
    }
  };
};

/**
 * Reducer - creates new state based on the value of the action
 * 
 * @state: [Object] - the current state of the app
 * @action: [Object] - the action being dispatched
 * 
 * Returns: [Object] - new state of the app
 */
const { isLoading, isLoadingError, data } = state;
const initialState = { isLoading, isLoadingError, data };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REPOS_ARE_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoadingError: null
      };
    case REPOS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case REPOS_LOAD_FALED:
      return {
        ...state,
        isLoading: false,
        isLoadingError: action.payload.message
      };
    default:
      return state;
  }
};

export default reducer;