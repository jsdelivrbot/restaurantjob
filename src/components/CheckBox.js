import React, { Component } from "react";
import { Fields } from "redux-form";

var checkBoxListStyle = {
  listStyleType: "none",
  display: "flex",
  flexWrap: "wrap"
}



class CheckBox extends Component {
  renderField(fields) {
    const checkBoxList = fields.names.map( name => {
      return (
      <li key={ name } style={ fields.checkBoxListItem }>
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
      <Fields names={ this.props.names } checkBoxListItem={ this.props.checkBoxListItem } component={ this.renderField } />
    )
  }
}

export default CheckBox;
