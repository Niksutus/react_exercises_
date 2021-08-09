import React from 'react';
import "./Circle.css"

const Cirlce = (props) => {
    return (
        <div className={`circle ${props.color} ${props.active ?  "active" : ""}`} onClick={props.click}> 
        </div>
    );
};

export default Cirlce;