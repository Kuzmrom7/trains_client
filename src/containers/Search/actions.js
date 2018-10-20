import constants from "./constants";
import axios from "axios";

const SearchActions = {
  setIsLoaded: bool => ({
    type: constants.SET_LOADING,
    payload: bool
  }),
  setPending: bool => ({
    type: constants.SET_PENDING,
    payload: bool
  }),
  setTrains: items => ({
    type: constants.SET_TRAINS,
    payload: items
  }),

  getTrains: (from, to, date) => dispatch => {
    dispatch(SearchActions.setIsLoaded(false));
    dispatch(SearchActions.setPending(true));
    axios
      .get(`http://localhost:8080/trains/dev?from=${from}&to=${to}&date=${date}`)
      .then(response => {
        dispatch(SearchActions.setTrains(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default SearchActions;
