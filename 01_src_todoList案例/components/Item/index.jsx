import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // done: PropTypes.boolean.isRequired,
    changeTodo: PropTypes.func.isRequired, //限制changeTodo为函数
  };
  state = {
    mouse: false,
  };
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };
  handleCheck = (id) => {
    const { changeTodo } = this.props;
    return (event) => {
      const { target } = event;
      changeTodo(id, target.checked);
    };
  };
  handleDelete = (id) => {
    const { deldteTodo } = this.props;
    if (window.confirm("确认删除吗？")) {
      deldteTodo(id);
    }
    console.log(id);
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div style={{ backgroundColor: mouse ? "#ddd" : "white" }}>
        <li
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            onClick={() => {
              this.handleDelete(id);
            }}
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
