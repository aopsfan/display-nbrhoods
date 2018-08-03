import React, { Component } from 'react';
import './App.css';
import { data } from './data.json';
import Plan from './component/Plan';
import Index from './component/Index';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.testPlan = data.communities[0].plans[1];
    this.state = { communityIndex: 0, planIndex: 0 };
  }

  community = () => {
    return data.communities[this.state.communityIndex];
  }

  plan = () => {
    return this.community().plans[this.state.planIndex];
  }

  elevationThumbPath = thumb => {
    return data.elevation_thumb_prefix + '/' + thumb;
  }

  selectCommunity = event => {
    const value = parseInt(event.target.value, 10);
    this.setState(prevState => {
      return { communityIndex: value, planIndex: 0 };
    });
  }

  selectPlan = event => {
    const value = parseInt(event.target.value, 10);
    this.setState(prevState => {
      return { planIndex: value };
    });
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
            <div>
            <select onChange={this.selectCommunity}>
              {data.communities.map((community, index) => {
                return <option key={index} value={index}>{community.name}</option>
              })}
            </select>
            <select onChange={this.selectPlan}>
              {this.community().plans.map((plan, index) => {
                return <option key={index} value={index}>{plan.name}</option>
              })}
            </select>
            <Plan plan={this.plan()} elevationThumbPath={this.elevationThumbPath} />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
