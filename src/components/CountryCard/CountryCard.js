import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({country}) => {
  return (
    <div className="country-card-container rounded-md py-5 shadow-md border-cyan-100">
      <div className=" items-center flex justify-center p-3 rounded-md">
      <img className="rounded-md" src={country.flags.png} alt="" />
      </div>
      <h2 className="text-3xl font-bold py-4">{country.name.common}</h2>
      <Link to={`/country-detail/${country.ccn3}`} className="bg-blue-500 text-white p-2 py-3 rounded-md">Country Detail</Link>
    </div>
  );
};

export default CountryCard;
