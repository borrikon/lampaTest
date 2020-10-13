import React from 'react';
import Layout from "./components/layaut";
import {compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";

function App() {

  const store = createStore(rootReducer, compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

  return (
    <Provider store={store}>
        <Layout />
    </Provider>
  );
}

export default App;
