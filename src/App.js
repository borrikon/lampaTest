import React from 'react';
import Layout from "./components/layaut";
import {Provider} from 'react-redux';
import {store} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <Layout />
    </Provider>
  );
}

export default App;
