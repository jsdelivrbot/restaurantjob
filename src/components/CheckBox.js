import React, { Component } from "react";
import { Fields } from "redux-form";

class CheckBox extends Component {
  renderField(fields) {
    const checkBoxList = fields.names.map( name => {
      return (
      <li key={ name }>
        <input type="checkbox" {...fields[name].input} />
        <label> { name }</label>
      </li>
    )})
    return (
      <ul>
        { checkBoxList }
      </ul>
    )
  }

  render() {
    return (
      <Fields names={ this.props.names } component={ this.renderField } />
    )
  }
}

export default CheckBox;
