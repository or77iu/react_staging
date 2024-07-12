import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
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
                {/*link和NavLink默认为push push路由会留下痕迹，改成replace不会留下痕迹*/}
                <Link
                  replace={true}
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
