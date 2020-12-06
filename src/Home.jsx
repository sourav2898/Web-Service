import React from 'react';
import home from '../src/Image/home.jfif';
import Container from './Container';
const Home = () => {
    const title = "Welcome to Web Services";
    const secondTitle = "Get your Business a new hike with us.";
    const para = "We are the team of talented developer making websites. ";
    return(
        <>
           <Container src={home} title={title} secondTitle={secondTitle} para={para} />
        </>
    );
}

export default Home;