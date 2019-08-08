import React, { Component } from 'react'
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserInput/>
        <UserOutput/>
      </div>
    )
  }
}

