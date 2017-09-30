import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Salary Estimate(monthly)</p>
          <ul>
            <li>$1000+</li>
            <li>$2000+</li>
            <li>$3000+</li>
          </ul>
        </div>
        <div>
          <p>Experience Level</p>
          <ul>
            <li>No Experience</li>
            <li>Under 1 year</li>
            <li>1 - 3 years</li>
            <li>3 years+</li>
          </ul>
        </div>
      </div>

    )
  }
}
