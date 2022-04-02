import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Company from "../Company/Company";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold my-5 py-5">Welcome to Country Site</h1>

      <Link to="/country" className=" p-5 rounded-full text-white bg-blue-400">
        Explore Countries
      </Link>
      <Company></Company>
    </div>
  );
};

export default Home;
