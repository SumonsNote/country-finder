import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const GoolePixel = () => {
    const power = useContext(PowerContext)
    return (
        <div>
            <h2>Google Pixel {power}</h2>
        </div>
    );
};

export default GoolePixel;