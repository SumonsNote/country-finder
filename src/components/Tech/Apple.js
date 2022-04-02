import React, { useContext } from 'react';
import { PowerContext } from '../Company/Company';
import IMAC from '../IMAC/IMAC';
import IPhone from '../IPhone/IPhone';
import MacBook from '../Macbook/MacBook';

const Apple = () => {
    const power = useContext(PowerContext)
    return (
        <div className='border-2 p-5'>
            <h2>Apple {power}</h2>
            <MacBook></MacBook>
            <IMAC></IMAC>
            <IPhone></IPhone>
        </div>
    );
};

export default Apple;