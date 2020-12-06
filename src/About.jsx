import React from 'react';
import Container from './Container';
import about from '../src/Image/about.png';

const About = () => {
    const title = "Welcome to about page";
    return(
        <>
            <Container src={about} title={title} secondTitle = "" para= ""/>
        </>
    );
}

export default About;