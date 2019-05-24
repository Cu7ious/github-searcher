/**
 * This module contains the main reducer and exports it.
 * Along with reduser, it exports all action creators.
 * 
 * Each reducer should follow the "Ducks Principles":
 *    MUST export default a function called reducer()
 *    MUST export its action creators as functions (doesn't apply to main)
 *    MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
 *    MAY export its action types as UPPER_SNAKE_CASE
 *
 * @link: https://github.com/erikras/ducks-modular-redux
 */
import { combineReducers } from "redux";
import searchControlsReducer from "./searchControls";
import repositoriesLoadReducer from "./repositoriesLoad";
import repositoriesViewReducer from "./repositoriesView";

const reducer = combineReducers({
  search: searchControlsReducer,
  repositories: repositoriesLoadReducer,
  sort: repositoriesViewReducer
});

export default reducer;