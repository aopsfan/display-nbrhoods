import React, { Component } from 'react';
import './App.css';
import { data } from './data.json';
import PlanPicker from './component/PlanPicker';
import Index from './component/Index';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  elevationThumbPath = thumb => {
    return data.elevation_thumb_prefix + '/' + thumb;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" render={() => (
            <div>
              <Link to="/">View All</Link>
              <Link to="/plan">Select Community</Link>
            </div>
          )} />
          <Route exact path="/" render={() => (
            <Index communities={data.communities} elevationThumbPath={this.elevationThumbPath} />
          )} />
          <Route exact path="/plan" render={() => (
            <PlanPicker communities={data.communities} elevationThumbPath={this.elevationThumbPath} />
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
