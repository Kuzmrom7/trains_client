import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import ResultList from "../components/ResultList";

const mapStateToProps = ({ search }) => ({ search: search });
export default compose(
  connect(
    mapStateToProps,
    null
  ),
  lifecycle({
    componentDidMount() {},
    componentWillUnmount() {}
  })
)(ResultList);
