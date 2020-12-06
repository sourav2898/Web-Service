import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={props.src} alt="image" />
                </div>
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <NavLink className="button" to="/contact" > Visit </NavLink>
            </div>
        </>
    );
}

export default Card;