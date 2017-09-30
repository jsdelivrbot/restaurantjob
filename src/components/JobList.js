import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../actions/action_restaurant";

var divStyle = {
  border: "red 1px solid"
}

class JobList extends Component {
  componentWillMount() {
    this.props.dispatch(getRestaurants());
  }

  render() {
    if (!this.props.restaurants) return <div>Loading...</div>

    // const restaurants = this.props.restaurants

    const restaurants = this.props.restaurants.map(restaurant => (
      <ul key={ restaurant.id } >
        <li>Restaurant Name:{ restaurant.name }</li>
        <li>City:{ restaurant.city }</li>
        <li>State:{ restaurant.state }</li>
        <li>Zipcod:{ restaurant.zipcode }</li>
        <li>Job Position:{ restaurant.title }</li>
        <li>Salary:{ restaurant.salary }</li>
        <li>Experience:{ restaurant.expertise }</li>
        <div>Description:{ restaurant.description }</div>
      </ul>
    ))
    return (
      <div style={ divStyle }>
        查找结果:
        { restaurants }
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
