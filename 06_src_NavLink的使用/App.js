import React, { Component } from "react";
import { Link, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home"; //路由组件
import About from "./pages/About"; //路由组件
import Header from "./components/Header"; //一般组件
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              {/* <h2>React Router Demo</h2> */}
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠a标签跳转 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
              {/* 在react中靠路由链接实现切换组件 --编写路由链接*/}
              <NavLink activeClassName="a" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="a" className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
