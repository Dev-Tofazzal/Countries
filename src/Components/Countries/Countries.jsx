import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries( newVisitedCountries ) 
  }
  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      <div>
        <h3>Visited Countries: {visitedCountries.length} </h3>
        <ul>
            {
               visitedCountries.map(country => <li>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="countries_box">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );7
};

export default Countries;
