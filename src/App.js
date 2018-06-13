import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import testData from './testData.json';
import JobList from './JobList';

const jobs = testData.sort((a, b) => a.relevanceScore - b.relevanceScore);

const pagingFilter = (items, page = 0, itemCount = 10) => {
  // returns items for current page only
  return items.slice(0, page * itemCount);
};

const ITEMS_PER_PAGE = 10;

class App extends Component {
  state = {
    page: 1
  };
  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <JobList
          jobs={pagingFilter(jobs, this.state.page, ITEMS_PER_PAGE)}
          loadMore={this.loadMore}
        />
      </div>
    );
  }
}

export default App;
