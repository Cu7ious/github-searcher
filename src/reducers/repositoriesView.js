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
const CHANGE_SORT_ORDER = "github-searcher/repositoriesView/CHANGE_SORT_ORDER";

/**
 * changeSortOrder - action creator
 * @order: [String] - an order by which data will be displayed
 * @dispatches: CHANGE_SORT_ORDER
 */
export const changeSortOrder = order => ({
  type: CHANGE_SORT_ORDER,
  payload: order
});

/**
 * Reducer - creates new state based on the value of the action
 * 
 * @state: [Object] - the current state of the app
 * @action: [Object] - the action being dispatched
 * 
 * Returns: [Object] - new state of the app
 */
const { sortBy } = state;
const initialState = { sortBy };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_ORDER:
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
};

export default reducer;