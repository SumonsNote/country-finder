import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Spinner from "../Spinner/Spinner";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      });
  }, []);
  return (
    <>
        {
            loading ? <Spinner></Spinner> : <div>
      <h1 className="text-3xl py-5 uppercase">Country: {countries.length}</h1>
      <div className="country-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-15">
        {countries.map((country) => (
          <CountryCard country={country} key={country.ccn3}></CountryCard>
        ))}
      </div>
    </div>
        }
    </>
  );
};

export default Country;
