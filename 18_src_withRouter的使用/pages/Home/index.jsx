import React, { Component } from "react";
import Message from "./Message";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import { Route, Redirect, Switch } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
