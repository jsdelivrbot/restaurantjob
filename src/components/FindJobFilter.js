import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Field, reduxForm } from "redux-form";

class FindJobFilter extends Component {
  onSubmit(value) {
    console.log(value)
  }
  renderField(field) {
    return (
      <input type="text" { ...field.input } />
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <p>Title</p>
          <Field name="title" component={ this.renderField } />
          <p>Where</p>
          <Field name="state" component={ this.renderField } />
          <button type="submit" >Submit</button>
        </form>
        <SearchForm names={ ["Sushi Chef", "Habachi Chef"] } form="title" />
        <SearchForm names={ ["NY", "MN", "TN"] } form="state" />
      </div>
    )
  }
}

export default reduxForm({
  form: "jobtitleForm"
})(FindJobFilter)
