import React from "react";

const Header = () => {
  return (
    <header className="flex sticky snap-start top-0 z-20 drop-shadow-lg bg-white align-middle justify-between items-center p-4">
      <p className="logo font-extrabold text-3xl">envited</p>
      <button className="text-xl capitalize font-bold rounded-lg bg-purple-400 text-white px-4 py-1">
        login/signup
      </button>
    </header>
  );
};

export default Header;
