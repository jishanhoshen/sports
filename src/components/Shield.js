import React, { Component } from "react";

export default class Shield extends Component {
  render() {
    var size = 36;
    if(this.props.size){
      size = this.props.size;
    }
    
    return (
      <>
        <div className={this.props.style + " w-fit m-auto inline-flex items-center justify-center"}>
          <div className="shildvalue absolute z-10">{this.props.value}</div>
          <svg
            className="absolute"
            width={size}
            height={size}
            viewBox={"0 0 " + size + " " + (size)}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // d="M0 0V19.6376L17.0606 36.0839L34 19.7544V0.0164495L17.0606 2.31638L0 0ZM17.0606 2.33287L17.0831 2.33593H17.038L17.0606 2.33287ZM17.0606 36.201L17.0832 36.2228H17.038L17.0606 36.201Z"
              d={"M 0 0 L "+(size / 2)+" " +(size / 6)+ " L "+(size)+" 0 L "+(size)+" "+( (size / 100) * 70)+" L "+(size/2)+" "+(size)+" L 0 "+((size / 100) * 70)+" L 0 0"}
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </>
    );
  }
}
