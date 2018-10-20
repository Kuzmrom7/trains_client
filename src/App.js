import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./containers/Home/index";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
);
export default App;
