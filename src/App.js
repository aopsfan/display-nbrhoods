import React, { Component } from 'react';
import './App.css';
import { data } from './data.json';
import Plan from './component/Plan';

class App extends Component {
  testPlan = data.communities[0].plans[1];

  elevationThumbPath = thumb => {
    return data.elevation_thumb_prefix + '/' + thumb;
  }

  render() {
    return (
      <div className="App">
        <Plan plan={this.testPlan} elevationThumbPath={this.elevationThumbPath} />
      </div>
    );
  }
}

export default App;
