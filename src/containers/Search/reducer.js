import constants from "./constants";

const defaultState = () => ({
  trains: {},
  isLoaded: false,
  isReady: false
});

const search = (state = defaultState(), action) => {
  switch (action.type) {
    case constants.SET_LOADING:
      return { ...state, isLoaded: action.payload };
    case constants.SET_TRAINS:
      return {
        ...state,
        isReady: true,
        isLoaded: true,
        trains: action.payload
      };
    default:
      return state;
  }
};

export default search;
