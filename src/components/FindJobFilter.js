import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getTitles, getStates } from "../actions/action_checkbox";


class FindJobFilter extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   console.log("ppp", props)
  //
  //   this.state = {
  //     title: "",
  //     state: ""
  //   }
  // }

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
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <p>Title</p>
          <Field name="title" val={ this.props.title } component={ this.renderField } onChange={ this.handleChange.bind(this, "title") } />
          <p>Where</p>
          <Field name="state" val={ this.props.state } component={ this.renderField } onChange={ this.handleChange.bind(this, "state") } />
          <button type="submit" >Submit</button>
        </form>
        <SearchForm names={ ["Sushi Chef", "Habachi Chef"] } form="title" />
        <SearchForm names={ ["NY", "MN", "TN"] } form="state" />
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
