import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataLoaded,
  setUpCommingAllMatches,
  setAllBestMatches,
  setMatchHistory,
  setClubs,
} from "./redux/actions/MatcheActions";

const API = "http://192.168.0.200/sportsadmin/public/api/";

const fetch = async (path, returnRedux) => {
  let responce = null;
  try {
    console.log("Trying..");
    responce = await axios.get(API + path);
  } catch (err) {
    console.log("Error:", err);
    return false;
  } finally {
    console.log("Data: ");
    returnRedux(responce.data);
    return true;
  }
};

const Getdata = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.MatchReducer.DataLoaded);
  useEffect(() => {
    loaded == false &&
      fetch("upcomming", function (data) {
        dispatch(setUpCommingAllMatches(data));
      }) &&
      fetch("bestmatches", function (data) {
        dispatch(setAllBestMatches(data));
      }) &&
      fetch("matches", function (data) {
        dispatch(setMatchHistory(data));
      }) &&
      fetch("clubs", function (data) {
        dispatch(setClubs(data));
      }) &&
      dispatch(setDataLoaded(true));
  }, []);

  return 0;
};

export default Getdata;
