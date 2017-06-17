import { createStore } from "redux";
import withRedux from "next-redux-wrapper";
import reducer from '../reducers';

const makeStore = (initialState) => {
  return createStore(reducer, initialState);
};

const connectStore = (mapStateToProps = () => { return{}; }, mapDispatchToProps = () => { return{}; }) =>
                     (Component) => withRedux(makeStore,
                                              mapStateToProps,
                                              mapDispatchToProps)
                                             (Component);

export default connectStore;