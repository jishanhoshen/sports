import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class clubNav extends Component {
  render() {
    return (
      <>
        <div className="clubnav flex justify-around bg-slate-50">
          <NavLink to={"/club/matches"} className="w-1/2 py-2 text-center">Matchessss</NavLink>
          <NavLink to={"/club/players"} className="w-1/2 py-2 text-center ">Players</NavLink>
        </div>
      </>
    );
  }
}
