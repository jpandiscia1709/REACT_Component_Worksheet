import React from 'react';

const DisplayNames = (props) => {
    return (  
        <div>
            {props.names.firstName}
            {props.names.lastName}
            
        </div>

    );
}
 


export default DisplayNames;