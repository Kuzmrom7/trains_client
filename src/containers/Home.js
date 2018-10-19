import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BackgroundImage from "../components/Background";
import ViewContainer from "../components/ViewContainer";

/*import Header from "../components/Header";*/
import Search from "./Search";

const Home = () => (
  <BackgroundImage img={"./img/1.jpeg"}>
    {/*<Header />*/}
    <ViewContainer>
      <Paper elevation={1} className="p-3">
        <Typography variant="h4" component="h5" className="text-center">
          Поиск билетов на поезд
        </Typography>
        <Search />
      </Paper>
    </ViewContainer>
  </BackgroundImage>
);

export default Home;
