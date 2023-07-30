import React from "react";

function Header() {
  return (
    <>
      {/* main container */}

      <div className="flex flex-row p-10 justify-between z-10">
        {/* left container */}
        <div className="flex flex-row">
          <div className="text-2xl font-bold">Where in the world?</div>
        </div>

        {/* right container */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="text-xl font-bold">Dark Mode</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
