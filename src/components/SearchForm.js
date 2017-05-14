import React, { Component } from "react";
import CheckBox from "./CheckBox";
import { reduxForm } from "redux-form";
import { getTitles, getStates } from "../actions/action_checkbox";

class SearchForm extends Component {
  onSubmit(value) {
    value = Object.keys(value).join(",");
    if (this.props.form === "title")
      this.props.dispatch(getTitles(value));
    else
      this.props.dispatch(getStates(value));
  }

  render() {
    return (
      <form onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
        <CheckBox names={ this.props.names } />
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default reduxForm({})(SearchForm)
