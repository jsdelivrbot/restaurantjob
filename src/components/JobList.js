import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../actions/action_restaurant";

class JobList extends Component {
  componentWillMount() {
    this.props.dispatch(getRestaurants());
  }

  render() {
    if (!this.props.restaurants) return <div>Loading...</div>

    const restaurants = this.props.restaurants.map(restaurant => (
      <ul key={ restaurant.id } >
        <li>{ restaurant.name }</li>
        <li>{ restaurant.city }</li>
        <li>{ restaurant.state }</li>
        <li>{ restaurant.zipcode }</li>
        <li>{ restaurant.title }</li>
        <li>{ restaurant.salary }</li>
        <li>{ restaurant.expertise }</li>
        <div>{ restaurant.description }</div>
      </ul>
    ))
    return (
      <div>

        { restaurants }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurant.all
  }
}

export default connect(mapStateToProps)(JobList)
