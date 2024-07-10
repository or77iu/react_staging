import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
export default class List extends Component {
  state = {
    userData: [],
    isFirst: true, //是否是第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //错误信息
  };
  componentDidMount() {
    this.token = PubSub.subscribe("users", (_, data) => {
      console.log(data);
      this.setState(data);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { userData, isLoading, isFirst, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h3>输入关键字，随后点击搜索</h3>
        ) : isLoading ? (
          <h3>Loading....</h3>
        ) : err ? (
          err
        ) : (
          userData.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="avater"
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
