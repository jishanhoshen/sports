import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const a = 0;

const RoundedDay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(null);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLocal, setLocal] = useState(false);

  const url = "http://192.168.0.200/sportsadmin/public/api/data";

  let local = JSON.parse(localStorage.getItem("actualData"));
  const matchLocal = (apiData) => {
    // console.log("matching start");
    // console.log("sotore data: ", local);
    // console.log("Api Data: ", apiData);
    if (local != null) {
      var equals =
        local.length === apiData.length &&
        local.every((e, i) => e.id === apiData[i].id);
      if (!equals) {
        // console.log("set local 1");
        localStorage.setItem("actualData", JSON.stringify(apiData));
        local = JSON.parse(localStorage.getItem("actualData"));
        setLocal(true);
        setData(local);
      }
    } else {
      if (!isLocal) {
        // console.log("set local 2");
        localStorage.setItem("actualData", JSON.stringify(apiData));
        local = JSON.parse(localStorage.getItem("actualData"));
        setLocal(true);
        setData(local);
      }
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      matchLocal(actualData);
      if (!isLocal) {
        setData(local);
        setLocal(true);
      }
      setError(null);
      // console.log("json", actualData);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
    clearTimeout(timer);
    // setTimer(setTimeout(getData, 200));
  };

  useEffect(() => {
    if (local != null) {
      // console.log("have data");
      setLoading(false);
      if (data == null) {
        setData(local);
      }
    }
    if (!isMounted) {
      getData();
      setIsMounted(true);
      // console.log("state data:", data);
      // console.log(new Date().toLocaleString());
    }
  }, [data]);

  var Roundedaysettings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {loading && (
        <>
          <div className="daybox bg-slate-50 rounded-tl-lg rounded-bl-lg p-4 mt-5 ml-5">
            <div className="title flex justify-between items-center">
              <h2 className="font-roboto font-bold text-2xl">Best Matches</h2>
              <span className="text-sm text-slate-500 font-medium">
                View All
              </span>
            </div>
            <Slider {...Roundedaysettings}>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
              <div>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                  <div className="h-14 w-14 bg-slate-200 rounded-full flex items-center justify-center"></div>
                </div>
              </div>
            </Slider>
          </div>
        </>
      )}

      {data && (
        <>
          <div className="daybox bg-slate-50 rounded-tl-lg rounded-bl-lg p-4 mt-5 ml-5">
            <div className="title flex justify-between items-center">
              <h2 className="font-roboto font-bold text-2xl">Best Matches</h2>
              <span className="text-sm text-slate-500 font-medium">
                View All
              </span>
            </div>
            <Slider {...Roundedaysettings}>
              {data.map((item) => (
                <div key={item.id}>
                  <Link to={"/day/" + item.id}>
                    <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4 my-2">
                      <div className="h-14 w-14 bg-red-500 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={window.location.origin + "/icons/team-1.png"}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="h-14 w-14 bg-blue-500 rounded-full  flex items-center justify-center overflow-hidden">
                        <img
                          src={window.location.origin + "/icons/team-2.png"}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
};
export default RoundedDay;
