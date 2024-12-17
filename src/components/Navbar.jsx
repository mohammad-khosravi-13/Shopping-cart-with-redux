import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUser,
  faHeart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex rounded-xl  justify-between  items-center">
      <div className="bg-black w-[50%] ru p-4">
        <nav className="p-4 space-y-1 rounded-md h-16 w-full flex justify-between bg-white  items-center">
          <button
            onClick={() => navigate("/")}
            className="text-black text-2xl px-4 py-2 rounded-lg  flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mr-4" />
          </button>

          <Link
            to="/cart"
            className="text-black text-2xl px-4 py-2 rounded-lg  flex items-center"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-4" />
          </Link>

          <Link
            to="/profile"
            className="text-black text-2xl px-4 py-2 rounded-lg  flex items-center"
          >
            <FontAwesomeIcon icon={faUser} className="mr-4" />
          </Link>

          <Link
            to="/favorites"
            className="text-black text-2xl px-4 py-2 rounded-lg  flex items-center"
          >
            <FontAwesomeIcon icon={faHeart} className="mr-4" />
          </Link>

          <Link
            to="/settings"
            className="text-black text-2xl px-4 py-2 rounded-lg  flex items-center"
          >
            <FontAwesomeIcon icon={faCog} className="mr-4" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
