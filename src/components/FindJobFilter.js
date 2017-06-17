import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getTitles, getStates } from "../actions/action_checkbox";



var divStyle = {
  position: "relative"
}

class FindJobFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTitleForm: false,
      showStateForm: false
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     title: nextProps.title,
  //     state: nextProps.state
  //   })
  // }
  // componentDidMount() {
  //   this.setState({
  //     titles: this.props.titles.join(","),
  //     states: this.props.titles.join(",")
  //   })
  // }
  // componentWillMount() {
  //   this.state = {
  //     title: "",
  //     state: ""
  //   }
  // }

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
      <div>
        查找工作：
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div style={ divStyle }>
            <p>Title</p>
            <Field name="title" val={ this.props.title } onFocus={ () => this.setState({ showTitleForm: true }) } component={ this.renderField } onChange={ this.handleChange.bind(this, "title") } />
            { this.state.showTitleForm && <SearchForm handleClick={ () => this.setState({ showTitleForm: false}) } names={ ["Sushi Chef", "Sushi Helper", "Stirfry Chef", "Stirfry Helper", "Fryer", "Kitchen Helper", "Food Runner", "Buser", "Server", "Deliverer", "Dish Washer"] } form="title" /> }

          </div>
          <div style={ divStyle }>
            <p>Where</p>
            <Field name="state" val={ this.props.state } onFocus={ () => this.setState({ showStateForm: true}) } component={ this.renderField } onChange={ this.handleChange.bind(this, "state") } />
            { this.state.showStateForm && <SearchForm handleClick={ () => this.setState({ showStateForm: false}) } names={ ["ALL", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"] } form="state" /> }

          </div>
          <button type="submit" >Search</button>
        </form>
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
