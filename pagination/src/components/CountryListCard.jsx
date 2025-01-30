import React from "react";

const CountryListCard = ({ country }) => {
  return (
    <div className="flex gap-4">
      <div>
        <img className="h-30" src={country.flags.png} alt="flag" />
      </div>
      <div>
        <h1 className="text-2xl">{country.name.common}</h1>
        <p>
          Capital: {""}
          {country.capital}
        </p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CountryListCard;
