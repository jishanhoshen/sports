import React, { Component } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default class AppLayout extends Component {
  render() {
    return (
      <>
        <Outlet />
        <Navbar />
      </>
    );
  }
}
