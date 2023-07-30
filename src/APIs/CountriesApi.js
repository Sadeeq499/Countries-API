import axios from "axios";

// https://restcountries.com/v3.1/all
// call the API and return the data

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/all`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// search by country

export const SearchByCountry = async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}/name/${name}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
