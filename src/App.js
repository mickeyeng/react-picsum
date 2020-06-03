import React from 'react';
import Header from './components/Header';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
