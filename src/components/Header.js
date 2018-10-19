import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h4" color="inherit">
        Trains
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
