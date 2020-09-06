import React from 'react';
import AboutComponent from './Components/AboutComponent';
import { AboutProps } from './Components/NotForUse';
import AboutBind from './Components/AboutBind';
import Product from './Components/Product';

import './App.css';

function App() {
  return (
    <div className="App">
      <AboutComponent />
      <AboutProps name='DYNAMIC' brackets= 'CURLY'/>
      <AboutBind/>
      <Product name='bananas' price='1$' description='Fresh bananas from Ecuador' />
    </div>
  );
}

export default App;
