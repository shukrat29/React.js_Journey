import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryListCard from "./CountryListCard";

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Handle search button click
  const handleSearch = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  return (
    <div className="p-5">
      <div className="pb-5">
        <input
          className="border border-gray-600 rounded-md p-2"
          type="text"
          placeholder="Type country name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className="px-4 ml-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
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
