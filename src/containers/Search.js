import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Search = () => (
  <div className="col-12 mt-2">
    <div className="row">
      <div className="col-3">
        <TextField
          id="outlined-name"
          label="Откуда"
          //className={classes.textField}
          value={""}
          //onChange={e => console.log(e.target.value)}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className="col-3">
        <TextField
          id="outlined-name"
          label="Куда"
          //className={classes.textField}
          value={""}
          //onChange={e => console.log(e.target.value)}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className="col-3 mt-3">
        <TextField
          id="date"
          label="Дата"
          type="date"
          variant="outlined"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <div className="col-3 mt-4">
        <Button variant="outlined" color="primary" fullWidth={true}>
          Поиск
        </Button>
      </div>
    </div>
  </div>
);

export default Search;
