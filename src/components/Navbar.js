import { faHome, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

 const Navbar = () => {
  return (
    <div className="navbar absolute inset-x-0 bottom-0 w-screen h-14 bg-slate-50 flex justify-around z-20">
      <NavLink
        className="club flex items-center w-14 cursor-pointer justify-center"
        to={"/club/matches"}
      >
        <FontAwesomeIcon icon={faUsers} />
      </NavLink>
      <NavLink
        className="home flex items-center w-14 cursor-pointer justify-center"
        to={"/"}
      >
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        className="profile flex items-center w-14 cursor-pointer justify-center"
        to={"profile"}
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
    </div>
  );
}
export default Navbar;