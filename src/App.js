import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
export default App;
