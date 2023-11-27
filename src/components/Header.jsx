import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">hello {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-w-6 justify-center items-center">
            <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
              sign in /Guest
            </Link>
            {""}
            <Link to={"/login"} className="link link-hover text-xs sm:text-sm">
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
