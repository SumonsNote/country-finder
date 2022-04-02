import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const IMAC = () => {
    const power = useContext(PowerContext)
    return (
        <div>
            <h2>iMAC {power}</h2>
        </div>
    );
};

export default IMAC;