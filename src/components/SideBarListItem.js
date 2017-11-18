import React, { Component } from "react";
import { setRestaurantFilter } from "../actions/action_filter";
import { connect } from "react-redux";


class SideBarListItem extends Component {
  handleClick(val) {
    var obj = this.props.restaurant_filter;
    console.log("gime obj",obj)
    obj = { ...obj, ...val }
    console.log("gime obj",obj)
    this.props.dispatch(setRestaurantFilter(obj));
  }
  render() {
    return (
      <li onClick={ this.handleClick.bind(this, this.props.val) }>{ this.props.text }</li>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurant_filter: state.filter.restaurant_filter
  }
}

export default connect(mapStateToProps)(SideBarListItem)
