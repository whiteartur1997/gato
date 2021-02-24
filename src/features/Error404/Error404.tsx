import React from "react";
import { NavLink } from "react-router-dom";
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.mainbox}>
            <div className={s.err}>4</div>
            <i className={`${s.far} far fa-question-circle fa-spin`}></i>
            <div className={s.err2}>4</div>
            <div className={s.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine?
            Never existed in the first place?
                <p>Let's go <NavLink className={s.link} to="/">home</NavLink> and try from there.</p></div>
        </div>
    );
}

export default Error404;
