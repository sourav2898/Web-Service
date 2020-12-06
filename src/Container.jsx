import React from 'react';
import { NavLink } from 'react-router-dom';

const Container = (props) => {
    return (
        <>
            <div className="container">
                <div className="left">
                    <h1> {props.title} </h1>
                    <h2> {props.secondTitle} </h2>
                    <p> {props.para} </p>
                    <NavLink className="button" to="/service"> Get Started </NavLink>
                </div>
                <div className="right">
                    <img src={props.src} alt="home image" />
                </div>
            </div>
        </>
    );
};

export default Container;