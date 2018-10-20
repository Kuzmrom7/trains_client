import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Preloader from "../../../components/Preloader/Preloader";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

const Item = () => (
  <Card className="mt-1 ">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Поезд 1
      </Typography>
      <Typography variant="h5" component="h2">
        большой поезд
      </Typography>
      ....а мест нет
    </CardContent>
  </Card>
);
const Filters = () => (
  <Card className="mt-1 ">
    <CardContent>
      <Typography variant="h5" component="h2">
        Фильтры
      </Typography>
      ....фильтруй
    </CardContent>
  </Card>
);

const ResultList = ({ trains: { isLoaded, pending } }) => {
  if (pending) {
    return <LinearProgress variant="query" />;
  } else if (isLoaded) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="mt-2 col-9">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="col-3 mt-2">
            <Filters />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ResultList;
