import React, { Component } from "react";
import PropTypes from 'prop-types'
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired, //限制todos必传，为数组
    changeTodo: PropTypes.func.isRequired, //限制changeTodo为函数
  };
  render() {
    console.log(this.props, "list");
    const { todos, changeTodo,deldteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((it) => {
          return <Item {...it} key={it.id} changeTodo={changeTodo} deldteTodo={deldteTodo}/>;
        })}
      </ul>
    );
  }
}
