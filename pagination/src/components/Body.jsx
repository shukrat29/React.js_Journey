import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryListCard from "./CountryListCard";

const Body = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="p-5">
      <div className="pb-5">
        <input
          className="border border-gray-600 rounded-md p-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-wrap gap-8 ">
        {countries.map((country, index) => (
          <CountryListCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Body;
