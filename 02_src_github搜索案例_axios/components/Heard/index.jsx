import React, { Component } from "react";
import axios from "axios";

export default class Heard extends Component {
  handleClick = () => {
    const { updateAppState } = this.props;
    // 发送请求前通知APP更新状态
    updateAppState({
      isFirst: false,
      isLoading: true,
    });
    // 连续结构赋值并重命名
    const {
      keyWordElement: { value: keyWord },
    } = this;
    const url = "http://localhost:3000/api/search/users2?q=";
    axios
      .get(url + keyWord)
      .then((response) => {
        console.log(response, response.data);
        updateAppState({
          isLoading: false,
          userData: response.data.items,
        });
      })
      .catch((e) => {
        // 请求失败后通知App更新状态
        updateAppState({
          isLoading: false,
          err: e.message,
        });
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.keyWordElement = c;
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    );
  }
}
