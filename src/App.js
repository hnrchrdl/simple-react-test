import React, { Component } from 'react';
import logo from './logo.svg';
import testData from './testData.json';
import JobList from './JobList';
import { pagingFilter, sortJobsByRelevance } from './lib';
import styled from 'styled-components';

const ITEMS_PER_PAGE = 10;
const jobs = testData.sort(sortJobsByRelevance);
const initialState = { page: 1 };

class App extends Component {
  state = initialState;
  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  render() {
    return (
      <AppContainer>
        <Header>
          <HeaderImage src={logo} alt="logo" />
        </Header>
        <main>
          <JobList
            jobs={pagingFilter(jobs, this.state.page, ITEMS_PER_PAGE)}
            loadMore={this.loadMore}
          />
        </main>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
`;
const HeaderImage = styled.img`
  height: 80px;
`;

export default App;
