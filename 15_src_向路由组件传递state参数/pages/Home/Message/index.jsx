import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Detail from "./Details";
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
      { id: "04", title: "消息4" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((obj) => {
            return (
              <li key={obj.id}>
                {/* 向路由组件传递state参数 to接收一个对象*/}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: obj.id, title: obj.title },
                  }}
                >
                  {obj.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <Switch>
          {/* 声明接受state参数 */}
          <Route path="/home/message/detail" component={Detail} />
        </Switch>
      </div>
    );
  }
}
