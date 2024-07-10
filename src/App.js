import React, { Component } from 'react'
import List from './components/List'
import Heard from './components/Heard'
export default class App extends Component {
  render() {
    return (
      <div>
         <Heard/>
         <List/>
      </div>
    )
  }
}
