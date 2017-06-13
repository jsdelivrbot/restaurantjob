import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <nav>
        { this.props.candidate.email && <Link to="/login" >
          <button>Log In</button>
        </Link> }
        { !this.props.candidate.email && <button>Log Out</button> }
        <Link to="/register" >
          <button>Register</button>
        </Link>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { candidate: state.candidate }
}

export default connect(mapStateToProps)(NavBar);
