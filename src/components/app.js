import React, { Component } from 'react';
import FindJobFilter from "./FindJobFilter";
import JobList from "./JobList";
import NavBar from "./NavBar";
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FindJobFilter />
        <Link to="/post" >
          <button>Job Post</button>
        </Link>
        <JobList />
      </div>
    );
  }
}
