import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="bg-slate-50 ">
          <div className={"font-roboto text-5xl font-black text-strock-3 flex items-center justify-center tracking-widest " + (this.props.Clubname ? "pt-6 pb-3" : "pt-12 pb-6" ) }>
            {this.props.Clubname ? this.props.Clubname : AppTitle()}
          </div>
        </div>
      </>
    );
  }
}

function AppTitle() {
  return (
    <>
      <span>SP</span>
      <div className="rounded-full bg-amber-400 h-10 w-10 mr-1"></div>{" "}
      <span>RTS</span>
    </>
  );
}
