import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addCandidate } from "../actions/action_candidate";


class Register extends Component {
  onSubmit(props) {
    this.props.dispatch(addCandidate(props));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <label>Email:</label>
          <Field type="text" component="input" name="username" />
          <label>Password:</label>
          <Field type="password" component="input" name="password" />
          <label>Name:</label>
          <Field type="password" component="input" name="name" />
          <label>City:</label>
          <Field type="password" component="input" name="city" />
          <label>State:</label>
          <Field type="password" component="input" name="state" />
          <label>Zipcode:</label>
          <Field type="password" component="input" name="zipcode" />
          <label>Phone Number:</label>
          <Field type="password" component="input" name="phone_number" />
          <label>Title:</label>
          <Field type="password" component="input" name="title" />
          <label>Desire Salary:</label>
          <Field type="password" component="input" name="desire_salary" />
          <label>Expertise:</label>
          <Field type="password" component="input" name="expertise" />
          <label>Relocate:</label>
          <Field type="password" component="input" name="relocate" />
          <label>Description:</label>
          <Field type="password" component="input" name="description" />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: "registerForm"
})(Register)
