import React from "react";
import { Link } from "react-router-dom";

function Card({ Data }) {
  return (
    <>
      {/* main Container */}
      <div className="flex flex-wrap justify-center  md:flex-row gap-10">
        {/* card 1*/}
        {Data?.map((country) => (
          <Link to={`/${country?.name?.common}`}>
            <div
              key={country?.name?.common}
              className="flex flex-col max-w-sm shadow-lg "
            >
              {/* image */}
              <img src={country?.flags?.png} className="w-full h-auto" />

              {/* Content  */}
              <div className="flex flex-col justify-start pl-10 my-5 space-y-5">
                <h1 className="font-bold">{country?.name?.common}</h1>

                {/* other info */}
                <span>
                  <h3>
                    <strong>Population</strong>: {country?.population}
                  </h3>
                  <h3>
                    <strong>Region</strong>: {country?.region}
                  </h3>
                  <h3>
                    <strong>Capital</strong>: {country?.capital}
                  </h3>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Card;
