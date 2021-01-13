import React, { Component } from 'react';
import axios from 'axios';

class Transaction extends Component {

delet = async() => {
  console.log(this.props.info)
  await axios.delete(`http://localhost:2011/deleteTrans/${this.props.info._id}`)
  await this.props.renderer()
  // http://localhost:<server-port>/transactions
}
render() {
    return (
      <div>
          {this.props.info.amount} {this.props.info.vendor} {this.props.info.category} 
          <span onClick = {this.delet}>-</span>
      </div>
    )

  }
}

export default Transaction