import React, { Component } from 'react';
import { render } from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Header from './Application/Header';
import Main from './Application/Main'


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)



export default App;
