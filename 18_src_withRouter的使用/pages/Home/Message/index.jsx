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
  replaceShow = (id, title) => {
    return (e) => {
      // params参数
      this.props.history.replace(`/home/message/detail/${id}/${title}`);
      // search参数
      // this.props.history.replace(
      //   `/home/message/detail/?id=${id}&title=${title}`
      // );
      // state参数
      // this.props.history.replace(`/home/message/detail`, { id, title });
    };
  };
  pushShow = (id, title) => {
    return (e) => {
      // params参数
      this.props.history.push(`/home/message/detail/${id}/${title}`);
      // search参数
      // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);
      // state参数
      // this.props.history.push(`/home/message/detail`, { id, title });
    };
  };
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  go = () => {
    this.props.go(-1);
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((obj) => {
            return (
              <li key={obj.id}>
                {/**/}
                <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>
                  {obj.title}
                </Link>
                &nbsp;&nbsp;
                <button onClick={this.pushShow(obj.id, obj.title)}>push</button>
                &nbsp;&nbsp;
                <button onClick={this.replaceShow(obj.id, obj.title)}>
                  replace
                </button>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <Switch>
          <Route path="/home/message/detail/:id/:title" component={Detail} />
        </Switch>
        <button onClick={this.back}>后退</button> &nbsp;&nbsp;
        <button onClick={this.forward}>前进</button> &nbsp;&nbsp;
        <button onClick={this.go}>go</button> &nbsp;&nbsp;
      </div>
    );
  }
}
