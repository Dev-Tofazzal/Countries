import { useState } from "react";
import "./Country.css"
const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    
    
     const {name,flags,population,area,cca3} = country;
     const [visited,setVisited] = useState(false)
     
     const handleVisited =()=>{
        setVisited(!visited)
     }
    
     
    return (
        <div className={`country ${visited && "visited "}`}>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png } alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={()=>handleVisitedCountries( country )}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited?"visited":"Going"}</button>
            {visited? "i have visited this country":"i want to visit"}
            <CountryDetails></CountryDetails>
        </div>
    );
};

export default Country;