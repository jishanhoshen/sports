import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class BoxDay extends Component {
  render() {
    var BoxDaysettings = {
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
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
            slidesToScroll: 1,
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
        <div>
          <div className="title flex justify-between items-center mx-5">
            <h2 className="font-roboto font-bold text-2xl text-slate-50">
              Comming Matches
            </h2>
            <span className="text-sm text-slate-500 font-medium">View All</span>
          </div>
          <div className="ml-5">
            <Slider {...BoxDaysettings}>
              <Link to={'/comming'}>
                <div className="bg-yellow-500 w-36 h-44 mr-4 rounded-lg px-3">
                  <div className="flex justify-around py-6">
                    <img
                      src={window.location.origin + "/icons/team-1.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                    <img
                      src={window.location.origin + "/icons/team-2.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="pb-3 truncate w-20">Barcelons</div>
                      <div className="truncate w-20">Real Madrid</div>
                    </div>
                    <div>
                      <div className="pb-3">0</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'/comming'}>
                <div className="bg-slate-50 w-36 h-44 mr-4 rounded-lg px-3">
                  <div className="flex justify-around py-6">
                    <img
                      src={window.location.origin + "/icons/team-1.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                    <img
                      src={window.location.origin + "/icons/team-2.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="pb-3 truncate w-20">Barcelons</div>
                      <div className="truncate w-20">Real Madrid</div>
                    </div>
                    <div>
                      <div className="pb-3">0</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'/comming'}>
                <div className="bg-blue-500 w-36 h-44 mr-4 rounded-lg px-3">
                  <div className="flex justify-around py-6">
                    <img
                      src={window.location.origin + "/icons/team-1.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                    <img
                      src={window.location.origin + "/icons/team-2.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="pb-3 truncate w-20">Barcelons</div>
                      <div className="truncate w-20">Real Madrid</div>
                    </div>
                    <div>
                      <div className="pb-3">0</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={'/comming'}>
                <div className="bg-red-500 w-36 h-44 mr-4 rounded-lg px-3">
                  <div className="flex justify-around py-6">
                    <img
                      src={window.location.origin + "/icons/team-1.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                    <img
                      src={window.location.origin + "/icons/team-2.png"}
                      className="h-11 m-w-14 object-contain"
                    />
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <div>
                      <div className="pb-3 truncate w-20">Barcelons</div>
                      <div className="truncate w-20">Real Madrid</div>
                    </div>
                    <div>
                      <div className="pb-3">0</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              </Link>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
