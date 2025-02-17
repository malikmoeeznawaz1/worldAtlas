import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (!search) return true; // Agar search empty hai, to saari countries return karo
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };

  const filterRegion = (country) => {
    if(filter === "all") return 1;
    return country.region === filter;
  }  

  const searchCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <section className="country-section ">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries = {countries} 
        setCountries = {setCountries}
      />

      <ul className="grid grid-four-cols">
        {searchCountries.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
