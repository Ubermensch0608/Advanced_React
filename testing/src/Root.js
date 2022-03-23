import { Provider } from "react-redux";
import store from "store/reducers";

const Root = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
