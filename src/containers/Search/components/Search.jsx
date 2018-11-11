import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AsyncSelect from "../../../components/Select";
import axios from "axios";

const loader = query =>
  axios.get(`https://kuzmrom7-trains.herokuapp.com/stations?q=${query}`);

const serializer = data => {
  const result = data.map(item => ({
    label: item.n,
    value: item.c
  }));
  return [...result];
};

const Search = ({ onChange, onSubmit }) => (
  <div className="col-12 mt-4">
    <div className="row">
      <div className="col-4">
        <AsyncSelect
          id="From"
          onChange={value => onChange(value, "from")}
          placeholder={"Откуда"}
          loader={loader}
          serializer={serializer}
        />
      </div>
      <div className="col-4">
        <AsyncSelect
          id="To"
          onChange={value => onChange(value, "to")}
          placeholder={"Куда"}
          loader={loader}
          serializer={serializer}
        />
      </div>
      <div className="col-4 mt-1">
        <TextField
          id="Date"
          label="Когда"
          fullWidth={true}
          type="date"
          onChange={value => onChange(value, "date")}
          placeholder="2018-10-24"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-8 offset-2">
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          onClick={onSubmit}
        >
          Поиск
        </Button>
      </div>
    </div>
  </div>
);

export default Search;
