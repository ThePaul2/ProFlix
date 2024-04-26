import React from 'react';

const NewInput = ({ text, show, identifier }) => {
    return (
        <div>
            {show && (
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => console.log(e.target.value)} // Implement your onChange handler
                    id={identifier} 
                />
            )}
        </div>
    );
};

export default NewInput;
