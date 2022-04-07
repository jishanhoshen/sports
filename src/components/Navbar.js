import { faHome, faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar absolute inset-x-0 bottom-0 w-screen h-14 bg-slate-50 flex justify-around ">
        <NavLink
          className="flex items-center w-14 cursor-pointer justify-center"
          to={"/club"}
        >
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink
          className="flex items-center w-14 cursor-pointer justify-center"
          to={"/"}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          className="flex items-center w-14 cursor-pointer justify-center"
          to={"profile"}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    );
  }
}
