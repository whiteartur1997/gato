import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from '../components/Routes/Routes';
import './App.css';
import {HeaderContainer} from "../features/Header/HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "./reducers/auth-reducer";
import {AppRootStateType} from "./store";

function App() {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuth())
    }, [dispatch])

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
