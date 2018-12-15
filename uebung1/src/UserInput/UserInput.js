import React from 'react';

// import "./UserInput.css";

const userInput = (props) => {

    return(
        <div className="UserInput">
            
                <input onChange={props.change} value={props.username} type="text" />
            
        </div>
    )
}

export default userInput;