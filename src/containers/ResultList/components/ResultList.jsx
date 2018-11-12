import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import Button from "@material-ui/core/Button/Button";

const Item = ({ station0, station1, number, time0, time1, timeInWay }) => (
  <Card className="mt-1 ">
    <div className="col-12">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Поезд {station0} - {station1}
        </Typography>
        <Typography variant="h5" component="h2">
          <div className="col-12">
            <div className="row">
              <div className="col-7">
                <span role="img" aria-label={""} aria-hidden={"true"}>
                  &#x1F685; №{number} {time0} ----------> {time1}{" "}
                </span>
              </div>
              <div className="col-2">
                <span className="text-right">
                  {/*&#x231A;*/} {timeInWay}
                </span>{" "}
              </div>
              <div className="col-3">
                <Button variant="outlined">Выбрать</Button>
              </div>
            </div>
          </div>
        </Typography>
        Количество билетов: 123
      </CardContent>
    </div>
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

const ResultList = ({
  search: {
    isLoaded,
    pending,
    trains: { tp }
  }
}) => {
  if (pending) {
    return <LinearProgress variant="query" />;
  } else if (isLoaded) {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-3 mt-2">
            <Filters />
          </div>
          <div className="mt-2 col-9">
            {tp[0].list.map(item => {
              return (
                <div>
                  <Item {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ResultList;
