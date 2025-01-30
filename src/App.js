import logo from './logo.svg';
import './App.css';

import Myroute from './Myroute';
import { CartReducer } from './redux/reducer/CartReducer';
import { legacy_createStore } from 'redux';  // top help the compiler to know that reducer is the contianer.
import { Provider } from 'react-redux';

import { store } from './store';



function App() {
  // const store = legacy_createStore(CartReducer)
  return (
    <>

      <Provider store={store}>
        <Myroute />
      </Provider>


    </>




  );
}

export default App;
