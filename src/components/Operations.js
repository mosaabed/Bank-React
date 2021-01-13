import React, { Component } from 'react';
import axios from 'axios';


class Operatinos extends Component {
  constructor() {
    super()
    this.state = {
        amount: "",
        vendor: "",
        category: ""
    }
  }

  handleSelect = event => {
    const {value, name} = event.target;    
    this.setState({[name]: value})
  }

  addTrans = async () =>{
    let newTrans = {amount : this.state.amount , vendor : this.state.vendor , category :this.state.category}
    newTrans.amount = newTrans.amount * 1
    console.log(newTrans)
    await axios.post(`http://localhost:2011/addTrans`,newTrans)
    this.setState({
      amount: "",
      vendor: "",
      category: ""
    })
    
  }
  addTrans2 = async () =>{
    let newTrans = {amount : this.state.amount , vendor : this.state.vendor , category :this.state.category}
    newTrans.amount = newTrans.amount * -1
    await axios.post(`http://localhost:2011/addTrans`,newTrans)
    this.setState({
      amount: "",
      vendor: "",
      category: ""
    })
  }

  render() {
    return (
      <div>
          <div>
            <input id ="amount" value={this.state.amount} name="amount" onChange={this.handleSelect}></input>
            <input id ="vendor" value={this.state.vendor} name="vendor" onChange={this.handleSelect}></input>
            <input id ="category" value={this.state.category} name="category" onChange={this.handleSelect}></input>
          </div>
          <div>
              <button onClick = {this.addTrans}>deposit</button>
              <button onClick = {this.addTrans2}>withdraw</button>
          </div>
      </div>
    )

  }
}

export default Operatinos