import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CountryDetail = () => {
    const {ccn3} = useParams()
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const url = `https://restcountries.com/v3.1/alpha/${ccn3}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setCountry(data[0])})
    }, [ccn3])
    return (
        <>
            {
                loading ? <Spinner></Spinner> : 
                <div className='flex justify-between items-center mx-auto max-w-7xl px-20 py-20'>
            <div>
            <h2 className='text-3xl'>Country Information</h2>
            <hr className='my-3'/>
            <p>Name: {country.name?.common}</p>
            <p>Official: {country.name?.official}</p>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continents}</p>
            {/* <p>Currency: {country.currencies[0]}</p> */}
            <p>Languages: {country.languages?.eng}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
            </div>
            <div>
            <h2 className='text-3xl mb-3'>Flag</h2>
                <img className='shadow-lg rounded-md' src={country.flags?.png} alt=""/>
            </div>
        </div>
            }
        </>
    );
};

export default CountryDetail;