import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";

const Country = () => {

  const[isPending, startTransition] = useTransition();
  const[countries, setCountries] = useState([]);

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData();  
      console.log(res);
      setCountries(res.data);      
    });
  },[])

  if(isPending) return <Loader/>;

  return (
    <h1>Country</h1>
  )
}

export default Country