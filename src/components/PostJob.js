import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addRestaurant } from "../actions/action_restaurant";

class PostJob extends Component {
  onSubmit(props) {
    this.props.dispatch(addRestaurant(props));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <label>Restaurant name:</label>
        <Field type="text" component="input" name="name" />
        <label>Address:</label>
        <Field type="text" component="input" name="address" />
        <label>City:</label>
        <Field type="text" component="input" name="city" />
        <label>State:</label>
        <Field type="text" component="input" name="state" />
        <label>zipcode:</label>
        <Field type="text" component="input" name="zipcode" />
        <label>phone_number:</label>
        <Field type="text" component="input" name="phone_number" />
        <label>Title:</label>
        <Field type="text" component="input" name="title" />
        <label>Expertise:</label>
        <Field type="text" component="input" name="expertise" />
        <label>Salary:</label>
        <Field type="text" component="input" name="salary" />
        <label>Phone_area:</label>
        <Field type="text" component="input" name="phone_area" />
        <label>Description:</label>
        <Field type="text" component="input" name="description" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: "postJob"
})(PostJob)
