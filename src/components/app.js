import React, { Component } from 'react';
import FindJobFilter from "./FindJobFilter";
import JobList from "./JobList";

export default class App extends Component {
  render() {
    return (
      <div>
        <FindJobFilter />
        <JobList />
      </div>
    );
  }
}
