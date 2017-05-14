import React, { Component } from "react";
import CheckBox from "./CheckBox";
import { reduxForm } from "redux-form";

class SearchForm extends Component {
  onSubmit(value) {
    console.log(value);
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
