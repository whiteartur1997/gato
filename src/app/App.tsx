import React  from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from '../components/Routes/Routes';
import './App.css';
import {HeaderContainer} from "../features/Header/HeaderContainer";

function App() {

    return (
        <div className="App">
            <HashRouter>
                <HeaderContainer/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
