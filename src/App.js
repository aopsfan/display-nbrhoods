import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Plan from './component/Plan';

class App extends Component {
  testPlan = data.data.communities[0].plans[1];

  render() {
    return (
      <div className="App">
        <Plan plan={this.testPlan} />
      </div>
    );
  }
}

export default App;
