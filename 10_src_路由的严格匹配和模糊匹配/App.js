import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"; //路由组件
import About from "./pages/About"; //路由组件
import Header from "./components/Header"; //一般组件
import MyNavLink from "./components/MyNavLink";
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
              <MyNavLink to="/about" title="About">
                About
              </MyNavLink>
              <MyNavLink to="/home/a/b" title="Home">
                Home
              </MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 使用Switch后只会展示第一个/home路径匹配的组件 
                    Switch可以提高路由匹配效率(单一匹配)
                */}
                {/*
                    默认为模糊匹配，设置exact=true开启精准匹配
                    严格匹配不要随便开启，需要再开，有时候开启会导致无法匹配二级路由
                */}
                <Switch>
                  <Route exact={true} path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}
