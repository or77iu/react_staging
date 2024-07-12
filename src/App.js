import React, { Component } from "react";
import { Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
export default class App extends Component {
  render() {
    return (
      <div>
        <button>1</button>
        <Button type="primary">Primary Button</Button>
        <StepBackwardOutlined />
      </div>
    );
  }
}
