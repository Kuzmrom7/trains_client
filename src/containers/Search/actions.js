import constants from "./constants";
import axios from "axios";

const SearchActions = {
  setIsLoaded: bool => ({
    type: constants.SET_LOADING,
    payload: bool
  }),
  setTrains: items => ({
    type: constants.SET_TRAINS,
    payload: items
  }),

  getTrains: (from, to, date) => dispatch => {
    dispatch(SearchActions.setIsLoaded(false));
    axios
      .get(`http://localhost:8080/trains?from=${from}&to=${to}&date=${date}`)
      .then(response => {
        dispatch(SearchActions.setTrains(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default SearchActions;
