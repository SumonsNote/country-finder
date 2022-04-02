import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';
import GoogleChrome from '../GoogleChrome/GoogleChrome';
import GooglePixel from '../GooglePixel/GoolePixel'

const Google = () => {
    const power = useContext(PowerContext)
    return (
        <div className='border-2 p-5'>
            <h2>Google {power}</h2>
            <GoogleChrome></GoogleChrome>
            <GooglePixel></GooglePixel>
        </div>
    );
};

export default Google;