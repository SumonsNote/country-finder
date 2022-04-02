import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='mt-40'>
            <div className='flex justify-center items-center'>
          <Link to='us-ad' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            BD Address
          </Link>
          <Link to='uk-ad' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            US Address
          </Link>
        </div>
        <div className='w-full mt-5'>
              <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Contact;