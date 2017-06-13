import React, { Component } from 'react';
import FindJobFilter from "./FindJobFilter";
import JobList from "./JobList";
import { Link } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <FindJobFilter />
        <Link to="/post" >
          <button>Job Post</button>
        </Link>
        <JobList />
      </div>
    );
  }
}
