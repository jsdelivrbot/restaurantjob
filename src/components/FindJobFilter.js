import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";
import { getTitles, getStates } from "../actions/action_checkbox";
import { setRestaurantFilter } from "../actions/action_filter";



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
    // console.log("event", event.target.value)
    if (fieldName === "title")
      this.props.dispatch(getTitles(event.target.value));
    else
      this.props.dispatch(getStates(event.target.value));
  }

  onSubmit(value) {
    this.props.dispatch(setRestaurantFilter(value));
  }
  renderField(field) {
    // console.log("input value", field.input.value)
    return (
      <input type="text" { ...field.input } />
    )
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("p", nextProps, "s", nextState)
    this.props.initialize({
      title: nextProps.title,
      state: nextProps.state
    })
  }

  render() {
    console.log("state", this.props.restaurant_filter)
    const { handleSubmit } = this.props;
    return (
      <div style={ divStyle }>
        查找工作：
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div>
            <p>Title</p>
            {/* <Field name="title" val={ this.props.title } onFocus={ () => this.setState({ showTitleForm: true }) } component={ this.renderField }/> */}
            <Field name="title" component="input" type="text" onFocus={ () => this.setState({ showTitleForm: true }) } onChange={ this.handleChange.bind(this, "title") } />
            <input name="test" value={ this.props.title } />
          </div>
          <div>
            <p>Where</p>
            <Field name="state" component="input" type="text" onFocus={ () => this.setState({ showStateForm: true }) } onChange={ this.handleChange.bind(this, "state") } />
            {/* <Field name="state" val={ this.props.state } onFocus={ () => this.setState({ showStateForm: true}) } component={ this.renderField } /> */}

          </div>
          <button type="submit">Search</button>
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
    state: state.checkbox.states,
    restaurant_filter: state.filter.restaurant_filter
  }
}

FindJobFilter = reduxForm({
  form: "jobtitleForm"
})(FindJobFilter);

export default connect(mapStateToProps)(FindJobFilter)
