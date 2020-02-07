import React from "react";
import "../assets/Header.scss";

type Header = {};

const Header = () => {
  return (
    <nav className="bg-white px-8 pt-2 shadow-md">
      <div className="-mb-px flex">
        <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8">
          Home
      </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
          Products
      </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
          Discounts
      </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3">
          Customers
      </a>
      </div>
    </nav>
  );
};

export default Header;
