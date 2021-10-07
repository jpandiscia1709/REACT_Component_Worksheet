import React from 'react';


function AlertUser(props) {
    return (
        <div>
            <button onClick={()=>props.alertMessage()}>Click Me</button>

         </div>
    )


    }




    
    // const click
export default AlertUser;
