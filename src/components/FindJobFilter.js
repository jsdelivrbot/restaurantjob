import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getTitles, getStates } from "../actions/action_checkbox";



var divStyle = {
  position: "relative",
  border: "blue 1px solid"
}

var titleCheckBoxListItem = {
  width: "180px"
}

var stateCheckBoxListItem = {
  width: "50px"
}

var titleFormStyle = {
  position: "absolute",
  top: "65px",
  border: "red 1px solid",
  zIndex: "10",
  background: "white",
  color: "red",
  width: "600px",
}

var stateFormStyle = {
  position: "absolute",
  top: "135px",
  border: "red 1px solid",
  zIndex: "10",
  background: "white",
  color: "red",
  width: "600px",
}

class FindJobFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTitleForm: false,
      showStateForm: false
    }
  }

  handleChange(fieldName, event) {
    if (fieldName === "title")
      this.props.dispatch(getTitles(event.target.value));
    else
      this.props.dispatch(getStates(event.target.value));
  }

  onSubmit(value) {
    console.log(value)
  }
  renderField(field) {
    console.log("value", field)
    return (
      <input type="text" { ...field.input } value={ field.val } />
    )
  }

  render() {
    console.log("state", this.state)
    const { handleSubmit } = this.props;
    return (
      <div style={ divStyle }>
        查找工作：
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div>
            <p>Title</p>
            <Field name="title" val={ this.props.title } onFocus={ () => this.setState({ showTitleForm: true }) } component={ this.renderField } onChange={ this.handleChange.bind(this, "title") } />

          </div>
          <div>
            <p>Where</p>
            <Field name="state" val={ this.props.state } onFocus={ () => this.setState({ showStateForm: true}) } component={ this.renderField } onChange={ this.handleChange.bind(this, "state") } />

          </div>
          <button type="submit" >Search</button>
        </form>
        { this.state.showTitleForm && <SearchForm formStyle={ titleFormStyle } checkBoxListItem={ titleCheckBoxListItem } handleClick={ () => this.setState({ showTitleForm: false}) } names={ ["Sushi Chef", "Sushi Helper", "Stirfry Chef", "Stirfry Helper", "Fryer", "Kitchen Helper", "Food Runner", "Buser", "Server", "Deliverer", "Dish Washer"] } form="title" /> }
        { this.state.showStateForm && <SearchForm formStyle={ stateFormStyle } checkBoxListItem={ stateCheckBoxListItem } handleClick={ () => this.setState({ showStateForm: false}) } names={ ["ALL", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"] } form="state" /> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.checkbox.titles,
    state: state.checkbox.states
  }
}

export default reduxForm({
  form: "jobtitleForm"
})(
  connect(mapStateToProps)(FindJobFilter)
)
