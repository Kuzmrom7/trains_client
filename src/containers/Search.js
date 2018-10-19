import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AsyncSelect from "../components/Select";
import axios from "axios";

const loader = query => axios.get(`http://localhost:8080/stations?q=${query}`);

const serializer = data => {
  const result = data.map(item => ({
    label: item.n,
    value: item.c
  }));
  return [...result];
};

const onChange = value => {
  console.log(value);
};

const Search = () => (
  <div className="col-12 mt-4">
    <div className="row">
      <div className="col-4">
        <AsyncSelect
          onChange={onChange}
          placeholder={"Откуда"}
          loader={loader}
          serializer={serializer}
        />
      </div>
      <div className="col-4">
        <AsyncSelect
          onChange={onChange}
          placeholder={"Куда"}
          loader={loader}
          serializer={serializer}
        />
      </div>
      <div className="col-4 mt-1">
        <TextField
          id="date"
          label="Когда"
          fullWidth={true}
          type="date"
          onChange={onChange}
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-8 offset-2">
        <Button variant="outlined" color="primary" fullWidth={true}>
          Поиск
        </Button>
      </div>
    </div>
  </div>
);

export default Search;
