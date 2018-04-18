import React, { Component } from 'react'
import './App.css'
import Todos from './Todos'
import BtcAddressList from './btc_address_list'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<BtcAddressList />
        <Todos />
      </div>
    )
  }
}

export default App
