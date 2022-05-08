import React, { useState, useEffect } from "react";
import BarDay from "../components/BarDay";
import BoxDay from "../components/BoxDay";
import Header from "../components/Header";
import RoundedDay from "../components/RoundedDay";
import Getdata from "../Getdata";

const HomeScreen = () => {
  Getdata();
  return (
    <>
      <Header />
      <div className="bodyContent content-scrall snap-none">
        <RoundedDay title="Upcoming Matches"/>
        <BoxDay title="Best Matches"/>
        <BarDay title="Recent Matches"/>
        <div className="bottomPadding pb-10"></div>
      </div>
    </>
  );
};
export default HomeScreen;
