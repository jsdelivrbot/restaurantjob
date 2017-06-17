import React, { Component } from "react";
import { Fields } from "redux-form";

var checkBoxListStyle = {
  listStyleType: "none",
  display: "flex"
}

var checkBoxListItem = {
  width: "50px"
}

class CheckBox extends Component {
  renderField(fields) {
    const checkBoxList = fields.names.map( name => {
      return (
      <li key={ name } style={ checkBoxListItem }>
        <input type="checkbox" {...fields[name].input} />
        <label> { name }</label>
      </li>
    )})
    return (
      <ul style={ checkBoxListStyle }>
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
