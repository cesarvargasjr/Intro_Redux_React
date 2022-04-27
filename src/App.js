import React from 'react';
import './App.css';
import Interval from './components/Interval/Interval';
import Median from './components/Median/Median';
import Sum from './components/Sum/Sum';
import Draw from './components/Draw/Draw';

function App() {

  return (
    <div className="App">
      <h1>Intro Redux</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Median></Median>
        <Sum></Sum>
        <Draw></Draw>
      </div>
    </div>
  );
}

export default App;
