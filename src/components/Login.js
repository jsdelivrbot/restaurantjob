import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Username(email):</label>
          <Field type="text" component="input" name="email" />
          <label>Password:</label>
          <Field type="password" component="input" name="password" />
        </form>
      </div>
    )
  }
}
