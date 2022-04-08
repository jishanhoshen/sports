import React, { Component } from "react";
import Header from "../components/Header";
import ClubNav from "../components/ClubNav";
import BoxDay from "../components/BoxDay";
import BarDay from "../components/BarDay";

export default class ClubMatches extends Component {
  render() {
    return (
      <>
        <Header Clubname="B THIRTEEN" />
        <ClubNav />
        <div className="bodyContent content-scrall snap-none">
          <div className="pt-4">
            <BoxDay />
          </div>
          <div className="pt-4">
            <BarDay />
          </div>
          <div className="bottomPadding pb-10"></div>
        </div>
      </>
    );
  }
}
