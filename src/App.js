import React, { Component } from 'react';
import { render } from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main'


import Login from './components/Login'
//import SignUp from './components/SignUp'


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)



export default App;
