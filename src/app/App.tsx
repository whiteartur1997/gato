import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from '../components/Routes/Routes';
import './App.css';
import {HeaderContainer} from "../features/Header/HeaderContainer";
import {useDispatch} from "react-redux";
import {getAuth} from "./reducers/auth-reducer";

function App() {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuth())
    }, [])

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
