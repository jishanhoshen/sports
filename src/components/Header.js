import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <div className="h-28 bg-slate-50 ">
          <div className="font-roboto text-5xl font-black text-strock-3 flex items-center justify-center tracking-widest pt-12">
            SP
            <div className="rounded-full bg-amber-400 h-10 w-10 mr-1"></div>
            RTS
          </div>
        </div>
      </>
    );
  }
}
