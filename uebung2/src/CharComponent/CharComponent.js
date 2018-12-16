import React from 'react';


const charComponent = (prop) =>{
    let style= {
        display: "inline-Block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <li style={style} onClick={prop.click}>{prop.letter}</li>
    );

}

export default charComponent;