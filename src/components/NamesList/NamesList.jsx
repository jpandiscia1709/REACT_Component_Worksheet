import React from 'react';

const NamesList = (props) => {
    return ( 
        <div>
            {props.namesList.map(function(newNames){
                return <ul>{newNames}</ul>
            })}
            
        </div>


     );
}
 

 
export default NamesList;