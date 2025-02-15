import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CountryCard = ({country}) => {
  const {flags, name, population, region, capital} = country;
  return(
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />

        <div className="countryInfo">
          <p className="card-title">{name.common.length > 12 ? name.common.slice(0,12) + "..." : name.common}</p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button >
              Read more <FaArrowRightLong />
            </button>
          </NavLink>
        </div>
      </div>
    </li>

  ) 
}

export default CountryCard