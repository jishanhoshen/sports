import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class RoundedDay extends Component {
  render() {
    var Roundedaysettings = {
      infinite: true,
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
            initialSlide: 1,
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
        <div className="daybox bg-slate-50 rounded-tl-lg rounded-bl-lg p-4 my-5 ml-5">
          <div className="title flex justify-between items-center">
            <h2 className="font-roboto font-bold text-2xl">Best Matches</h2>
            <span className="text-sm text-slate-500 font-medium">View All</span>
          </div>
          <Slider {...Roundedaysettings}>
            <div>
              <Link to={"/day/1"}>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4">
                  <div className="h-14 w-14 bg-red-500 rounded-full flex items-center justify-center">
                    <img src="./icons/team-1.png" />
                  </div>
                  <div className="h-14 w-14 bg-blue-500 rounded-full  flex items-center justify-center">
                    <img src="./icons/team-2.png" />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/day/2"}>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4">
                  <div className="h-14 w-14 bg-yellow-500 rounded-full flex items-center justify-center">
                    <img src="./icons/team-1.png" />
                  </div>
                  <div className="h-14 w-14 bg-violet-500 rounded-full  flex items-center justify-center">
                    <img src="./icons/team-2.png" />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/day/3"}>
                <div className="days h-16 w-36 bg-slate-50 shadow-md rounded-full flex items-center justify-around mr-4">
                  <div className="h-14 w-14 bg-rose-500 rounded-full flex items-center justify-center">
                    <img src="./icons/team-1.png" />
                  </div>
                  <div className="h-14 w-14 bg-fuchsia-500 rounded-full  flex items-center justify-center">
                    <img src="./icons/team-2.png" />
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
