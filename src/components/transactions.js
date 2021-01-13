import Transaction from "./transaction"
import React, { Component } from 'react';
import axios from 'axios';

class Transactions extends Component {
  constructor(){
    super()
    this.state = {
      newData: []
    }
  }

  componentDidMount = async() => {
    const response = await axios.get(`http://localhost:2011/Trans`)
    this.setState({ newData: response.data })
  }

  render = () => {
    
    return (
      <div>
          {this.state.newData.map(tran => <Transaction info = {tran} key= {tran} renderer={this.componentDidMount}/>)}
      </div>
    )

  }
}

export default Transactions