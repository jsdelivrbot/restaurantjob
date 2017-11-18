import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../actions/action_restaurant";

var divStyle = {
  border: "red 1px solid"
}

var ulStyle = {
  display: "flex",
  justifyContent: "space-between",
  listStyleType: "none"
}

function Language(props) {
  console.log(props);
  return (
    <div>message</div>
  )
}

class JobList extends Component {
  componentWillMount() {
    this.props.dispatch(getRestaurants());
  }

  restaurants() {
    if (this.props.restaurants && this.props.restaurants != []) {
      var restaurants = this.props.restaurants;
      var filterObj = this.props.restaurant_filter;
      restaurants = restaurants.filter(restaurant => {
        for (var prop in filterObj) {
          if (prop == "salary") {
            if (restaurant[prop] < filterObj[prop] - 500 || restaurant[prop] > filterObj[prop] + 500)
              return false;
          }
          else {
            var filterObjProp = filterObj[prop].toLowerCase();
            if(!(filterObjProp.includes(restaurant[prop]) || filterObjProp.includes('all') || filterObjProp == '')) {
              return false;
            }
          }
        }
        return true;
      })
      console.log(restaurants,'restaurants');
    return (
        restaurants.map(restaurant => (
          <ul key={ restaurant.id } style={ulStyle}>
            <li>{ restaurant.title }</li>
            <li>{ restaurant.city }</li>
            <li>{ restaurant.state }</li>
            <li>{ restaurant.zipcode }</li>
            <li>{ restaurant.salary }</li>
            <li>{ restaurant.expertise }</li>
          </ul>
        ))
      )
    }
    else {
      return <div>no results found</div>
    }
  }

  render() {
    // if (!this.props.restaurants) return <div>Loading...</div>

    // const restaurants = this.props.restaurants
    return (
      <div style={ divStyle }>
        <ul style={ulStyle}>
          <li>Job Position</li>
          <li>City</li>
          <li>Statee</li>
          <li>Zipcode</li>
          <li>Salary</li>
          <li>Experience</li>
        </ul>
        { this.restaurants() }
        <Language restaurants={this.props.restaurants} another='333'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurant.all,
    restaurant_filter: state.filter.restaurant_filter
  }
}

export default connect(mapStateToProps)(JobList)
