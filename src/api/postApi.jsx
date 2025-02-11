import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1"
});

// HTTP GET METHOD 
export const getCountryData = () => {
  api.get("/all?fields=name,population,region,capital,flags");
}