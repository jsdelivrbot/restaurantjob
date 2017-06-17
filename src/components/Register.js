import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { addCandidate } from "../actions/action_candidate";
import { browserHistory } from "react-router";


class Register extends Component {
  onSubmit(props) {
    this.props.dispatch(addCandidate(props));
    browserHistory.push("/");
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
          <Field type="text" component="input" name="name" />
          <label>City:</label>
          <Field type="text" component="input" name="city" />
          <label>State:</label>
          <Field type="text" component="select" name="state" >
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="DC">DC</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="PR">PR</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                  <option value="GU">GU</option>
                  <option value="AS">AS</option>
                  <option value="MP">MP</option>
                  <option value="VI">VI</option>
                  <option value="AA">AA</option>
                  <option value="AE">AE</option>
                  <option value="AP">AP</option>
          </Field>
          <label>Zipcode:</label>
          <Field type="text" component="input" name="zipcode" />
          <label>Phone Number:</label>
          <Field type="text" component="input" name="phone_number" />
          <label>Title:</label>
          <Field type="text" component="select" name="title" >
            <option value="sushichef">Sushi Chef</option>
            <option value="habachichef">Habachi Chef</option>
            <option value="kitchenhelper">Kitchen Helper</option>
            <option value="dishwasher">Dish Washer</option>
            <option value="fryer">Fryer</option>
            <option value="foodrunner">Food Runner</option>
          </Field>
          <label>Desire Salary:</label>
          <Field type="text" component="input" name="desire_salary" />
          <label>Experience:</label>
          <Field type="text" component="select" name="expertise" >
            <option value="1">No experience</option>
            <option value="2">Less than 1 year</option>
            <option value="3">1-3 years</option>
            <option value="4">3 Years+</option>
          </Field>
          <label>Relocate:</label>
          <Field type="text" component="select" name="relocate" >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label>Description:</label>
          <Field type="text" component="input" name="description" />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: "registerForm"
})(Register)
