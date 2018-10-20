import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import search from "../containers/Search/reducer";

export default combineReducers({
  search: search,
  router: routerReducer
});
