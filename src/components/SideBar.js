import React, { Component } from "react";
import SideBarListItem from "./SideBarListItem";


export default class SideBar extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Salary Estimate(monthly)</p>
          <ul>
            <SideBarListItem text="$1000" val={ { salary: 1000 } } />
            <SideBarListItem text="$2000" val={ { salary: 2000 } } />
            <SideBarListItem text="$3000" val={ { salary: 3000 } } />
            <SideBarListItem text="$4000" val={ { salary: 4000 } } />
          </ul>
        </div>
        <div>
          <p>Experience Level</p>
          <ul>
            <SideBarListItem text="No Experience" val={ { experience: 0 } } />
            <SideBarListItem text="Under 1 year" val={ { experience: 1 } } />
            <SideBarListItem text="1 - 3 years" val={ { experience: 2 } } />
            <SideBarListItem text="3 years+" val={ { experience: 3 } } />
          </ul>
        </div>
      </div>

    )
  }
}
