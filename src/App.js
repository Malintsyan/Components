import React from 'react';
import AboutComponent from './Components/AboutComponent';
import { AboutProps } from './Components/NotForUse';
import AboutBind from './Components/AboutBind';

import './App.css';

function App() {
  return (
    <div className="App">
      <AboutComponent />
      <AboutProps name='DYNAMIC' brackets= 'CURLY'/>
      <AboutBind/>
    </div>
  );
}

export default App;
