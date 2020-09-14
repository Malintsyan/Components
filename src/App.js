import React, { Component } from 'react';
import AboutComponent from './Components/AboutComponent';
import { AboutProps } from './Components/NotForUse';
import AboutBind from './Components/AboutBind';
import Product from './Components/Product';
import ToDoList from './Components/ToDoList';
import './App.css';
import Hide from './Components/Hide';
import ToDo1 from './Components/ToDo1';

function App() {
  return (
    <div className="App">
      <Hide/>
      <ToDoList/>
      <AboutComponent />
      <AboutProps name='DYNAMIC' brackets= 'CURLY'/>
      <AboutBind/>
      <Product name='bananas' price='2$' description='Fresh bananas from Ecuador' />
      
      <ToDo1/>
    </div>
  );
}

export default App;
