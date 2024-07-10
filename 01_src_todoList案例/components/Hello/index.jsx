import React, { Component } from 'react'
/* css的模块化  如何使用：1.将css文件名添加.module 
            2.在使用的文件中通过import导入并使用变量接受 
            3.模板中直接通过变量.类名 */
import hello from './index.module.css'
export default class Hello extends Component {
  render() {
    return (
      <div className={hello.title}>
        hello
      </div>
    )
  }
}
