import { faHome, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Link } from "react-router-dom";

 const Navbar = () => {
  return (
    <div className="navbar absolute inset-x-0 bottom-0 w-screen h-14 bg-slate-50 flex justify-around z-20">
      <NavLink
        className="club flex items-center w-14 cursor-pointer justify-center"
        to={"/club/matches"}
      >
        <FontAwesomeIcon icon={faUsers} />
      </NavLink>
      <Link
        className="home flex items-center w-14 cursor-pointer justify-center"
        to={"/"}
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link
        className="profile flex items-center w-14 cursor-pointer justify-center"
        to={"profile"}
      >
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
}
export default Navbar;