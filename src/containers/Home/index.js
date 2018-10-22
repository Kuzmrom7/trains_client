import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BackgroundImage } from "../../components/Background";
import ViewContainer from "../../components/ViewContainer";

import Search from "../Search/index";
import ResultList from "../ResultList";

const Index = () => (
  <BackgroundImage img={"./img/2-70.jpg"}>
    <ViewContainer>
      <Paper elevation={3} className="p-5">
        <Typography variant="h4" component="h5" className="text-center">
          Trains. Поиск билетов на поезд{" "}
          <span role="img" aria-label="sheep">
            &#x1F686;
          </span>
        </Typography>
        <Search />
      </Paper>
      <ResultList />
    </ViewContainer>
  </BackgroundImage>
);

export default Index;
