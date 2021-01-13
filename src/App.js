import './App.css';
import { Component } from 'react';
import Transactions from './components/transactions';
import Operatinos from './components/Operations';
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';








class App extends Component{

constructor(){
  super()
  this.state = {
    dummyData :[
      { amount: 3200, vendor: "Elevation", category: "Salary" },
      { amount: -7, vendor: "Runescape", category: "Entertainment" },
      { amount: -20, vendor: "Subway", category: "Food" },
      { amount: -98, vendor: "La Baguetterie", category: "Food" }
    ]
  }
}

// async updateData(){
//   let newData = await axios.get(`http://localhost:2011/trans`)
//   this.setState({dummyData : newData})
// }

render(){
  
  return (
    <Router>
      <div >
        <div>
          <Link to="/">Transactions</Link>   
          <Link to="/addTrans">Add New Transactions</Link>
        </div>
        <div>
        <Route path="/" exact component={Transactions} />
        <Route path="/addTrans" exact component={Operatinos} />
        </div>
      </div>
    </Router>
    
  );
}

} 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
