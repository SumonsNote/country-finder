import React, { createContext } from 'react';
import Apple from '../Tech/Apple';
import Google from '../Tech/Google';
import Microsoft from '../Tech/Microsoft';
import { useState } from 'react';
export const PowerContext = createContext(1)

const Company = () => {

    const [power, setPower] = useState(1)

    const handlePower = () => {
        const increasePower = power + 1;
        setPower(increasePower)
    }
    return (
        <PowerContext.Provider value={[power, setPower]}>
            <div className='border-2 h-60 p-5 mt-20 flex justify-center'>
        
        <div>
        <h2>Company</h2>
        <button onClick={handlePower} className='bg-blue-600 text-white p-3 rounded m-3'>Power</button>
        </div>
        <Google></Google>
        <Apple></Apple>
        <Microsoft></Microsoft>
    </div>
        </PowerContext.Provider>
    );
};

export default Company;