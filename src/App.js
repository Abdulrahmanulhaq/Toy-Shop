import React from 'react';
import Navbar from'./Components/Navbar';
import Home from'./Components/Home';
import './App.css';
import{ Provider } from 'react-redux';
import store from './Store.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
