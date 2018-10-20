import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

export function configureStore() {
  const devTools =
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f;

  const middleware = applyMiddleware(ReduxThunk);

  const enhancer = compose(
    middleware,
    devTools
  );

  return createStore(reducers, enhancer);
}

export default configureStore();
