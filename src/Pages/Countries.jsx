import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Card from "./Card";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllCountries, SearchByCountry } from "../APIs/CountriesApi";

function Countries() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  // ----------------------get All countries---------------------------------------------
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getAllCountries(),
  });

  // ----------------------get single country by name---------------------------------------------
  // apply use mutation here
  const {
    data: singleCountry,
    isLoading: singleCountryLoading,
    mutate,
  } = useMutation({
    queryKey: ["singleCountry"],
    mutationFn: () => SearchByCountry(searchCountry),
  });

  // ----------------------get single by country selection---------------------------------------------

  const {
    data: filteredCountry,
    isLoading: filteredCountryLoading,
    mutate: filteredCountryMutate,
  } = useMutation({
    queryKey: ["singleCountry"],
    mutationFn: () => SearchByCountry(selectedCountry),
  });

  const handleSelect = (event) => {
    event.preventDefault();
    setSelectedCountry(event.target.value);
    filteredCountryMutate();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate();
    setSelectedCountry("");
  };

  return (
    <>
      {/* search Field and countries option */}
      <div className="flex flex-col justify-between py-10 my-10  space-y-10 md:space-y-0   md:flex-row md:mx-40">
        {/* search field */}
        <form
          onChange={handleSubmit}
          className="flex flex-row bg-white shadow-lg shadow-gray-200 max-w-sm mx-10 md:w-1/3 md:mx-0"
        >
          {/* search icon */}
          <button
            type="submit"
            className="p-3 flex items-center justify-center"
          >
            <BsSearch />
          </button>
          {/* input field*/}

          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search for a country"
            onChange={(e) => {
              setSearchCountry(e.target.value);
              setSelectedCountry("");
            }}
            value={searchCountry}
          />
        </form>

        {/* selection of countries */}
        <div className="relative inline-flex">
          <select
            className="bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 shadow-sm text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value={selectedCountry}
            onChange={handleSelect}
          >
            <option value="">Select a country</option>
            {data?.map((country) => (
              <option key={country?.name?.common} value={country?.name?.common}>
                {country?.name?.common}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/*  get country by filtering */}
      {searchCountry ? (
        <div className="p-10">
          {singleCountryLoading ? (
            <div>Loading...</div>
          ) : (
            <Card Data={singleCountry} />
          )}
        </div>
      ) : selectedCountry ? (
        <div className="p-10">
          {singleCountryLoading ? (
            <div>Loading...</div>
          ) : (
            <Card Data={filteredCountry} />
          )}
        </div>
      ) : (
        <div className="p-10">
          <Card Data={data} />
        </div>
      )}
    </>
  );
}

export default Countries;
