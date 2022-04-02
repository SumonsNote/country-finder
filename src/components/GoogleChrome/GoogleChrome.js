import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const GoogleChrome = () => {
    const power = useContext(PowerContext)
    return (
        <div>
            <h2>Google Chrome {power}</h2>
        </div>
    );
};

export default GoogleChrome;