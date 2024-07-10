import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "跑步", done: false },
      { id: "002", name: "游泳", done: true },
      { id: "003", name: "跳舞", done: false },
    ],
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    this.setState({
      todos: [todoObj, ...todos],
    });
  };

  changeTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((obj) => {
      if (obj.id === id) return { ...obj, done };
      else return obj;
    });
    this.setState({
      todos: newTodos,
    });
  };
  deldteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((it) => {
      return it.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };
  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((it) => {
      return { ...it, done };
    });
    this.setState({
      todos: newTodos,
    });
  };
  // 清除所有已完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((it) => {
      return !it.done;
    });
    this.setState({
      todos: newTodos,
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            changeTodo={this.changeTodo}
            deldteTodo={this.deldteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
