import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BarDay extends Component {
  render() {
    return (
      <>
        <div className="mx-5">
          <div className="title flex justify-between items-center py-4">
            <h2 className="font-roboto font-bold text-2xl text-slate-50">
              Recent Matches
            </h2>
            <span className="text-sm text-slate-500 font-medium">View All</span>
          </div>
          <Link to={'/recent'} className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-1.png"} className="h-10 object-contain" />
              <p className="text-xs">Barcelona</p>
            </div>
            <div className="flex flex-col text-center mx-8">
              <div className="text-3xl pb-1">0 - 0</div>
              <div className="text-xs">21/12/21</div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-2.png"} className="h-10 object-contain" />
              <p className="text-xs">Real Madrid</p>
            </div>
          </Link>
          <Link to={'/recent'} className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-1.png"} className="h-10 object-contain" />
              <p className="text-xs">Barcelona</p>
            </div>
            <div className="flex flex-col text-center mx-8">
              <div className="text-3xl pb-1">0 - 0</div>
              <div className="text-xs">21/12/21</div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-2.png"} className="h-10 object-contain" />
              <p className="text-xs">Real Madrid</p>
            </div>
          </Link>
          <Link to={'/recent'} className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-1.png"} className="h-10 object-contain" />
              <p className="text-xs">Barcelona</p>
            </div>
            <div className="flex flex-col text-center mx-8">
              <div className="text-3xl pb-1">0 - 0</div>
              <div className="text-xs">21/12/21</div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-2.png"} className="h-10 object-contain" />
              <p className="text-xs">Real Madrid</p>
            </div>
          </Link>
          <Link to={'/recent'} className="flex justify-center items-center bg-slate-50 rounded-lg px-4 py-2 mb-4 font-bold">
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-1.png"} className="h-10 object-contain" />
              <p className="text-xs">Barcelona</p>
            </div>
            <div className="flex flex-col text-center mx-8">
              <div className="text-3xl pb-1">0 - 0</div>
              <div className="text-xs">21/12/21</div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={window.location.origin + "/icons/team-2.png"} className="h-10 object-contain" />
              <p className="text-xs">Real Madrid</p>
            </div>
          </Link>
        </div>
      </>
    );
  }
}
