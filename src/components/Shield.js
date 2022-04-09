import React, { Component } from "react";

export default class Shield extends Component {
  render() {
    return (
      <>
        <div className="relative w-fit m-auto">
          <div className="absolute inset-0 text-center top-0.5">{this.props.value}</div>
          <svg
            width="34"
            height="37"
            viewBox="0 0 34 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0V19.6376L17.0606 36.0839L34 19.7544V0.0164495L17.0606 2.31638L0 0ZM17.0606 2.33287L17.0831 2.33593H17.038L17.0606 2.33287ZM17.0606 36.201L17.0832 36.2228H17.038L17.0606 36.201Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </>
    );
  }
}
