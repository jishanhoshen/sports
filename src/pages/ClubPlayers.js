import React, { Component } from "react";
import Header from "../components/Header";
import ClubNav from "../components/ClubNav";

export default class ClubPlayers extends Component {
  render() {
    return (
      <>
        <Header Clubname="B THIRTEEN" />
        <ClubNav/>
        <div className="flex justify-center items-center text-slate-50 h-3/6 text-5xl">
          Players
        </div>
      </>
    );
  }
}
