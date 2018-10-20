import constants from "./constants";

const defaultState = () => ({
  trains: {},
  isLoaded: false,
  pending: false
});

const search = (state = defaultState(), action) => {
  switch (action.type) {
    case constants.SET_LOADING:
      return { ...state, isLoaded: action.payload };
    case constants.SET_PENDING:
      return { ...state, pending: true };
    case constants.SET_TRAINS:
      return {
        ...state,
        pending: false,
        isLoaded: true,
        trains: action.payload
      };
    default:
      return state;
  }
};

export default search;
