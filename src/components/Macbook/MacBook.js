import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const MacBook = () => {
    const power = useContext(PowerContext)
    return (
        <div>
            <h2>MacBook {power}</h2>
        </div>
    );
        
};

export default MacBook;