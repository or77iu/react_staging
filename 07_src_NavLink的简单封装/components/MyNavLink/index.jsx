import React, { Component } from 'react'
import { Link,NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
     /*标签体内容是一个特殊的标签属性 
     children 通过this.props.children可以获取标签体内容 */
    return (
      <div>
          <NavLink activeClassName="a" className="list-group-item" {...this.props}/>
      </div>
    )
  }
}
