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
          {/* 
          1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
			    	2.具体编码：
						`<Switch>`
							`<Route path="/about" component={About}/>`
							`<Route path="/home" component={Home}/>`
							`<Redirect to="/about"/>`
						`</Switch>` */}
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
