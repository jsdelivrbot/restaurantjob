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
    this.props.handleClick();
  }

  // handleClick() {
  //   this.props.handleClick();
  // }

  render() {
    return (
      <form style={ this.props.formStyle } onSubmit={ this.props.handleSubmit(this.onSubmit.bind(this)) }>
        <CheckBox checkBoxListItem={ this.props.checkBoxListItem } names={ this.props.names } />
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "checkBoxForm"
})(SearchForm)
