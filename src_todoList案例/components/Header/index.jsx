import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired, //限制addTodo为函数
  };
  onKeyUp = (e) => {
    const { addTodo } = this.props;
    let { keyCode, target } = e;
    // 13为回车键的code值
    if (keyCode != 13) return;
    if (target.value.trim() == "") {
      alert('输入不能为空');
      return
    }
    console.log(target.value);
    const todoObj = { id: nanoid(), name: target.value, done: false };
    addTodo(todoObj);
    target.value = '';

  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}
