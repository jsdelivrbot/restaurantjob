import React, { Component } from "react";

var divStyle = {
  height: "80px",
  border: "gray 1px solid"
}

export default class Header extends Component {
  render() {
    return (
      <div style={ divStyle }>
        logo和广告等信息
      </div>
    )
  }
}
