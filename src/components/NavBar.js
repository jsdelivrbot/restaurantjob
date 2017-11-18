import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

var navStyle = {
  display: "flex",
  border: "black 1px solid",
  height: "100px",
  justifyContent: "space-between"
}

class NavBar extends Component {
  render() {
    return (
      <nav style={navStyle}>
        <div>
          <Link to="/post" >
            <button>Post Job</button>
          </Link>
          <Link to="/" >
            <button>Find Jobs</button>
          </Link>

        </div>
        <div>
          customer service: 615-668-9287
        </div>
        {/* { !this.props.candidate.email && <Link to="/login" >
          <button>Log In</button>
        </Link> } */}
        <div>
          { !this.props.candidate.email && <button>Log Out</button> }
          <Link to="/register" >
            <button>Register</button>
          </Link>
        </div>

      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { candidate: state.candidate }
}

export default connect(mapStateToProps)(NavBar);
