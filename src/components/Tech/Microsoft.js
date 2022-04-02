import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';

const Microsoft = () => {
    const [power, setPower] = useContext(PowerContext)

    const handlePower = () => {
        const newPower = power + 1;
        setPower(newPower)
    }

    return (
        <div className='border-2 p-5'>
            <h2>Microsoft {power}</h2>
            <button onClick={handlePower} className='bg-blue-600 text-white p-3 rounded m-3'>Power</button>
        </div>
    );
};

export default Microsoft;