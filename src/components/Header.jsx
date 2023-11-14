import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        <div className="flex gap-w-6 justify-center items-center">
          <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
            sign in / Guest
          </Link>
          <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
            create account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
