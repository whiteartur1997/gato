import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from '../components/Routes/Routes';
import { Header } from '../features/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
