import React, { Component } from 'react';
import FindJobFilter from "./FindJobFilter";
import JobList from "./JobList";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Header from "./Header";
import { Link } from "react-router";

var flexStyle = {
  display: "flex"
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
          <div style={flexStyle}>
            <SideBar />
            <div>
              <FindJobFilter />
              <JobList />
            </div>
          </div>
      </div>
    )
  }
}
