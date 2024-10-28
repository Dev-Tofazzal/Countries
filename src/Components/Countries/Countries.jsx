import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag,setVisitedFlag] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries( newVisitedCountries ) 
  }

  const handleVisitedFlag = (flag) =>{
    const newVisitedFlag = [...visitedFlag,flag]
    setVisitedFlag(newVisitedFlag)
    
  }
  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      {/* visited country */}
      <div>
        <h3>Visited Countries: {visitedCountries.length} </h3>
        <ul>
            {
               visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>

      <div className="flag_container">
            {
              visitedFlag.map(flag => <img src={flag}></img>)
            }
      </div>

      {/* display country */}
      <div className="countries_box">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlag={handleVisitedFlag}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
