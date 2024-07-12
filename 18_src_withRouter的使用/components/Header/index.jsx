import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
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
    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={this.back}>后退</button> &nbsp;&nbsp;
        <button onClick={this.forward}>前进</button> &nbsp;&nbsp;
        <button onClick={this.go}>go</button> &nbsp;&nbsp;
      </div>
    );
  }
}
export default withRouter(Header);
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
