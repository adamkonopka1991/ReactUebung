import React from 'react';

const validationComponent = (prop) =>{
    let result="Well done!"
    if(prop.length<=5)
    {
        result="Text ist too short!"
    }

    return(<p>{result}</p>);
}

export default validationComponent;