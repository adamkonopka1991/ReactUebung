import React from 'react';

import './UserOutput.css';

const userOutput= (props) => {

    return(
        <div className="UserOutput">
            <p>
                  
            </p>
            <p>
                Benutzer: {props.username}
            </p>
        </div>
    )
}

export default userOutput;