import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import SearchActions from "../actions";
import Search from "../components/Search";
import moment from "moment";

export default compose(
  connect(
    null,
    SearchActions
  ),
  withState("from", "setFrom", ""),
  withState("to", "setTo", ""),
  withState("date", "setDate", ""),

  withHandlers({
    serializer: () => data => {
      const result = data.map(item => ({
        label: item.n,
        value: item.c
      }));
      return [...result];
    },
    onChange: ({ setFrom, setTo, setDate }) => (value, type) => {
      if (type === "from") {
        setFrom(value.value);
      }
      if (type === "to") {
        setTo(value.value);
      }
      if (type === "date") {
        const date = value.target.value;

        setDate(moment(date).format("DD.MM.YYYY"));
      }
    },
    onSubmit: ({ getTrains, from, to, date }) => () => {
      if (from !== "" && to !== "" && date !== "") {
        getTrains(from, to, date);
      }
    }
  }),

  lifecycle({
    componentDidMount() {},
    componentWillUnmount() {}
  })
)(Search);
