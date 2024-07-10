import React, { Component } from "react";
import List from "./components/List";
import Heard from "./components/Heard";
export default class App extends Component {
  state = {
    userData: [],
    isFirst: true, //是否是第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //错误信息
  };
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div className="container">
        <Heard updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
