import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDataLoaded } from "./redux/actions/MatcheActions";
import { setUpCommingAllMatches } from "./redux/actions/MatcheActions";
import { setUpAllBestMatches } from "./redux/actions/MatcheActions";
import { setUpMatchHistory } from "./redux/actions/MatcheActions";

const API = "http://localhost/sportsadmin/public/api/";

const fetch = async (path, returnRedux) => {
  let responce = null;
  try {
    console.log("Trying..");
    responce = await axios.get(API + path);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Data: ");
    returnRedux(responce.data);
  }
};

const Getdata = (props) => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.MatchReducer.DataLoaded);
  useEffect(() => {
    loaded == false &&
      fetch("upcomming", function (data) {
        dispatch(setUpCommingAllMatches(data));
      }) &&
      fetch("bestmatches", function (data) {
        dispatch(setUpAllBestMatches(data));
      }) &&
      fetch("matches", function (data) {
        dispatch(setUpMatchHistory(data));
      }) &&
      dispatch(setDataLoaded(true));
  }, []);

  return 0;
};

export default Getdata;
