import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const IPhone = () => {
    const power = useContext(PowerContext)
    return (
        <div>
            <h2>iPhone {power}</h2>
        </div>
    );
};

export default IPhone;