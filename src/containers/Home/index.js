import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BackgroundImage } from "../../components/Background";
import ViewContainer from "../../components/ViewContainer";


import Search from "../Search/index";
/*import Header from "../../components/Header";*/

const Index = () => (
  <BackgroundImage img={"./img/1.jpeg"}>
   {/* <Header />*/}
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
    </ViewContainer>
  </BackgroundImage>
);

export default Index;
