import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between bg-white shadow-lg sticky top-0'>
        <div>
            <Link to='/home'><h2 className='text-2xl p-4 uppercase'>Country Finder</h2></Link>
        </div>
            <nav className='p-4 text-2xl flex justify-center'>
                <CustomLink className='mr-3' to='/home'>Home</CustomLink>
                <CustomLink className='mr-3' to='/country'>Country</CustomLink>
                <CustomLink className='mr-3' to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;