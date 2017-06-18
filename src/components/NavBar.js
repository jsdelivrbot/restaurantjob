import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

var navStyle = {
  display: "block",
  border: "black 1px solid",
  height: "100px"
}

class NavBar extends Component {
  render() {
    return (
      <nav>
        这里是navigation bar
        {/* { !this.props.candidate.email && <Link to="/login" >
          <button>Log In</button>
        </Link> } */}
        { !this.props.candidate.email && <button>Log Out</button> }
        <Link to="/register" >
          <button>Register</button>
        </Link>
        (提示注册可获得更多工作机会)
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { candidate: state.candidate }
}

export default connect(mapStateToProps)(NavBar);
