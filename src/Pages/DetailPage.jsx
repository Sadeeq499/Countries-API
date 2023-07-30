// import React from "react";
// import { Link, useParams } from "react-router-dom";

// function DetailPage({ data }) {
//   const { name } = useParams();

//   return (
//     <>
//       {/* backButton */}
//       <div className="flex ps-20 md:ps-40 mt-20">
//         <Link
//           to={"/"}
//           className="border-2 border-gray-400 px-5 py-2 rounded-md"
//         >
//           Back
//         </Link>
//       </div>

//       {/* main Container*/}

//       <div className="flex flex-col justify-center items-center mx-auto md:flex-row md:space-x-10 mt-16">
//       {data?.map(
//         (country) =>
//           country?.name?.common === name && (
//               {/* image */}
//               <div className="mx-5 md:mx-0">
//                 <img
//                   className=" w-full  h-auto md:w-full md:h-[60vh]"
//                   src={country?.flags?.png}
//                   alt="flag"
//                 />
//               </div>
//               <div className="flex flex-col space-y-6 my-10 mx-0">
//                 {/* country name */}
//                 <h1 className="font-bold text-2xl">{country?.name?.common}</h1>
//                 {/* country info */}
//                 <div className="flex flex-col p-5  md:flex-row md:space-y-0 md:space-x-10">
//                   {/* 1st content */}
//                   <div className="space-y-4">
//                     <h1>
//                       <strong>Native Name</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Population</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Region</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Sub Region</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Capital</strong>: Pakistan
//                     </h1>
//                   </div>

//                   <div className="space-y-4">
//                     <h1>
//                       <strong>Native Name</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Population</strong>: Pakistan
//                     </h1>
//                     <h1>
//                       <strong>Region</strong>: Pakistan
//                     </h1>
//                   </div>
//                 </div>

//                 {/* border countries */}
//                 <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
//                   <h1 className="font-bold pt-2">Border Countries:</h1>
//                   <div className="flex flex-row space-x-2">
//                     <button className="border-2 border-gray-400 px-5 py-2 rounded-md">
//                       Pakistan
//                     </button>
//                     <button className="border-2 border-gray-400 px-5 py-2 rounded-md">
//                       Pakistan
//                     </button>
//                     <button className="border-2 border-gray-400 px-5 py-2 rounded-md">
//                       Pakistan
//                     </button>
//                   </div>
//                 </div>
//               </div>
//           )
//           )}
//           </div>
//     </>
//   );
// }

// export default DetailPage;
import React from "react";
import { Link, useParams } from "react-router-dom";

function DetailPage({ data }) {
  const { name } = useParams();

  return (
    <>
      {/* backButton */}
      <div className="flex ps-20 md:ps-40 mt-20">
        <Link
          to={"/"}
          className="border-2 border-gray-400 px-5 py-2 rounded-md"
        >
          Back
        </Link>
      </div>

      {/* main Container*/}
      {data?.map(
        (country) =>
          country?.name?.common === name && (
            <div className="flex flex-col justify-between   md:flex-row md:space-x-32 mt-16 md:ms-20">
              <React.Fragment key={country?.name?.common}>
                {/* image */}
                <div className="flex flex-col md:flex-row md:space-x-20">
                  <div>
                    <img
                      className=" w-full  h-auto md:w-full md:h-[60vh]"
                      src={country?.flags?.png}
                      alt="flag"
                    />
                  </div>
                  <div className="flex flex-col space-y-6 my-10 mx-0">
                    {/* country name */}
                    <h1 className="font-bold text-2xl">
                      {country?.name?.common}
                    </h1>
                    {/* country info */}
                    <div className="flex flex-col p-5  md:flex-row md:space-y-0 md:space-x-10">
                      {/* 1st content */}
                      <div className="space-y-4">
                        <h1>
                          <strong>Native Name</strong>:{" "}
                          {country?.name?.nativeName?.common}
                        </h1>
                        <h1>
                          <strong>Population</strong>: {country?.population}
                        </h1>
                        <h1>
                          <strong>Region</strong>: {country?.region}
                        </h1>
                        <h1>
                          <strong>Sub Region</strong>: {country?.subregion}
                        </h1>
                        <h1>
                          <strong>Capital</strong>: {country?.capital}
                        </h1>
                      </div>

                      <div className="space-y-4">
                        <h1>
                          <strong>Top Level Domain</strong>: {country?.tld?.[0]}
                        </h1>
                        <h1>
                          <strong>Currencies</strong>:{" "}
                          {Object.values(country?.currencies || {}).join(", ")}
                        </h1>
                        <h1>
                          <strong>Languages</strong>:{" "}
                          {Object.values(country?.languages || {}).join(", ")}
                        </h1>
                      </div>
                    </div>

                    {/* border countries */}
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
                      <h1 className="font-bold pt-2">Border Countries:</h1>
                      <div className="flex flex-row space-x-2">
                        {country?.borders?.map((border) => (
                          <Link
                            to={`/product/${border}`}
                            key={border}
                            className="border-2 border-gray-400 px-5 py-2 rounded-md"
                          >
                            {border}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
          )
      )}
    </>
  );
}

export default DetailPage;
