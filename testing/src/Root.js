import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "store/reducers";
import reduxPromise from "redux-promise";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
