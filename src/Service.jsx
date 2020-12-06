import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>Our Services</h1>
            <div className="service">
                {Sdata.map((value,index)=>{
                   return <Card src={value.img} title={value.title} key={index}/>
                })}
            </div>
        </>
    );
}

export default Service;